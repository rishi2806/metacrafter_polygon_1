
const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/RishiContract.sol/RishiContract.json');
require('dotenv').config();

//Transferring ERC721A tokens to Ethereum FxChain network
async function main() {

  // Set up connections
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const rishi_privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create wallet instance
  const wallet_instance = new ethers.Wallet(rishi_privateKey, provider);

  // Get signer instance
  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("RishiContract");
  const nft = await NFT.attach('0x19a5298EBeE0C48a962f967D01156b2d2F70FCEd');

  // Get FXRoot contract instance
  const fxRootAddress = '0x19a5298EBeE0C48a962f967D01156b2d2F70FCEd';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds for transfer
  const tokenIds = [0, 1, 2, 3, 4]; 

  // Approve nfts for transfer
  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Approval is confirmed');

  // Deposit nfts to FXRoot contracts
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      wallet.address, 
      tokenIds[i],
      '0x6566'
    );

    // Wait for deposit
    await depositTx.wait();
  }

  console.log("Successfully approved and deposited");

  
  // Test balanceOf
  const balance = await nft.balanceOf(wallet_instance.address);

  // Print the balance of the wallet
  console.log("Your wallet balance", wallet_instance.address, "is: ", balance.toString());
}


// main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
