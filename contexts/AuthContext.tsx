import { createContext, useContext, useEffect, useState } from 'react';
import nookies from 'nookies';
import firebaseClient from "../service/firebaseClient";

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});



export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", {path: '/'});
        return;
      }

      console.log(`updating token...`);
      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, {path: '/'});
    });
  }, []);

  // force refresh the token every 10 minutes
  // useEffect(() => {
  //   const handle = setInterval(async () => {
  //     const user = firebaseClient.auth().currentUser;
  //     if (user) await user.getIdToken(true);
  //   }, 10 * 60 * 1000);

  //   // clean up setInterval
  //   return () => clearInterval(handle);
  // }, []);

  return (
    <AuthContext.Provider 
      value={{

        user 
        
        }}>
      {children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};