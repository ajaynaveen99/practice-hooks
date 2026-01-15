import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import React from 'react'

export default function Page() {
    const {theme}=useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme=="Light"?"#fff":"#222",
           color: theme === "Light" ? "#000" : "#fff",
        height: "100vh",
        padding: "20px",
    }}> <h1>{theme} mode</h1></div>
  )
}
