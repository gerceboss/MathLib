import React, { useState } from "react";
import "./index.css";
export function FFT() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  function callArr1(val) {
    setArr1(val);
    //console.log(val, typeof val);
  }
  function callArr2(val) {
    setArr2(val);
  }
  function handleClick() {
    // setArr(val);
    console.log(arr1, typeof arr1[0]);
    //they are string for now
  }
  return (
    <>
      <div>
        <input onChange={(e) => callArr1(e.target.value)}></input>
        <div></div>
        <input onChange={(e) => callArr2(e.target.value)}></input>
        <div></div>
        <button onClick={() => handleClick()}>Submit</button>
      </div>
    </>
  );
}
