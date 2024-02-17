import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      evmVersion: "london",
      optimizer: { enabled: true, runs: 5000 },
    },
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
      accounts: [process.env.privateKey as string],
    },
  },
  paths: {
    sources: "./contracts",
  },
};

export default config;
