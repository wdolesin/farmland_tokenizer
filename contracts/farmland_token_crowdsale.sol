pragma solidity ^0.5.0;

import "./farmland_token.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/Crowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/price/IncreasingPriceCrowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/validation/TimedCrowdsale.sol";


// Have the KaseiCoinCrowdsale contract inherit the following OpenZeppelin:
// * Crowdsale
// * MintedCrowdsale
// UPDATED THE CONTRACT SIGNATURE TO ADD THE ABOVE INHERITANCE
contract FarmlandTokenCrowdsale is Crowdsale, MintedCrowdsale, CappedCrowdsale, TimedCrowdsale {
    uint256 public currentRate = 1;
    // Provide parameters for all of the features of your crowdsale, such as the `rate`, `wallet` for fundraising, and `token`.
    constructor(
        uint initialRate,  // rate in TKNbits
        address payable wallet, // sale beneficiary
        FarmlandToken token, // the Farmland Token itself that the FarmlandTokenCrowdsale will work with
        uint goal, // the crowdsale goal
        uint open, // the crowdsale opening time
        uint close // the crowdsale closing time
    )
    // FarmlandToken("FarmLand", "FRM", 12000)
    // FarmlandToken(name, symbol, initialSupply)
    Crowdsale(initialRate, wallet, token)
    CappedCrowdsale(goal)
    TimedCrowdsale(open, close)
    public {
        // constructor can stay empty
        currentRate = initialRate;
        
    }
    
    function currentTime() public view returns (uint) {
        return now; 
    } 
    function setRate(uint256 newRate)
    public {
        currentRate = newRate;
    }
    //function buy_tokens(uint tokens){
    //    formula_tokens = currentRate**tokens/2;
    //    require(formila_tokes==msg.value, "the price of ${tokens} is ${formila_tokes} ");
    //    // msg.sender.transfer()
    //}
    
    function rate() public view returns (uint256) {
        return currentRate;
    }
    
    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.mul(currentRate);
    }
}