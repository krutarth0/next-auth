import Link from 'next/link'

import { useAuth } from "../hooks/use-auth";
import styles from '../styles/components/Navbar.module.scss'
import { useRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import firebaseClient from "../service/firebaseClient";

export default function Navbar (props) {
    
    const router = useRouter()
    const auth = useAuth();

    const logout = ()=>{
      firebaseClient.auth().signOut()
      router.push("/login")
    }

    if(auth.loading){
      return(
        <div className={styles.navigation}>
        <span>...</span>
        </div>
      )
    }

    if(!auth.user){
      return (
        <div className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          </div>
        
      )
    }

    return (
        <div className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <span onClick={()=>logout()}>Logout</span>
        </div>
    )
}
