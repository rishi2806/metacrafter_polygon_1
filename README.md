# Polygon Module-1

This project have the creation of ERC721 compliant NFT contract called `RishiContract` and the deployment of this contract on the `Goerli` test network. In this project basically we have to deploy some NFT's on the etherium blockchain, map collection to polygon and transfer assets via polygon bridge.

## Contract

This smart contract is written in Solidity programming language and is named as `RishiContract.sol`. This contract is inherited/imported from the OpenZeppelin's ERC721 contract. This contract basically allow user for minting of NFTs and stores metadata URIs for each token. In this contract there is also an mintnft function for minting tokens.


## Getting Started

### Setup

Make sure to rename ".env.example" to ".env" and provide your wallet private key to this .env file(we use this file to secure our private key) i.e. "PRIVATE_KEY= 'your wallet private key'".

### Executing program

Step 1- Clone the required repository by using this command:
```
git clone <github url>
```

Step 2- Install the npm:
```
npm install
```

Step 3- Deploy contract on the georli etherium testnet:
```
npx hardhat run scripts/deploy.js --network goerli
```
Here we get an address after deploy, we have to paste it in the `contractAddress.js` , `batchMint.js` and  `approveDeposit.js` files.

Step 4- Now we have to mint NFT's on our address by using the `batchMint.js` script by using this command:
```
npx hardhat run scripts/batchMint.js --network goerli
```

Step 5- Finally we have to deposit and approve the minted NFT's from Ethereum to Polygon Mumbai network using the FxPortal Bridge by using this command:
```
npx hardhat run scripts/approveDeposit.js --network goerli
```

Step 6- Now check your execution details on `etherscan` by pasting that deployed address in the search menu.


## Author

[Rishi Kumar Singh](https://github.com/rishi2806)

## License

This project is licensed under the [MIT License].

