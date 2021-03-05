
import { useAuth } from "../hooks/use-auth.js";
import styles from '../styles/Profile.module.scss'
import { useRouter } from 'next/router'
import { useEffect } from "react";


export default function profile() {

    const router = useRouter()
    const auth = useAuth()

    useEffect(() => {
        if(!auth.user){
            router.push("/login")
        }
    }, [auth.user])


    return (
        <div className={styles.profileHeader}>
            <h1>
                Welcome,user id
            </h1>

        </div>
    )
}
