import React from "react";
// import Component from "../components/component";
import { Connect } from "../components/connect";
import { Providers } from "./providers";
// import { MerkleTreeProvider } from "../components/merkleTree";

export default function Page() {
  return (
    <Providers>
      <Connect />
    </Providers>
  );
}
