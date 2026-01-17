import { useReducer } from "react";

const initialState = {
  count: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-3">
      <h2 className=" text-5xl">Count: {state.count}</h2>

      <button  className="border-2 bg-green-400   p-2 rounded-sm" onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button className="border-2 bg-indigo-200 p-2  rounded-sm"  onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}
