const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // Get contract factory
  const NFT = await hre.ethers.getContractFactory("RishiContract");

  // Deploy contract
  const my_nft = await NFT.deploy();

  // Wait to deploy contract
  await my_nft.deployed();

  // Log the contract address
  console.log("NFT contract is deployed to this address:",my_nft.address);

  
  // addresses exported
  fs.writeFileSync('metadata/contractAddress.js', `
    export const nftAddress = "${my_nft.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});


// npx hardhat run scripts/deploy.js --network goerli
// npx hardhat run scripts/batchMint.js --network goerli
// npx hardhat run scripts/approveDeposit.js --network goerli
