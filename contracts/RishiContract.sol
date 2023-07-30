// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract RishiContract is ERC721A {
    address public owner;

    // Max minted tokens
    uint256 public max_quantity = 5;

    // Base nft url
    string base_url =
        "https://gateway.pinata.cloud/ipfs/Qma7ZypeuUyrEYDj42KjELkQu74M4kJLcCeymfbiTthoWP/";

    // prompt desc url
    string public prompt_url =
        "These images describe a well known artist Johnny Depp";

    constructor() ERC721A("Rishi", "RKS") {
        owner = msg.sender;
    }

    // only owner can access
    modifier only_Owner() {
        require(msg.sender == owner, "Only owner can access this....");
        _;
    }

    // min nft by owner
    function mint(uint256 quantity) external payable only_Owner {
        require(totalSupply() + quantity <= max_quantity, "mint limit is 5");
        _mint(msg.sender, quantity);
    }

    // return prompt desc url
    function prompt_Desc() external view returns (string memory) {
        return prompt_url;
    }

    // return base URL for the NFTs
    function _baseURI() internal view override returns (string memory) {
        return base_url;
    }
}
