import styles from '../styles/Profile.module.scss'
import { useRouter } from 'next/router';
import {useAuth} from "../hooks/use-auth"
import Link from 'next/link'

export default function profile() {
    const router = useRouter();
    const auth = useAuth()

    if(auth.loading){
        return (
            <h1 className={styles.loading}>Loading....</h1>
        )
    }

    if(!auth.user){
        // router.replace("/login")
        return (
            <>
            <h2>
            It seems you are not authorized to view this page, 
            <span style={{borderBottom:"2px solid black"}}><Link href="/login" >Sign In </Link> </span> 
            
            to explore more!
            </h2>
            </>
        )
    }
    return (
        <div className={styles.profileHeader}>
            <h1>
                welcome...{auth.user.email}
            </h1>
        </div>
    )
}
