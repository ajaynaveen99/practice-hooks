import { useState } from "react";
import useLoginContext from "../../../context/LoginContext";
import Dashboard from "./Dashboard";
export default function LoginContext() {

    const [user,setUser]=useState(null)
 
  return (
    <div>
        <useLoginContext.Provider value={{user,setUser}}>
            <Dashboard/>

        </useLoginContext.Provider>
    </div>
  )
}
