import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { toast } from "react-toastify";
import Ethers from "./../../utils/ethers";
import "./index.css";
import Header from "./../../components/header";
import ABI from "./../../utils/ABI.json";

function Complex() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [outputHashSub, setOutputHashSub] = useState(""); //add hex check also
  const [outputHashDiv, setOutputHashDiv] = useState(""); //add hex check also
  const [outputHashMul, setOutputHashMul] = useState(""); //add hex check also
  const [verified, setVerified] = useState(false);

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
  const [proof, setProof] = useState("");
  const [verification, setVerification] = useState(false);
  //const [op, setOp] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };

  function changeValues(a: string) {
    const val = a[0] == "-" ? a.substring(1) : a;
    return val;
  }

  //calulates proof
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
      console.log(worker);

      // handling the response from the worker
      // sending the acir and input to the worker
      const input_2 = {
        c1: {
          real: {
            sign: input.A[0] == "-",
            value: changeValues(input.A),
          },
          imag: {
            sign: input.B[0] == "-",
            value: changeValues(input.B),
          },
        },
        c2: {
          real: {
            sign: input.C[0] == "-",
            value: changeValues(input.C),
          },
          imag: {
            sign: input.D[0] == "-",
            value: changeValues(input.D),
          },
        },
        out_sub: input.subAns,
        out_mul: input.mulAns,
        out_div: input.divAns,
      };
      // console.log(input_2);

  worker.onmessage = (e) => {
    console.log(e.data);
    if (e.data instanceof Error) {
      toast.error("Error while calculating proof");
      setPending(false);
    } else {
      console.log(e.data);
      toast.success("Proof calculated");
      setProof(e.data);
      setPending(false);
    }
  };

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

  Verifier the proof if there's one in state
  useEffect(() => {
    setInput({
      ...input,
      A: "",
      B: "",
      C: "",
      D: "",
      subAns: "",
      mulAns: "",
      divAns: "",
    });

    if (proof) {
      verifyProof();
    }
  }, [proof]);

  useEffect(() => {
    new Ethers();
  }, []);

  //Shows verification result
  useEffect(() => {
    if (verification) {
      toast.success("Proof verified!");
    }
  }, [verification]);
  //Shows verification result
  useEffect(() => {
    if (proof) {
      verifyProof();
    }
  }, [proof]);
  useEffect(() => {
    if (verified) {
    }
  }, [verified]);

  return (
    <>
      <Header />
      <center>
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

          {!proof && !verified && (
            <button className="submit-btn" onClick={calculateProof}>
              Generate Proof
            </button>
          )}

          {proof && !verified && (
            <button className="submit-btn" onClick={verifyProof}>
              Verify Proof
            </button>
          )}
          {proof && verified && <div className="submit-btn">Success!!!</div>}

          <div className="proof"> {proof}</div>
          <div id="verification"></div>
        </div>
      </center>
    </>
  );
}

export default Complex;
