import { useState } from "react";

function Complex() {
  const [A, setA] = useState("0");
  const [B, setB] = useState("0");
  const [C, setC] = useState("0");
  const [D, setD] = useState("0");
  
  function handleClick() {}
  return (
    <>
      <input onChange={(e) => setA(e.target.value)}></input>
      <div></div>
      <input onChange={(e) => setB(e.target.value)}></input>
      <div></div>
      <input onChange={(e) => setC(e.target.value)}></input>
      <div></div>
      <input onChange={(e) => setD(e.target.value)}></input>
      <div></div>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default Complex;
