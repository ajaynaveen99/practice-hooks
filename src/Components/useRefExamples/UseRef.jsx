import { useRef ,useEffect} from "react";

export default function UseRef() {
  const inputRef = useRef(null);
  console.log(inputRef.current);

  
  useEffect(() => {
    // runs once after first render
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef – Auto Focus Example</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Cursor is here automatically"
      />
    </div>
  );
}

// exaple-2- previous value==========================================

// import { useState, useRef, useEffect } from "react";

// export default function PreviousValue() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(null);

//   useEffect(() => {
//     // store current count as previous for next render
//     prevCountRef.current = count;
   
//     fun()
//   }, [count]);
//   function fun(){
//     console.log("hello");
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>useRef – Previous Value Example</h2>

//       <p>Current Count: {count}</p>
//       <p>Previous Count: {prevCountRef.current}</p>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

