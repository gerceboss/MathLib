import React, { useState } from "react";
import "./index.css";
import Header from "./../../components/header";

function Complex() {
  const [A, setA] = useState("0");
  const [B, setB] = useState("0");
  const [C, setC] = useState("0");
  const [D, setD] = useState("0");
  //a,b,c,d are strings as of now

  function handleClick() {}
  return (
    <>
      <Header />
      <div className="titlePage">COMPLEX</div>
      <div className="formMetamask">
        <h2>Test 1</h2>
        <div className="form-group">
          <label>A:</label>
          <input onChange={(e) => setA(e.target.value)}></input>
          <label>B:</label>
          <input onChange={(e) => setB(e.target.value)}></input>
        </div>

        <h2>Test 2</h2>
        <div className="form-group">
          <label>A:</label>
          <input onChange={(e) => setA(e.target.value)}></input>
          <label>B:</label>
          <input onChange={(e) => setB(e.target.value)}></input>
        </div>

        <button className="submit-btn" onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Complex;
