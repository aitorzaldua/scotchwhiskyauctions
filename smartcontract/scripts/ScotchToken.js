const hre = require("hardhat");

async function main() {

  const SCOTCH = await hre.ethers.getContractFactory("SCOTCH");
  const scotch = await SCOTCH.deploy();

  await scotch.deployed();

  console.log("SCOTCH deployed to:", scotch.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });