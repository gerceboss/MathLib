import React, { useState } from "react";
import "./index.css";
import Header from "./../../components/header";

function Trigonometry() {
  const [sinA, setcosA] = useState("0");
  const [cosB, setcosB] = useState("0");
  //a ,b are strings as of now

  function handleClick() {}
  return (
    <>
      <Header />
      <div className="titlePage">TRIGONOMETRY</div>
      <div className="formMetamask">
        {/* <h2>Trigonometry</h2> */}
        <div className="form-group">
          <label>sin:</label>
          <input onChange={(e) => setcosA(e.target.value)}></input>
          <label>cos:</label>
          <input onChange={(e) => setcosB(e.target.value)}></input>
        </div>

        <button className="submit-btn" onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Trigonometry;
