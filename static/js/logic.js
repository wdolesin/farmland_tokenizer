//initializing Moralis
// Moralis.initialize("q6Mh6vo1F36tDuhfGqDw5DfOGXyeMK649eMFnpj2");
// Moralis.serverURL = "https://hadft4aqgts5.usemoralis.com:2053/server";

// Copyright 2017 https://tokenmarket.net - MIT licensed
//
// Run with Node 7.x as:
//
// node --harmony-async-await  deploy.js
//

/*
let fs = require("fs");
let Web3 = require('web3'); // https://www.npmjs.com/package/web3
*/

// Create a web3 connection to a running geth node over JSON-RPC running at
// http://localhost:8545
// For geth VPS server + SSH tunneling see
// https://gist.github.com/miohtama/ce612b35415e74268ff243af645048f4
// let web3 = new Web3(window.ethereum);
//web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
/* Creating a contract object */
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log('MetaMask is not installed! PLEASE Install it from https://metamask.io/');
}
window.web3 = new Web3(window.ethereum);

/*
if (provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavior.
    await web3Modal.clearCachedProvider();
    provider = null;
 }
 */

// Read the compiled contract code
// Compile with
// solc SampleContract.sol --combined-json abi,asm,ast,bin,bin-runtime,clone-bin,devdoc,interface,opcodes,srcmap,srcmap-runtime,userdoc > contracts.json
// let source = fs.readFileSync("contracts.json");
// let contracts = JSON.parse(source)["contracts"];

// ABI description as JSON structure
// let abi = JSON.parse(contracts.SampleContract.abi);

// Smart contract EVM bytecode as hex
// let code = '0x' + contracts.SampleContract.bin;

// Create Contract proxy class
// let SampleContract = web3.eth.contract(abi);

// Unlock the coinbase account to make transactions out of it
/*console.log("Unlocking coinbase account");
var password = "";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
  console.log(e);
  return;
}


console.log("Deploying the contract");
let contract = SampleContract.new({from: web3.eth.coinbase, gas: 1000000, data: code});
*/
// Transaction has entered to geth memory pool
// console.log("Your contract is being deployed in transaction at http://testnet.etherscan.io/tx/" + contract.transactionHash);

// http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
/*
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
*/
// We need to wait until any miner has included the transaction
// in a block to get the address of the contract
/*
async function waitBlock() {
  while (true) {
    let receipt = web3.eth.getTransactionReceipt(contract.transactionHash);
    if (receipt && receipt.contractAddress) {
      console.log("Your contract has been deployed at http://testnet.etherscan.io/address/" + receipt.contractAddress);
      console.log("Note that it might take 30 - 90 sceonds for the block to propagate befor it's visible in etherscan.io");
      break;
    }
    console.log("Waiting a mined block to include your contract... currently in block " + web3.eth.blockNumber);
    await sleep(4000);
  }
}

waitBlock();
*/

var address = 0;
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

var FarmlandToken = 0; // new window.web3.eth.Contract(FarmlandTokenAbi, "0x04f48A187821BbE5fC72A292B60aB7C8Dd251dC2");
var FarmlandCrowdsaleToken = 0; // new window.web3.eth.Contract(FarmlandCrowdsaleTokenAbi, "0x996E266C08F68A8CFD73Ee110b1a3CAF91c3763E");

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

window.onload = (event) => {
    console.log('The page has fully loaded - onload');
    // var farmlandTokenAddress = localStorage.getItem('farmlandTokenAddress');
    // var farmlandCrowdsaleAddress = localStorage.getItem('farmlandCrowdsaleAddress');
    // console.log(farmlandTokenAddress);
    // console.log(farmlandCrowdsaleAddress);
    // FarmlandToken = new window.web3.eth.Contract(FarmlandTokenAbi, farmlandTokenAddress);
    // FarmlandCrowdsaleToken = new window.web3.eth.Contract(FarmlandCrowdsaleTokenAbi, farmlandCrowdsaleAddress);
    document.getElementById("deployerAddress").removeAttribute("disabled");
    // parcel_details();

};

//dApp frontend logic

async function get_current_account() {
    var account = await window.web3.eth.getAccounts();
    var userAccount = account[0];

    // console.log(account[0]);
    // get_account();
    document.getElementById("currentAccount").setAttribute("value", userAccount);
    window.web3.eth.defaultAccount = userAccount;
    return userAccount;
}

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
async function parcel_owner() {
    FarmlandToken.methods.parcelOwner().call().then(parcel_owner_populate);
}
async function parcel_acres() {
    FarmlandToken.methods.totalAcres().call().then(parcel_acres_populate);
}
async function parcel_name() {
    FarmlandToken.methods.name().call().then(parcel_name_populate);
}
async function parcel_symbol() {
    FarmlandToken.methods.symbol().call().then(parcel_symbol_populate);
}
async function parcel_cap() {
    FarmlandCrowdsaleToken.methods.cap().call().then(parcel_cap_populate);
}
async function parcel_tokens_issued() {
    FarmlandToken.methods.totalSupply().call().then(parcel_tokens_issued_populate);
}
async function parcel_wei_raised() {
    FarmlandCrowdsaleToken.methods.weiRaised().call().then(parcel_wei_raised_populate);
}
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

async function get_wallet_address() {
    FarmlandCrowdsaleToken.methods.wallet().call().then(wallet_address_populate);
}
async function get_wallet_address_non_ui() {
    FarmlandCrowdsaleToken.methods.wallet().call();
}
async function get_account_balance(purchasers_account) {
    FarmlandToken.methods.balanceOf(purchasers_account).call().then(account_balance_populate);
}

async function get_current_tokens() {
    var purchasers_account = document.getElementById("currentAccount").getAttribute("value")
    FarmlandToken.methods.balanceOf(purchasers_account).call().then(current_tokens_populate);
}

async function get_wei_estimate(tokens_desired) {
    console.log("get_wei_estimate");
    console.log("token_desired" + tokens_desired)
    FarmlandCrowdsaleToken.methods.getWeiEstimate(tokens_desired).call().then(wei_estimate_populate);
    console.log("get_wei_estimate done");
}
async function get_rate() {
    FarmlandCrowdsaleToken.methods.rate().call().then(rate_populate);
}

async function estimate_wei_required() {
    var tokensDesired = document.getElementById("tokensDesired").value.toString();
    console.log("estimate_wei_required " + tokensDesired)
    get_wei_estimate(tokensDesired);
}

async function purchase_tokens() {
    var crowdsale_contract_address = document.getElementById('walletAddress').value;
    var purchasers_account = document.getElementById('currentAccount').value;
    var wei_estimate = document.getElementById('weiEstimate').value;
    
    purchase_tokens_finalize(purchasers_account, crowdsale_contract_address, wei_estimate);
}

async function purchase_tokens_finalize(purchasers_account, crowdsale_contract_address, wei_estimate) {
    console.log("purchase_tokens_finalize");
    var tx_hash = await FarmlandCrowdsaleToken.methods.buyTokens(purchasers_account).send({
            "from":purchasers_account,
            "gas":1000000,
            "to":crowdsale_contract_address,
            "gasPrice":0,
            "value":wei_estimate
        });
    //window.web3.eth.wait_for_transaction_receipt(tx_hash);
}

function wei_estimate_populate(_value) {
    console.log("Wei Estimate ");
    console.log("Wei Estimate : " + _value);
    document.getElementById("weiEstimate").removeAttribute("disabled");
    document.getElementById("weiEstimate").setAttribute("value", _value);
}
function current_tokens_populate(_value) {
    var balance = _value;

    document.getElementById("currentTokens").removeAttribute("disabled");
    document.getElementById("currentTokens").setAttribute("value", "Current Tokens Owned : " + _value);
}

function wallet_address_populate(_value) {
    document.getElementById("walletAddress").removeAttribute("disabled");
    document.getElementById("walletAddress").setAttribute("value", _value);
}

async function wallet_balance() {
    console.log(document.getElementById('walletAddress').value);
    console.log(await window.web3.eth.getBalance(document.getElementById('walletAddress').value));
    console.log(await window.web3.eth.getBalance(document.getElementById('walletAddress').value.toString()));
    var balanceToString = await window.web3.eth.getBalance(document.getElementById('walletAddress').value.toString());
    console.log(balanceToString);
    var balance = window.web3.utils.fromWei(balanceToString, 'ether');
    document.getElementById("walletBalance").setAttribute("value", "Wallet Balance : " + balance);
}
async function account_balance() {
    var balanceToString = await window.web3.eth.getBalance(document.getElementById('currentAccount').value.toString());
    var balance = window.web3.utils.fromWei(balanceToString, 'ether');
    document.getElementById("accountBalance").setAttribute("value", "Account Balance : " + balance);
}

function parcel_details_populate(_value) {
    document.getElementById("parcelDetails").removeAttribute("disabled");
    document.getElementById("parcelDetails").setAttribute("value", "Parcel Details : " + _value);
}
function parcel_owner_populate(_value) {
    document.getElementById("parcelOwner").removeAttribute("disabled");
    document.getElementById("parcelOwner").setAttribute("value", "Parcel Owner : " + _value);
}
function parcel_acres_populate(_value) {
    document.getElementById("parcelAcres").removeAttribute("disabled");
    document.getElementById("parcelAcres").setAttribute("value", "Parcel Acres : " + _value);
}
function parcel_name_populate(_value) {
    document.getElementById("parcelName").removeAttribute("disabled");
    document.getElementById("parcelName").setAttribute("value", "Parcel Name : " + _value);
}
function parcel_symbol_populate(_value) {
    document.getElementById("parcelSymbol").removeAttribute("disabled");
    document.getElementById("parcelSymbol").setAttribute("value", "Parcel Symbol : " + _value);
}
function parcel_cap_populate(_value) {
    document.getElementById("parcelCap").removeAttribute("disabled");
    document.getElementById("parcelCap").setAttribute("value", "Parcel Total Tokens : " + _value);
}
function parcel_tokens_issued_populate(_value) {
    document.getElementById("parcelTokensIssued").removeAttribute("disabled");
    document.getElementById("parcelTokensIssued").setAttribute("value", "Parcel Tokens Issued : " + _value);
}
function parcel_wei_raised_populate(_value) {
    document.getElementById("parcelWeiRaised").removeAttribute("disabled");
    document.getElementById("parcelWeiRaised").setAttribute("value", "Parcel Wei Raised : " + _value);
}

async function get_balances() {
    console.log(document.getElementById('currentAccount').value);
    wallet_balance();
    account_balance();
    get_current_tokens();
}

async function login() {
    // const loggers = await window.ethereum.getAccount(console.log);
    // await window.ethereum.enable();
    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});

    const walletAddress = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {}
          }
        ]
      });
      
      //if (!isReturningUser) {
      // Runs only they are brand new, or have hit the disconnect button
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [
            {
              eth_accounts: {}
            }
          ]
        });
      //}

    document.getElementById("balance").removeAttribute("disabled");
    document.getElementById("walletAddress").removeAttribute("disabled");
    document.getElementById("walletBalance").removeAttribute("disabled");
    document.getElementById("currentAccount").removeAttribute("disabled");
    document.getElementById("accountBalance").removeAttribute("disabled");
    get_current_account();
    get_wallet_address();
    

    document.getElementById("tokensDesired").removeAttribute("disabled");
    document.getElementById("weiEstimate").removeAttribute("disabled");
    document.getElementById("estimateWei").removeAttribute("disabled");
    document.getElementById("purchaseTokens").removeAttribute("disabled");
    
    //Moralis.Web3.authenticate().then(function (user) {
    //    user.set("name", document.getElementById('username').value);
    //    user.set("name", document.getElementById('username').value);
    //    user.save();
//        document.getElementById("gameid").removeAttribute("disabled");
        
        
        // wallet_balance();
        // account_balance(current_account);
        // get_current_tokens();
    // })
    
    
}