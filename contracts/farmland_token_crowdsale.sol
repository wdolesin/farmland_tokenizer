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
    uint256 public currentRate = 10000000000000000;
    uint256 private _weiRaised;
    uint256 private _rate_incrementer = 2500000000000;  // 1 eth/400000
    // 10000000000000000;
                                            
    uint256 public tokens_calc = 0;
    uint256 public wei_calc = 0;
    // Provide parameters for all of the features of your crowdsale, such as the `rate`, `wallet` for fundraising, and `token`.
    constructor(
        uint initialRate,  // rate in TKNbits
        address payable wallet, // sale beneficiary
        FarmlandToken token, // the Farmland Token itself that the FarmlandTokenCrowdsale will work with
        uint goal, // the crowdsale goal
        uint open, // the crowdsale opening time
        uint close, // the crowdsale closing time
        uint rate_incrementer // rate incrementer
    )

    Crowdsale(initialRate, wallet, token)
    CappedCrowdsale(goal)
    TimedCrowdsale(open, close)
    public {
        // constructor can stay empty
        currentRate = 10000000000000000;
        if (rate_incrementer != 0) {
            _rate_incrementer = rate_incrementer;
        }
    }
    
    function currentTime() public view returns (uint) {
        return now; 
    } 
    function setRate(uint256 newRate)
    public {
        currentRate = newRate;
    }
    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view {
        require(beneficiary != address(0), "Crowdsale: beneficiary is the zero address");
        require(weiAmount != 0, "Crowdsale: weiAmount is 0");
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
    }
    function buyTokens(address beneficiary) public nonReentrant payable {
        uint256 weiAmount = msg.value;
        wei_calc = weiAmount;
        _preValidatePurchase(beneficiary, weiAmount);

        // calculate token amount to be created
        uint256 tokens = _getTokenAmount(weiAmount);
        tokens_calc = tokens;

        currentRate = currentRate + (tokens * _rate_incrementer);
        // update state
        _weiRaised = _weiRaised.add(weiAmount);

        _processPurchase(beneficiary, tokens);
        emit TokensPurchased(_msgSender(), beneficiary, weiAmount, tokens);

        _updatePurchasingState(beneficiary, weiAmount);

        _forwardFunds();
        _postValidatePurchase(beneficiary, weiAmount);
    }
    
    function rate() public view returns (uint256) {
        return currentRate;
    }

    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }
    
    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        uint256 token_count = 0;
        require(weiAmount >= (currentRate + _rate_incrementer), "Not enought wei for purchasing tokens");
        do {
            token_count++;
            weiAmount -= (currentRate + (token_count * _rate_incrementer));          
        } while ((weiAmount > 0) && (weiAmount >= (currentRate + ((token_count + 1) * _rate_incrementer))));
        return token_count;
    }

    function getTokenAmount(uint256 weiAmount) public view returns (uint256) {
        return _getTokenAmount(weiAmount);
    }

    function getWeiEstimate(uint256 tokens) public view returns (uint256) {
        uint256 weiEstimateCalculated = 0;
        weiEstimateCalculated = (tokens*((2*(currentRate + _rate_incrementer)) + ((tokens - 1)*(_rate_incrementer))))/2;
        return weiEstimateCalculated;
    }
}