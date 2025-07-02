require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY, INFURA_ID } = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    arbitrum: {
      url: `https://sepolia-rollup.arbitrum.io/rpc`,
      accounts: [PRIVATE_KEY]
    },
    optimism: {
      url: `https://optimism-sepolia.infura.io/v3/${INFURA_ID}`,
      accounts: [PRIVATE_KEY]
    },
    polygon: {
      url: `https://rpc-amoy.polygon.technology`,
      accounts: [PRIVATE_KEY]
    },
    base: {
      url: `https://sepolia.base.org`,
      accounts: [PRIVATE_KEY]
    }
  }
};