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
    <div  className="felx items-center justify-center border text-center">
      <p style={{ fontSize: state.size === "small" ? "14px" : state.size === "medium" ? "18px" : "24px" }}>
        Hello React
      </p>
 <div className="mt-2 flex justify-center items-center gap-4 ">
      <button className="border-2 p-1 bg-green-300 " onClick={() => dispatch({ type: "SMALL" })}>Small</button>
      <button className="border-2 p-1 bg-green-300 " onClick={() => dispatch({ type: "MEDIUM" })}>Medium</button>
      <button  className="border-2 p-1 bg-green-300 " onClick={() => dispatch({ type: "LARGE" })}>Large</button></div>
    </div>
  );
}
