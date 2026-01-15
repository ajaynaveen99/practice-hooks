import { useContext }  from "react";
import ThemeContext from "../../context/ThemeContext";
import React from 'react'

export default function Navbar() {
    const {setTheme}=useContext(ThemeContext)
  return (
    <div><button onClick={()=>setTheme((theme)=>theme=="Light"?"Dark":"Light")}> Change Theme</button></div>
  )
}
