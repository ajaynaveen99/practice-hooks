import { useReducer } from "react";

const initialState = {
  size: "medium",
};

function textSizeReducer(state, action) {
  switch (action.type) {
    case "SMALL":
      return { size: "small" };

    case "MEDIUM":
      return { size: "medium" };

    case "LARGE":
      return { size: "large" };

    default:
      return state;
  }
}

export default function TextSizeController() {
  const [state, dispatch] = useReducer(textSizeReducer, initialState);

  return (
    <div>
      <p style={{ fontSize: state.size === "small" ? "14px" : state.size === "medium" ? "18px" : "24px" }}>
        Hello React
      </p>

      <button onClick={() => dispatch({ type: "SMALL" })}>Small</button>
      <button onClick={() => dispatch({ type: "MEDIUM" })}>Medium</button>
      <button onClick={() => dispatch({ type: "LARGE" })}>Large</button>
    </div>
  );
}
