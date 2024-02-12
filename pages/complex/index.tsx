import React, { useState } from "react";
import "./index.css";
import Header from "./../../components/header";

function Complex() {
  const [A, setA] = useState("0");
  const [B, setB] = useState("0");
  const [C, setC] = useState("0");
  const [D, setD] = useState("0");
  const [outputHash, setOutputHash] = useState(""); //add hex check also
  const [op, setOp] = useState("");
  //a,b,c,d are strings as of now

  function handleClick() {}
  return (
    <>
      <Header />
      <div className="titlePage">COMPLEX</div>
      <div className="formMetamask">
        <h2>First Number</h2>
        <div className="form-group">
          <label>real part:</label>
          <input onChange={(e) => setA(e.target.value)}></input>
          <label>imaginary part:</label>
          <input onChange={(e) => setB(e.target.value)}></input>
        </div>

        <h2>Second Number</h2>
        <div className="form-group">
          <label>real part:</label>
          <input onChange={(e) => setA(e.target.value)}></input>
          <label>imaginary part:</label>
          <input onChange={(e) => setB(e.target.value)}></input>
        </div>

        {/* <h2>Operator</h2> */}
        <div className="form-group">
          <label>Operator:</label>
          <input onChange={(e) => setOp(e.target.value)}></input>
        </div>

        {/* <h2>Output Hash</h2> */}
        <div className="form-group">
          <label>Output Hash:</label>
          <input onChange={(e) => setOutputHash(e.target.value)}></input>
        </div>

        

        <button className="submit-btn" onClick={handleClick}>
          Generate Proof
        </button>
      </div>
    </>
  );
}

export default Complex;
