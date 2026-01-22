import ThemeContext from "../../../context/ThemeContext.js";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Page from "./Page.jsx";
import "./AppComponent.css";

function AppComponent() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "Light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Page />
    </ThemeContext.Provider>
  );
}

export default AppComponent;
