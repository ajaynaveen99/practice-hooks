import React from 'react'
import LoginForm from './LoginForm'
import { useContext } from 'react'
import useLoginContext from '../../../context/LoginContext'



export default function () {
    const {user,setUser}=useContext(useLoginContext)
    console.log(user)

if(!user){
  return (
    <div>
<LoginForm/>
    </div>
  )
}
return(<>
<div className="Dashboard"><h1>well come to Dashboard:{user.name}</h1>
<input type="checkbox" checked={user.isLoggedIn} />
<button onClick={()=>setUser(null)}>Logout</button>
</div>
</>)


}


