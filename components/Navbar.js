import Link from 'next/link'

import { useAuth } from "../hooks/use-auth.js";
import styles from '../styles/components/Navbar.module.scss'
import { useRouter } from 'next/router'

export default function Navbar (props) {
    const auth = useAuth()
    const router = useRouter()

    const logout = ()=> auth.signout().then(res=>{
      router.push("/")
    })

    return (
        <div className={styles.navigation}>
        {
        auth.user ? 
        <>
          <Link href="/profile">Profile</Link>
          <span onClick={()=>logout()}>Logout</span>
        </>
          :
          <Link href="/login">Login</Link>
        }
            
        </div>
    )
}
