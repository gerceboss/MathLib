import React, { useState } from "react";
import "./index.css";
import Header from "./../../components/header";

function Trigonometry() {
  const [sinA, setcosA] = useState("0");
  const [cosB, setcosB] = useState("0");
  const [outputHash, setOutputHash] = useState("");

  function handleClick() {}
  return (
    <>
      <Header />
      <div className="titlePage">TRIGONOMETRY</div>
      <div className="formMetamask">
        <div className="form-group">
          <label>sin:</label>
          <input onChange={(e) => setcosA(e.target.value)}></input>
          <label>cos:</label>
          <input onChange={(e) => setcosB(e.target.value)}></input>
        </div>

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

export default Trigonometry;
