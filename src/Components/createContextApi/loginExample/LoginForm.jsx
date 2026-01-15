import { useContext,useState } from "react";
import useLoginContext from "../../../context/LoginContext";

 
 export default function LoginForm() {
    const {setUser}=useContext(useLoginContext)
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(userName&&password){
            setUser({name:userName,
                isLoggedIn:true})
        }
    }
      
   return (
     <div className="login-form">
        <form onSubmit={handleSubmit}>
           
            <input type="text"
            name="name"
            value={userName} 
            onChange={(e)=>setUserName(()=>e.target.value)}/>
             <input type="text"
            name="password"
            value={password} 
            onChange={(e)=>setPassword(()=>e.target.value)}/>
            <button type="submit">Login</button>
        </form>
     </div>
   )
 }
 