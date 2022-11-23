// import ethers from hardhat package
const { ethers } = require("hardhat");

async function main() {
  // ContractFactory in ethers is an abstraction to deploy new smart contracts
  const contractFactory = await ethers.getContractFactory("EtherWallet");

  // deploy the contract
  const deployedContract = await contractFactory.deploy();

  // wait for the contract to be deployed
  await deployedContract.deployed();

  //print the address of the deployed contract
  console.log("Deployed contract address:", deployedContract.address);
}

// call the main function and catch any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
