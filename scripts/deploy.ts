// import { writeFileSync } from "fs";
const { ethers } = require("hardhat");

async function main() {
  // Deploy the verifier contract
  const Verifier = await ethers.getContractFactory("UltraVerifier");
  const verifier = await Verifier.deploy();

  // Get the address of the deployed verifier contract
  const verifierAddr = await verifier.deployed();

  //0xF4b43bdacC4023d5e0a7E0d830844f45161AD513 = deployed address at sepolia
  // Create a config object
  const config = {
    chainId: ethers.provider.network.chainId,
    verifier: verifierAddr.address,
  };
  //BaseUltraVerifier

  // Print the config
  console.log("Deployed at", config);

  process.exit();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
