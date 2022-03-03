/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/* eslint-disable jest/valid-describe */
const { expect } = require("chai");
const { waffle } = require("hardhat");
const axios = require("axios");

const Greeter = require("../src/artifacts/contracts/Greeter.sol/Greeter.json");

describe("Greeter", async () => {
  let GreeterFactory, greeter;

  beforeEach(async () => {
    GreeterFactory = await ethers.getContractFactory("Greeter");
    greeter = await GreeterFactory.deploy("Hello, world!");
    await greeter.deployed();
  });

  it("is expected to return the greeting", async () => {
    expect(await greeter.greet()).to.equal("Hello, world!");
  });

  it("Is expected to return the new greeting once it's changed", async () => {
    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("is expected to deploy a a Greeting with signer...", async () => {
    const [sender_1, sender_2] = waffle.provider.getWallets();
    let newGreeter = await waffle.deployContract(sender_2, Greeter, [
      "Hello World",
    ]);
    expect(await newGreeter.greet()).to.equal("Hello World");
    expect(newGreeter.signer.address).to.equal(sender_2.address);

    await newGreeter.setGreeting("Hello Venus");
    expect(await newGreeter.greet()).to.equal("Hello Venus");
  });
});
