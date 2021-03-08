import styles from '../styles/Profile.module.scss'
import { useRouter } from 'next/router';
import {useAuth} from "../hooks/use-auth"

export default function profile() {
    const router = useRouter();
    const auth = useAuth()

    if(auth.loading){
        return (
            <h1 className={styles.loading}>Loading....</h1>
        )
    }

    if(!auth.user){
        router.replace("/login")
        return (
            <></>
        )
    }
    return (
        <div className={styles.profileHeader}>
            <h1>
                welcome...user 
            </h1>
        </div>
    )
}
