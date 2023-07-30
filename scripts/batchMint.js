// This batch script mints ERC721A tokens.

const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // here we get private key using .env
  const privateKey = process.env.PRIVATE_KEY;

  // network provider url
  const network_Address = "https://ethereum-goerli.publicnode.com";

  // by url create a provider
  const net_provider = new ethers.providers.JsonRpcProvider(network_Address);

  // create a signer from provider and private key
  const access = new ethers.Wallet(privateKey, net_provider);

  // deployed contract address
  const contractAddress = "0x19a5298EBeE0C48a962f967D01156b2d2F70FCEd";

  // contract factory attatch with signer
  const RishiNFT = await ethers.getContractFactory("RishiContract", access);
  const contract = await RishiNFT.attach(contractAddress);

  // mint fn call
  await contract.mint(5);

  // message
  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
