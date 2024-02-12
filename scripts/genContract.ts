import { NoirServer } from "../utils/noir/noirServer";

async function main() {
  const noir = new NoirServer();
  await noir.compile(); //compiles files and generates ACIR
  noir.getSmartContract(); // writes the smart contract at ./../contracts/plonk_vk.sol
  process.exit();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
