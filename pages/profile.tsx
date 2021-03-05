
import { useAuth } from "../hooks/use-auth.js";
import styles from '../styles/Profile.module.scss'
import { useRouter } from 'next/router'


export default function profile() {

    const router = useRouter()
    const auth = useAuth()


    if(!auth.user){
        router.push("/login")
    }
    return (
        <div className={styles.profileHeader}>
            <h1>
                Welcome,user id
            </h1>

        </div>
    )
}
