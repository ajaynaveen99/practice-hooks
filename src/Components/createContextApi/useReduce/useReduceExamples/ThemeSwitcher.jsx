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
    <div style={styles}>
      <h2>{state.theme.toUpperCase()} MODE</h2>

      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
}
