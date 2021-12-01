pragma solidity ^0.5.0;

import "./farmland_token.sol";
import "./farmland_token_crowdsale.sol";

contract FarmlandTokenCrowdsaleDeployer {
    // Create an `address public` variable called `farmland_token_address`.
    address public farmland_token_address;
    // Create an `address public` variable called `farmland_crowdsale_address`.
    address public farmland_crowdsale_address;

    // Add the constructor.
    constructor(
        string memory parcelOwner, // Parcel Owner
        string memory parcelDetails, // Parcel Details
        uint16 totalAcres,            // Total Acres
        string memory name, // name of the farmland crowdsale
        string memory symbol, //symbol of the farmland crowdsale
        uint initialSupply, // initialSupply of the tokens
        address payable wallet, // sale beneficiary
        uint goal,  // the crowdsale goal
        uint rate_incrementer // dynamic_pricing - price per token will be changed with this incrementer 
    ) public {
        // Create a new instance of the FarmlandToken contract.
        FarmlandToken token = new FarmlandToken(parcelOwner, parcelDetails, totalAcres, name, symbol, initialSupply);
        
        // Assign the token contract’s address to the `farmland_token_address` variable.
        farmland_token_address = address(token);

        // Create a new instance of the `FarmlandTokenCrowdsale` contract
        FarmlandTokenCrowdsale farmland_crowdsale = new FarmlandTokenCrowdsale(1, wallet, token, goal, now, now + 3 weeks, rate_incrementer);
            
        // Aassign the `FarmlandTokenCrowdsale` contract’s address to the `farmland_crowdsale_address` variable.
        farmland_crowdsale_address = address(farmland_crowdsale);

        // Set the `FarmlandTokenCrowdsale` contract as a minter
        token.addMinter(farmland_crowdsale_address);
        
        // Have the `FarmlandTokenCrowdsaleDeployer` renounce its minter role.
        token.renounceMinter();
    }
}