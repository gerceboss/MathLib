import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

import * as dotenv from "dotenv";
dotenv.config();
//change the config file to import the API_KEY  for deployment on speolia testnet of scroll
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
      url: "https://eth-sepolia.g.alchemy.com/v2/GNp-Xq9PjB97HhJo1H02Y-qpBHCHXOeO",
      accounts: [process.env.privateKey as string],
    },
  },
  paths: {
    sources: "./contracts",
  },
};

export default config;
