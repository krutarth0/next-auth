// // import {auth} from "../../service/firebaseConfig"

// export default async function  LogIn (req, res)  {

//   if(req.method === 'POST'){
//     const email = req.body.email
//     const pass = req.body.pass

//       try {
//         let signin = await auth.signInWithEmailAndPassword(email,pass)
//         res.status(200).send({"message":`alright,welcome abord ${signin.user.email}`})
//         return
        
//       } catch (error) {

//          res.status(401).send({"message":"well something happen and you are not authorized" ,
//         "error":error})
//         return
        
//       }
        
       
        
    
//   }


    

//   }
  

