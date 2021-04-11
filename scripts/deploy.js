
const hre = require("hardhat");

async function main() {

  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();

  // await greeter.deployed();
  await token.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  console.log("Toke deployed to:", toke.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
