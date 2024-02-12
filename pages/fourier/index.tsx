import React, { useState } from "react";
import "./index.css";
import Header from "../../components/header";
function Fourier() {
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
      <Header />
      <div className="titlePage">FFT</div>
      <div className="formMetamask">
        <div className="form-group">
          <label>poly1:</label>
          <input onChange={(e) => callArr1(e.target.value)}></input>
          <label>poly2:</label>
          <input onChange={(e) => callArr2(e.target.value)}></input>
        </div>
        <button className="submit-btn" onClick={() => handleClick()}>
          Submit
        </button>
      </div>
    </>
  );
}
export default Fourier;
