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
<div  className="h-screen flex items-center  justify-center bg-gray-100 ">
  <div><h2 className=" text-5xl">well come to Dashboard:{user.name}</h2>
  <label  className='block text-4xl ml-60 mt-3'>Login Status </label>
<input className=" size-10 block text-4xl ml-80 mt-3"type="checkbox" checked={user.isLoggedIn} />
<button onClick={()=>setUser(null)} className='block text-2xl ml-75 mt-3 bg-blue-500 rounded-sm p-1 text-white'>Logout</button>
</div></div>
</>)


}


