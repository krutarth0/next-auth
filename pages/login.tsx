import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/use-auth.js";
import styles from '../styles/Login.module.scss'


export default function Home() {

  const auth = useAuth();
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState()


  useEffect(() => {
    if(auth.user){
      router.push("/")
    }
  }, [auth.user])


  const onSubmit = data => {
    console.log(data)
    auth.signin(data.email,data.password).then(res=>{
      router.push("/profile")
      
    }).catch(err=>{
      console.log(err);
      setError(err.message)
    })
  };

  const handleRegister  = (email,pass) =>{
    auth.signup(email,pass).then(res=>{
      console.log("user is created");
      router.push("/")
    })
  }

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
            {error?<span>{error}</span>:""} 
            
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


