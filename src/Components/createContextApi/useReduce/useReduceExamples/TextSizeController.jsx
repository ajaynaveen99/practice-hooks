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
      <p className="text-6xl" style={{ fontSize: state.size === "small" ? "24px" : state.size === "medium" ? "28px" : "34px" }}>
        Hello React
      </p>
 <div className="mt-2 flex justify-center items-center gap-4 ">
      <button className="border-2 p-1 bg-green-300  rounded-2xl" onClick={() => dispatch({ type: "SMALL" })}>Small</button>
      <button className="border-2 p-1 bg-green-300  rounded-2xl" onClick={() => dispatch({ type: "MEDIUM" })}>Medium</button>
      <button  className="border-2 p-1 bg-green-300 rounded-2xl" onClick={() => dispatch({ type: "LARGE" })}>Large</button></div>
    </div>
  );
}
