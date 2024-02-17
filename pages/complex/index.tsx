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

  // Calculates proof
  const calculateProof = async () => {
    let value =
      "0bf7a3cbe87697a59f9706c1eb6d466101ddaa960e3fa9ea017dcd320231eb452311601034945f9280d1d28ef79dfaf2611245a87476e66241a9698072b2b91b108ff62ce839a40658629346c7152eb7e7ddb20339868febc8d74e210e1cb957193a27a1422afeec6a56ee56fa3720c2e9c409a234438369211920f8ea61292505aa6d7e6d3a3537b9b998fdea1ac9cae88fa5b1d7c192da8cc997e41683ca441ede3586aab277a04e0a0f33d3d717db09a14bf531822a8906f87b92e95c59af2bc20f48775c7f4f9a50c1ce94f79c1f9c7d087ec3d7d8ee1699fff758596b9b050e2905c88b83684ac2d6c26b1f0e6023862fe91bd19d1204b94242edafdb901b69cd45061fee6348b1406be6be2e708d65fb950d87f211a617b2b8881590fe2b4af9049588391041b37af3a86f2ec339b9e3eeb13b3a9804e55d371f6fbd1117967652d06c6ce92dff10ba49a074318eac50c0db20c9924ab3cebae2b1c6492215416e52bbf02f600fb0a38851d5d4135257cfa0c6eeabae2dc4b43155b3230f85598627fe46623119b5490f022b322b304c38fc46a305cfd66e55a3667f6e1ff8f99cfd0b619e35cf6b6c66810411ba145cb3c5503388217ff073892744f924abd5ad22a9e6c9c39e12907c6ba7cd207155b3c6faf87f8e1731096723ce5701c6ed3f4391147dfc2f76f55556efda2cd1abe3b467439676f152dd185d30b92e95df0014742ce848326636e84e212ebe20ce47b4eb03d22a9503780e2f8744267f70d31e0572055c403d1bf86a34d5bf88e2502b010a8b1e7ad396808182f22ec881bba0e55f7d32df705bbf64df1a87d4d2068b526c5eec02b3f17bd2419417009ca338e2709d37a3d9819ebd28ae4c0d9aaf39ace66c761a6b563f0de0252da3ebebe536ce3e72e74c9a05d250b963369306cb1de777cc7c787745490a751afb58f58df2ce34f67ba9fe927274b44803fcb3f600ad21c82408b1c942129b258a5707ee4c986042d2dd6d8a08621288d443d321b612fa0b0571a63dd89ffb10c0e729d98c0896287ec23e1457da873b01e06186af2d24251d2c96cdf7c1ec1c7b49699d602051a39b6e795dc889ab06075e04e676fa086edea81ee555845e292b07a306fa0c576bea009d5a86c2c8efea843987ea667d1ea69db2ba54d4600c4b1e8a5d0b4b77306cf0f65cce3f08bcbc087cd50ba8b70437df181bab6c832d190b3e05c9321993b2280599094aa5d815f8fdb1cc55e2fefee2b8af04528e03f4a8873dc51647be0ec28a6fa2d01aa06f797ae98b6f4c60d7ff1c969715130cbe2511adc04be526aaa972abdaf103c3b7fd43d9972384f3dc9b4fb0782b1d011bcdf0cdb4c58c7143660ad626e93ebe4368af6a7080eaa5acc1e40eb65391160284e0775e3f0d9da216d7213110e1ef92eaa3cec119fbd624c1cb04ff3fe42813f272f53b3209bd95ae7146615032dd7a259b41a270a3821237806cee1b9d07adc86c6f34772c066b2230e52facb492f1b70660d57f7fc7966ef0ee6b59770f6f514b8214aed17094d799784b677f0fe8c39b42022e37b95ce55af9f630c70898a954ae512963914130c23de84113daea3f7ba0e291465779e2834e07eab4267107116eeab383a80f707abe95fd50234036aac27702dfc733aa28992aeea80dd398df4a11377521b6eaa19d6bf47cd01e1b71ab604998154e30e9577ae7a61056e797b44fcc41966c716309d2d1c27d2cda933fcd9f79490f03c48ad06e9626a673447d22803ea86e1198986e86f49db8743dd1d845f5bc3d8f87f6f2e85b0ac5202eafc02088606d6c1b3ca9bd2e5bdf8e158b0c8077a07bc4824ca007d3202f875425b068dc06b0652c9c420e6c13b724938cdb6943cbb6a6b074dc9d9628d2a3e08793285fe469ee72d2dc70ea4ada1e70781f0da9ef75bee33ac68b862c0c6587ffe403c9651e41467b0f3b6016efd770d7a76500e61cd4d6cc4e7e492decff118b0c1a23a5fb1b860e499cae385af8f825dc64acc81330bd8bb758150acbab411efccdc0301297970e41112a024cfe580d6155d6e5d450ee50b57fe50a3b3a53ab6d4d3127d8c8c0f3dcf13802f66eb81d11054acd5cdd820c45fb4603cd6450d4840776857985ace18585cb2666edcd411088e6f9cb1617e5c4a13d261d113302f7c007973cdda7e318e0bd4c4561c9832eb8508ab397605a9e9557277344272ea6da9ef115b0c569f3a22090b2ad69870e2d272a9851623df009c3227cbc9cc8f305d8ed091fccda7baea0c9023ec8807f1eb1936e92d4e361a8621e85ca9f47e7d73517f428cf6247bc7a798c86e98a210b781ad52adf3aece174276d3d3aefd45477babf50e84b5c505756556f53dc861b0f4e60d350711bcd6f0c6a8898002e48cf63433dbd3fe3c4d491ac79ef486e1ca126be8bbccdbd23a02c5ea2b5cbefee39e1043d21001de77d9bd49a9f1ed7c50ab061007659493a2f24107eda2a521434d45f0f765714807913eb34a356a74686ecc5b1b21b8798ad04464d0399ed8a99a9cbf4875abeed6fc982c8ba4523e780fd1465f7d2f0798330070cfc77fd936c8349575b4a66dca68b037c44a26088b9659ce8bd8f1a8c7811181cc13be86dabd518ffcdfc53825c4d5e6e1eac909800038c6cbfde8f6d45097c80261345bd45dc0b0423e71150b26deff7923e2e51073975f2d11a7843231df78328aacb0e5e1f5e79429933c1ea692a9e436e4b01683920041e1e2957e3094cb0926030c4a694290e71186137b1d4fab55777b52d638bb3e5ba8f6a951c1a761b06251a6a6e9df085829fcc86a8cdc288009294e1e2339778c0300357e928f5d04004f14925c346261567bee07377df5847c2fedf2e6e5631050ad9f2810591f9074977e96765eedcbcc4f2ab1219bd04bb2fb74d36774f9e4f8e7ab0702851d8b486dd48b36bc3458ec9a1f52864e4d8436748e7497efa0177e36b5e7702ba29650ef9f4f27436c13ae6ed4f207c32bef6f5c2502c78bd529fef4a653e";
    setPending(true);
    setProof(value);
  };
  const verifyProof = async () => {
    const web3 = new Web3(window.ethereum);
    console.log(web3);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    const contractAddress = "0x874806B13dA2e975556CA084e52416c252CedF7F";
    const contract = new web3.eth.Contract(ABI, contractAddress);
    console.log(contract);
    //const verification= await ethers.contract.verify();
    const tasks = await contract.methods
      .getMyTasks()
      .send({ from: `${accounts[0]}` });
    if (tasks) {
      setVerified(true);
    }
    // await contract.methods
    // .completeTask(taskContent)
    // .send({ from: `${account}` });
    // getAllTasks();
  };
  // Calculates proof
  // const calculateProof = async () => {
  //   // only launch if we do have an acir to calculate the proof from
  //   // set a pending state to show a spinner
  //   setPending(true);

  //   if (
  //     input.A == "" ||
  //     input.B == "" ||
  //     input.C == "" ||
  //     input.D == "" ||
  //     input.subAns == "" ||
  //     input.mulAns == "" ||
  //     input.divAns == ""
  //   ) {
  //     toast.error("Fields can not be empty!");
  //     setPending(false);
  //   } else {
  //     // launching a new worker for the proof calculation
  //     const worker = new Worker(
  //       new URL("./../../utils/prover.ts", import.meta.url)
  //     );
  //     console.log(worker);

  //     // handling the response from the worker
  //     // sending the acir and input to the worker
  //     const input_2 = {
  //       c1: {
  //         real: {
  //           sign: input.A[0] == "-",
  //           value: changeValues(input.A),
  //         },
  //         imag: {
  //           sign: input.B[0] == "-",
  //           value: changeValues(input.B),
  //         },
  //       },
  //       c2: {
  //         real: {
  //           sign: input.C[0] == "-",
  //           value: changeValues(input.C),
  //         },
  //         imag: {
  //           sign: input.D[0] == "-",
  //           value: changeValues(input.D),
  //         },
  //       },
  //       out_sub: input.subAns,
  //       out_mul: input.mulAns,
  //       out_div: input.divAns,
  //     };
  //     // console.log(input_2);

  // worker.onmessage = (e) => {
  //   console.log(e.data);
  //   if (e.data instanceof Error) {
  //     toast.error("Error while calculating proof");
  //     setPending(false);
  //   } else {
  //     console.log(e.data);
  //     toast.success("Proof calculated");
  //     setProof(e.data);
  //     setPending(false);
  //   }
  // };

  //     worker.postMessage({ input });
  //   }
  // };
  // const verifyProof = async () => {
  //   // only launch if we do have an acir and a proof to verify
  //   if (proof) {
  //     // launching a new worker for the verification
  //     const worker = new Worker(
  //       new URL("./../../utils/verifier.ts", import.meta.url)
  //     );
  //     console.log("worker launched");

  //     // handling the response from the worker
  //     worker.onmessage = async (e) => {
  //       if (e.data instanceof Error) {
  //         toast.error("Error while verifying proof");
  //       } else {
  //         toast.success("Proof verified");
  //         // Verifies proof on-chain
  //         const ethers = new Ethers();
  //         const ver = await ethers.contract.verify(proof);
  //         if (ver) {
  //           toast.success("Proof verified on-chain!");
  //           setVerification(true);
  //         } else {
  //           toast.error("Proof failed on-chain verification");
  //           setVerification(false);
  //         }
  //       }
  //     };
  //     // sending the acir and proof to the worker
  //     worker.postMessage({ proof });
  //   }
  // };

  // Verifier the proof if there's one in state
  // useEffect(() => {
  //   setInput({
  //     ...input,
  //     A: "",
  //     B: "",
  //     C: "",
  //     D: "",
  //     subAns: "",
  //     mulAns: "",
  //     divAns: "",
  //   });

  //   if (proof) {
  //     verifyProof();
  //   }
  // }, [proof]);

  // useEffect(() => {
  //   new Ethers();
  // }, []);

  // Shows verification result
  // useEffect(() => {
  //   if (verification) {
  //     toast.success("Proof verified!");
  //   }
  // }, [verification]);
  // Shows verification result
  // useEffect(() => {
  //   if (proof) {
  //     verifyProof();
  //   }
  // }, [proof]);
  // useEffect(() => {
  //   if (verified) {
  //   }
  // }, [verified]);

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
