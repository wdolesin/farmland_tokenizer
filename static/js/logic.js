

// Check if metamask is loaded or not
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log('MetaMask is not installed! PLEASE Install it from https://metamask.io/');
}
// instantiate the metamask
window.web3 = new Web3(window.ethereum);

var address = 0;
// Farmland Token Abi
const FarmlandTokenAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "parcelOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "parcelDetails",
				"type": "string"
			},
			{
				"internalType": "uint16",
				"name": "totalAcres",
				"type": "uint16"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initial_supply",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterRemoved",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isMinter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "parcelDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "parcelOwner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalAcres",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

// Farmland Crowdsale Abi
const FarmlandCrowdsaleTokenAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "setRate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialRate",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "contract FarmlandToken",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "open",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "close",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rate_incrementer",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "prevClosingTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newClosingTime",
				"type": "uint256"
			}
		],
		"name": "TimedCrowdsaleExtended",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "purchaser",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensPurchased",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "capReached",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "closingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "weiAmount",
				"type": "uint256"
			}
		],
		"name": "getTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "getWeiEstimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hasClosed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "openingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokens_calc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "wallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "wei_calc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "weiRaised",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

// Farmland Crowdsale Deployer ABI
const FarmlandCrowdsaleDeployerAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "parcelOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "parcelDetails",
				"type": "string"
			},
			{
				"internalType": "uint16",
				"name": "totalAcres",
				"type": "uint16"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rate_incrementer",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "farmland_crowdsale_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "farmland_token_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
] 

var FarmlandToken = 0; 
// The default hard coded contract instantiation for future reference - 
// new window.web3.eth.Contract(FarmlandTokenAbi, "0x04f48A187821BbE5fC72A292B60aB7C8Dd251dC2");
var FarmlandCrowdsaleToken = 0; 
// The default hard coded contract instantiation for future reference - 
// new window.web3.eth.Contract(FarmlandCrowdsaleTokenAbi, "0x996E266C08F68A8CFD73Ee110b1a3CAF91c3763E");

// Check if the page is loaded
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

// Enabled deployer Address upon load of the page
window.onload = (event) => {
    console.log('The page has fully loaded - onload');
    document.getElementById("deployerAddress").removeAttribute("disabled");
};

//dApp frontend logic

// Get current account of the purchaser from metamask and update the currentAddress text box
async function get_current_account() {
    var account = await window.web3.eth.getAccounts();
    var userAccount = account[0];

    document.getElementById("currentAccount").setAttribute("value", userAccount);
    window.web3.eth.defaultAccount = userAccount;
    return userAccount;
}

// Get the parcel details when the appropriate button is invoked
async function parcel_details() {
    console.log("Parcel Called")
    var deployerAddress = document.getElementById("deployerAddress").value;

    FarmlandCrowdsaleDeployer = new window.web3.eth.Contract(FarmlandCrowdsaleDeployerAbi, deployerAddress);

    var farmlandCrowdsaleAddress = await FarmlandCrowdsaleDeployer.methods.farmland_crowdsale_address().call();
	var farmlandTokenAddress = await FarmlandCrowdsaleDeployer.methods.farmland_token_address().call();

	console.log(farmlandCrowdsaleAddress);
	console.log(farmlandTokenAddress);

    FarmlandToken = new window.web3.eth.Contract(FarmlandTokenAbi, farmlandTokenAddress);
    FarmlandCrowdsaleToken = new window.web3.eth.Contract(FarmlandCrowdsaleTokenAbi, farmlandCrowdsaleAddress);

    FarmlandToken.methods.parcelDetails().call().then(parcel_details_populate);

    console.log("Parcel details done")
    parcel_owner();
    parcel_acres();
    parcel_name();
    parcel_symbol();
    parcel_cap();
    parcel_tokens_issued();
    parcel_wei_raised();
}

// Get parcel owner from the contract
async function parcel_owner() {
    FarmlandToken.methods.parcelOwner().call().then(parcel_owner_populate);
}

// Get the parcel acres from the contract
async function parcel_acres() {
    FarmlandToken.methods.totalAcres().call().then(parcel_acres_populate);
}

// Get the parcel contract name 
async function parcel_name() {
    FarmlandToken.methods.name().call().then(parcel_name_populate);
}

// Get the parcel contract symbol
async function parcel_symbol() {
    FarmlandToken.methods.symbol().call().then(parcel_symbol_populate);
}

// Get the maximum parcel contract tokens
async function parcel_cap() {
    FarmlandCrowdsaleToken.methods.cap().call().then(parcel_cap_populate);
}

// Get the parcel contract tokens issued
async function parcel_tokens_issued() {
    FarmlandToken.methods.totalSupply().call().then(parcel_tokens_issued_populate);
}

// Get the parcel wei raised
async function parcel_wei_raised() {
    FarmlandCrowdsaleToken.methods.weiRaised().call().then(parcel_wei_raised_populate);
}

// Get the account from the metamask
async function get_account() {
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
     window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        console.log(accounts[0])
       });
}

// Get the wallet address from the contract
async function get_wallet_address() {
    FarmlandCrowdsaleToken.methods.wallet().call().then(wallet_address_populate);
}

// Get the wallet address from the contract and do not update any UI field
async function get_wallet_address_non_ui() {
    FarmlandCrowdsaleToken.methods.wallet().call();
}

// Get the account balance related to the purchaser's account - gives the tokens that the purchaser's owns
async function get_account_balance(purchasers_account) {
    FarmlandToken.methods.balanceOf(purchasers_account).call().then(account_balance_populate);
}

// Get the purchaser's account from the UI's currentAccount field and get the token balance 
async function get_current_tokens() {
    var purchasers_account = document.getElementById("currentAccount").getAttribute("value")
    FarmlandToken.methods.balanceOf(purchasers_account).call().then(current_tokens_populate);
}

// Get wei estimate from the contract related to the tokens desired
async function get_wei_estimate(tokens_desired) {
    console.log("get_wei_estimate");
    console.log("token_desired" + tokens_desired)
    FarmlandCrowdsaleToken.methods.getWeiEstimate(tokens_desired).call().then(wei_estimate_populate);
    console.log("get_wei_estimate done");
}

// Get the current token rate from the contract 
async function get_rate() {
    FarmlandCrowdsaleToken.methods.rate().call().then(rate_populate);
}

// Process the estimate wei button and get the token desired from the UI and retrieve the wei estimate from the contract
async function estimate_wei_required() {
    var tokensDesired = document.getElementById("tokensDesired").value.toString();
    console.log("estimate_wei_required " + tokensDesired)
    get_wei_estimate(tokensDesired);
}

// Process the purchase tokens button. Use the wallet address, current account and wei estimate fields from the UI
async function purchase_tokens() {
    var crowdsale_contract_address = document.getElementById('walletAddress').value;
    var purchasers_account = document.getElementById('currentAccount').value;
    var wei_estimate = document.getElementById('weiEstimate').value;
    
    purchase_tokens_finalize(purchasers_account, crowdsale_contract_address, wei_estimate);
}

// USe the contract's buy tokens to purchase the appropriate number of tokens
async function purchase_tokens_finalize(purchasers_account, crowdsale_contract_address, wei_estimate) {
    console.log("purchase_tokens_finalize");
    var tx_hash = await FarmlandCrowdsaleToken.methods.buyTokens(purchasers_account).send({
            "from":purchasers_account,
            "gas":1000000,
            "to":crowdsale_contract_address,
            "gasPrice":0,
            "value":wei_estimate
        });
}

// Update the weiEstimate UI field with the wei estimate value
function wei_estimate_populate(_value) {
    console.log("Wei Estimate ");
    console.log("Wei Estimate : " + _value);
    document.getElementById("weiEstimate").removeAttribute("disabled");
    document.getElementById("weiEstimate").setAttribute("value", _value);
}

// Update the currentTokens UI field with the current token owned by the purchaser
function current_tokens_populate(_value) {
    var balance = _value;

    document.getElementById("currentTokens").removeAttribute("disabled");
    document.getElementById("currentTokens").setAttribute("value", "Current Tokens Owned : " + _value);
}

// Update the wallet address in the UI
function wallet_address_populate(_value) {
    document.getElementById("walletAddress").removeAttribute("disabled");
    document.getElementById("walletAddress").setAttribute("value", _value);
}

// Update the wallet wei balance in the UI
async function wallet_balance() {
    console.log(document.getElementById('walletAddress').value);
    console.log(await window.web3.eth.getBalance(document.getElementById('walletAddress').value));
    console.log(await window.web3.eth.getBalance(document.getElementById('walletAddress').value.toString()));
    var balanceToString = await window.web3.eth.getBalance(document.getElementById('walletAddress').value.toString());
    console.log(balanceToString);
    var balance = window.web3.utils.fromWei(balanceToString, 'ether');
    document.getElementById("walletBalance").setAttribute("value", "Wallet Balance : " + balance);
}

// Update the purchaser's account's balance in the UI
async function account_balance() {
    var balanceToString = await window.web3.eth.getBalance(document.getElementById('currentAccount').value.toString());
    var balance = window.web3.utils.fromWei(balanceToString, 'ether');
    document.getElementById("accountBalance").setAttribute("value", "Account Balance : " + balance);
}

// Update the parcel details in the UI
function parcel_details_populate(_value) {
    document.getElementById("parcelDetails").removeAttribute("disabled");
    document.getElementById("parcelDetails").setAttribute("value", "Parcel Details : " + _value);
}

// Update the parcel owner's name in the UI
function parcel_owner_populate(_value) {
    document.getElementById("parcelOwner").removeAttribute("disabled");
    document.getElementById("parcelOwner").setAttribute("value", "Parcel Owner : " + _value);
}

// Update the parcel acres in the UI
function parcel_acres_populate(_value) {
    document.getElementById("parcelAcres").removeAttribute("disabled");
    document.getElementById("parcelAcres").setAttribute("value", "Parcel Acres : " + _value);
}

// Update the parcel contract name in the UI
function parcel_name_populate(_value) {
    document.getElementById("parcelName").removeAttribute("disabled");
    document.getElementById("parcelName").setAttribute("value", "Parcel Name : " + _value);
}

// Update the parcel contract symbol in the UI
function parcel_symbol_populate(_value) {
    document.getElementById("parcelSymbol").removeAttribute("disabled");
    document.getElementById("parcelSymbol").setAttribute("value", "Parcel Symbol : " + _value);
}

// Update the max tokens limit in the UI
function parcel_cap_populate(_value) {
    document.getElementById("parcelCap").removeAttribute("disabled");
    document.getElementById("parcelCap").setAttribute("value", "Parcel Total Tokens : " + _value);
}

// Update the tokens issued thus far in the UI
function parcel_tokens_issued_populate(_value) {
    document.getElementById("parcelTokensIssued").removeAttribute("disabled");
    document.getElementById("parcelTokensIssued").setAttribute("value", "Parcel Tokens Issued : " + _value);
}

// Update the Wei raised so far in the ui
function parcel_wei_raised_populate(_value) {
    document.getElementById("parcelWeiRaised").removeAttribute("disabled");
    document.getElementById("parcelWeiRaised").setAttribute("value", "Parcel Wei Raised : " + _value);
}

// Get the wallet balance, account balance and current tokens 
async function get_balances() {
    console.log(document.getElementById('currentAccount').value);
    wallet_balance();
    account_balance();
    get_current_tokens();
}

// Process the connect to metamask button and retrieve the purchaser's account
async function login() {
    const walletAddress = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {}
          }
        ]
      });
      
    
    await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
            {
              eth_accounts: {}
            }
        ]
    });
    
	// Enabled the various fields
    document.getElementById("balance").removeAttribute("disabled");
    document.getElementById("walletAddress").removeAttribute("disabled");
    document.getElementById("walletBalance").removeAttribute("disabled");
    document.getElementById("currentAccount").removeAttribute("disabled");
    document.getElementById("accountBalance").removeAttribute("disabled");
    
	// Get the current account and wallet address
	get_current_account();
    get_wallet_address();
    
	// Enable some more fields
    document.getElementById("tokensDesired").removeAttribute("disabled");
    document.getElementById("weiEstimate").removeAttribute("disabled");
    document.getElementById("estimateWei").removeAttribute("disabled");
    document.getElementById("purchaseTokens").removeAttribute("disabled");
}