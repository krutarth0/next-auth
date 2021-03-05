import Head from 'next/head'
import Link from 'next/link'

import { useAuth } from "../hooks/use-auth.js";
import styles from '../styles/Index.module.scss'

export default function Home() {

  const auth = useAuth()
  return (
   
  
    <div className={styles.title}> 

        <h1>welcome!</h1>

    </div>
   
  )
}


