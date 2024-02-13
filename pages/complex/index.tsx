import React, { useState } from "react";

import { toast } from "react-toastify";
import Ethers from "./../../utils/ethers";
import "./index.css";
import Header from "./../../components/header";

function Complex() {
  const [A, setA] = useState("0");
  const [B, setB] = useState("0");
  const [C, setC] = useState("0");
  const [D, setD] = useState("0");
  const [outputHashSub, setOutputHashSub] = useState(""); //add hex check also
  const [outputHashDiv, setOutputHashDiv] = useState(""); //add hex check also
  const [outputHashMul, setOutputHashMul] = useState(""); //add hex check also

  const [input, setInput] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    subAns: "",
    mulAns: "",
    divAns: "",
  });
  const [pending, setPending] = useState(false);
  const [proof, setProof] = useState(null);
  const [verification, setVerification] = useState(false);
  //const [op, setOp] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  // Calculates proof
  const calculateProof = async () => {
    // only launch if we do have an acir to calculate the proof from
    // set a pending state to show a spinner
    setPending(true);

    if (
      input.A == "" ||
      input.B == "" ||
      input.C == "" ||
      input.D == "" ||
      input.subAns == "" ||
      input.mulAns == "" ||
      input.divAns == ""
    ) {
      toast.error("Fields can not be empty!");
      setPending(false);
    } else {
      // launching a new worker for the proof calculation
      const worker = new Worker(
        new URL("./../../utils/prover.ts", import.meta.url)
      );

      // handling the response from the worker
      worker.onmessage = (e) => {
        if (e.data instanceof Error) {
          toast.error("Error while calculating proof");
          setPending(false);
        } else {
          toast.success("Proof calculated");
          setProof(e.data);
          setPending(false);
        }
      };
      // sending the acir and input to the worker
      worker.postMessage({ input });
    }
  };
  const verifyProof = async () => {
    // only launch if we do have an acir and a proof to verify
    if (proof) {
      // launching a new worker for the verification
      const worker = new Worker(
        new URL("./../../utils/verifier.ts", import.meta.url)
      );
      console.log("worker launched");

      // handling the response from the worker
      worker.onmessage = async (e) => {
        if (e.data instanceof Error) {
          toast.error("Error while verifying proof");
        } else {
          toast.success("Proof verified");
          // Verifies proof on-chain
          const ethers = new Ethers();
          const ver = await ethers.contract.verify(proof);
          if (ver) {
            toast.success("Proof verified on-chain!");
            setVerification(true);
          } else {
            toast.error("Proof failed on-chain verification");
            setVerification(false);
          }
        }
      };
      // sending the acir and proof to the worker
      worker.postMessage({ proof });
    }
  };

  // const handleClick = (e) => {};
  return (
    <>
      <Header />
      <div className="titlePage">COMPLEX</div>
      <div className="formMetamask">
        <h2>First Number</h2>
        <div className="form-group">
          <label>real part:</label>
          <input name="A" onChange={handleChange}></input>
          <label>imaginary part:</label>
          <input name="B" onChange={handleChange}></input>
        </div>

        <h2>Second Number</h2>
        <div className="form-group">
          <label>real part:</label>
          <input name="C" onChange={handleChange}></input>
          <label>imaginary part:</label>
          <input name="D" onChange={handleChange}></input>
        </div>

        {/* <h2>Operator</h2>
        <div className="form-group">
          <label>Operator:</label>
          <input onChange={(e) => setOp(e.target.value)}></input>
        </div> */}

        {/* <h2>Output Hash</h2> */}
        <div className="form-group">
          <label>Output Hash Sub:</label>
          <input name="subAns" onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <label>Output Hash Mul:</label>
          <input name="mulAns" onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <label>Output Hash Div:</label>
          <input name="divAns" onChange={handleChange}></input>
        </div>

        <button className="submit-btn" onClick={calculateProof}>
          Generate Proof
        </button>
      </div>
    </>
  );
}

export default Complex;
