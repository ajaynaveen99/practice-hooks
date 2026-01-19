import { useReducer } from "react";

const initialState = {
  count: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      return { count: state.count + action.payload };

      case "DECREMENT":
        return {count:state.count+action.payload}

    default:
      return state;
  }
}

export default function CounterAdd() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
    <div className="flex justify-center items-center h-screen flex-col gap-9">
        <h1>Using Payload</h1>
      <h2 className="text-6xl">Count: {state.count}</h2>

      <button className="block border p-2 bg-orange-300" onClick={() => dispatch({ type: "ADD_NUMBER", payload: 5 })}> Add(5)
      </button>
        <button className="block border p-2 bg-green-400" onClick={()=>dispatch({type:"DECREMENT",payload:-5})}>ADD(-5)</button>
       
    </div></>
  );
}
