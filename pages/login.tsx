import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import styles from '../styles/Login.module.scss'
import {useAuth} from "../hooks/use-auth"
import { useState } from 'react';



export default function Home() {


  const router = useRouter()
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const auth = useAuth()


  const onSubmit = data => {
    // console.log(data)
    setLoading(true)
    auth.signin(data.email,data.password).then(res=>{
      router.replace("/profile")
      setLoading(false)
    }).catch(err=>{
      setError(err.message)
      setLoading(false)
      
    })
  };


  return (
    <div className={styles.centerContainer}>
      <div className={styles.uiBox}>
          
            <div className={styles.title}>
              Sign in
            </div>

            <div>
            <form className ={styles.form} onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.emailBox}>
            <input name="email" required={true} ref={register}/>
            <label>&nbsp;Email&nbsp;</label>
          </div>

          <div className={styles.passBox}>
            <input name="password" type="password" required={true} ref={register} />
            <label >&nbsp;Password&nbsp;</label>
          </div>

          <div className="errors">
            {error && <span>{error}</span>} 
            {loading && <span>Loading..</span> }
          </div>
          <br/>
          <div className={styles.buttons}>
          <button  className={styles.clickbutton} type="submit"> Login</button>
           <span>or <span className={styles.textButton}>Register</span> </span>
          
          
          
          </div>

          </form>
            </div>
          
          </div>

      
    </div>
  )
}


