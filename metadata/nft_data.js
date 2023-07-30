const fs = require('fs');
const path = require('path');
console.log(__dirname);

// import nfts array from a separate file
const nfts = require('./nfts');

for (let i = 1; i <= nfts.length; i++) {

  // json obj for each nft
  const json = {
    name: nfts[i].name,
    description: nfts[i].description,
    image: `https://gateway.pinata.cloud/ipfs/${nfts[i].image}`,
  };

  const name = nfts[i].name;

  const file = `${name.replace(/[^a-zA-Z0-9]/g, '')}`;

  // Writes json object to a file
  fs.writeFileSync(
    path.join(__dirname, 'nftcollection', String(file)),
    JSON.stringify(json)
  );
}
