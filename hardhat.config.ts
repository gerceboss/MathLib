import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

//change the config file to import the API_KEY  for deployment on speolia testnet of scroll
const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
