const hre = require("hardhat");

async function main() {
  const Receiver = await hre.ethers.getContractFactory("PayrollReceiver");
  const receiver = await Receiver.deploy();
  await receiver.deployed();
  console.log("PayrollReceiver deployed to:", receiver.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});