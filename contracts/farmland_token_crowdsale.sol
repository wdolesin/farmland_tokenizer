pragma solidity ^0.5.0;

import "./farmland_token.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/Crowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/price/IncreasingPriceCrowdsale.sol";


// Have the KaseiCoinCrowdsale contract inherit the following OpenZeppelin:
// * Crowdsale
// * MintedCrowdsale
// UPDATED THE CONTRACT SIGNATURE TO ADD THE ABOVE INHERITANCE
contract FarmlandTokenCrowdsale is Crowdsale, MintedCrowdsale, CappedCrowdsale { 
    uint256 private _changeableRate;
    // Provide parameters for all of the features of your crowdsale, such as the `rate`, `wallet` for fundraising, and `token`.
    constructor(
        uint initialRate,
        address payable wallet,
        FarmlandToken token,
        uint256 cap
    )
    Crowdsale(initialRate, wallet, token)
    CappedCrowdsale(cap)
    public {
        // constructor can stay empty
        _changeableRate = initialRate;
    }
    
    function setRate(uint256 newRate)
    public {
        _changeableRate = newRate;
    }
    
    function rate() public view returns (uint256) {
        return _changeableRate;
    }
    
    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.mul(_changeableRate);
    }
}

contract FarmlandTokenCrowdsaleDeployer {
    // Create an `address public` variable called `farmland_token_address`.
    address public farmland_token_address;
    // Create an `address public` variable called `farmland_crowdsale_address`.
    address public farmland_crowdsale_address;

    // Add the constructor.
    constructor(
       string memory name,
       string memory symbol,
       address payable wallet,
       uint initial_supply
    ) public {
        // Create a new instance of the FarmlandToken contract.
        FarmlandToken token = new FarmlandToken(name, symbol, initial_supply);
        
        // Assign the token contract’s address to the `farmland_token_address` variable.
        farmland_token_address = address(token);

        // Create a new instance of the `FarmlandTokenCrowdsale` contract
        FarmlandTokenCrowdsale farmland_crowdsale = new FarmlandTokenCrowdsale(1, wallet, token, 50000000000000000000);
            
        // Aassign the `FarmlandTokenCrowdsale` contract’s address to the `farmland_crowdsale_address` variable.
        farmland_crowdsale_address = address(farmland_crowdsale);

        // Set the `FarmlandTokenCrowdsale` contract as a minter
        token.addMinter(farmland_crowdsale_address);
        
        // Have the `FarmlandTokenCrowdsaleDeployer` renounce its minter role.
        token.renounceMinter();
    }
}
