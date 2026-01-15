import ThemeContext from "../../context/ThemeContext.js";
import { useState } from "react";
import Navbar from "./Navbar.jsx" 
import Page from "./Page.jsx";


function AppComponent() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Page />
     
    </ThemeContext.Provider>
  );
}

export default AppComponent;


