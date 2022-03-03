// const { expect } = require("chai");

// const provider = waffle.provider;

// describe("Token", async () =>  {
//   let Token, token, signer
  
//   beforeEach(async () => {
//     Token = await ethers.getContract("Token");
//     signer = await ethers.getSigners();
//     token = await Token.deploy();
//     await token.deployed();
//   });
  
//   it("Is expected to return the token symbol", async () => {
//     expect(await token.symbol()).to.equal("TDT");
//   });

//   it('Is expected to return token name', async () => {
//     expect(await token.name()).to.equal("Thomas Dabit Token")
//   });

//   it('Is expected to return an owner', () => {
//     console.log(provider)
//   });
// });