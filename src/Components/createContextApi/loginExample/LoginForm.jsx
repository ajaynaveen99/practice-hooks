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
     <div className="flex justify-center items-center h-[100vh] bg-white-200   ">
        <form onSubmit={handleSubmit} className="border border-amber-50 p-6 bg-amber-200 rounded-2xl">
            <label>Name:</label>
            <input type="text"
            name="name"
            className="border-2 block "
            value={userName} 
            onChange={(e)=>setUserName(()=>e.target.value)}/>
               <label>Password:</label>
             <input type="text"
              className="border-2 block "
            name="password"
          
            value={password} 
            onChange={(e)=>setPassword(()=>e.target.value)}/>
            <button type="submit"  className=" border-amber-20 p-1 rounded-sm block ml-20 mt-3 bg-green-200 ">Login</button>
        </form>
     </div>
   )
 }
 