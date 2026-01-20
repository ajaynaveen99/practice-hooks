import { useReducer } from "react";

const initialState = {
  theme: "light",
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };

    default:
      return state;
  }
}

export default function ThemeSwitcher() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const styles = {
    backgroundColor: state.theme === "light" ? "#ffffff" : "#222222",
    color: state.theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
  };

  return (
    <div style={styles} className="mt-2 flex justify-center items-center gap-4   h-screen">

      <h2>{state.theme.toUpperCase()} MODE</h2>
   

      <button  className="border-2 p-1 bg-green-300 " onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
}
