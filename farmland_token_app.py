import os
import json
from web3 import Web3
from pathlib import Path
from dotenv import load_dotenv
import streamlit as st

load_dotenv()

# Define and connect a new Web3 provider
w3 = Web3(Web3.HTTPProvider(os.getenv("WEB3_PROVIDER_URI")))

################################################################################
# Contract Helper function:
# 1. Loads the contract once using cache
# 2. Connects to the contract using the contract address and ABI
################################################################################

@st.cache(allow_output_mutation=True)
def load_crowdsale_contract(contract_compiled_abi_file_name, env_variable):

    # Load The Contract ABI
    with open(Path(contract_compiled_abi_file_name)) as abi_file_name:
        abi = json.load(abi_file_name)

    
    # Set the contract address (this is the address of the deployed contract)
    contract_address = os.getenv(env_variable)

    # Get the contract using web3
    contract = w3.eth.contract(
            address=contract_address,
            abi=abi
            #bytecode = bytecode
        )

    return contract

# Load the crowdsale and token contracts
crowdsale_contract = load_crowdsale_contract("./contracts/compiled/farmland_token_crowdsale_abi.json",
                                            "SMART_CONTRACT_CROWDSALE_ADDRESS")
token_contract = load_crowdsale_contract("./contracts/compiled/farmland_token_abi.json",
                                            "SMART_CONTRACT_TOKEN_ADDRESS")

st.markdown("# The Farmland Crowdsale")

farmland_options = ["Crowdsale status", "Purchase tokens"]

# farmland_options_df = pd.DataFrame(farmland_options)
# st.write(pychain_df)

# difficulty = st.sidebar.slider("Block Difficulty", 1, 5, 2)
# pychain.difficulty = difficulty

st.sidebar.write("# Option Selected")
selected_option = st.sidebar.selectbox(
    "Which option would you like to choose?", farmland_options
)

st.sidebar.write(selected_option)

if selected_option == "Crowdsale status":
    st.image("./Images/5544_1.png")
    parcelDetails = token_contract.functions.parcelDetails().call()
    st.write(f"## Parcel Details           : {parcelDetails}")
    parcelOwner = token_contract.functions.parcelOwner().call()
    st.write(f"## Parcel Owner             : {parcelOwner}")
    parcelAcres = token_contract.functions.totalAcres().call()
    st.write(f"## Parcel Acres             : {parcelAcres}")
    name = token_contract.functions.name().call()
    st.write(f"## Name                     : {name}")
    symbol = token_contract.functions.symbol().call()
    st.write(f"## Symbol                   : {symbol}")
    cap = crowdsale_contract.functions.cap().call()
    st.write(f"## Total Tokens             : {cap}")
    total_token_available = token_contract.functions.totalSupply().call()
    st.write(f"## Total Tokens Issued      : {total_token_available}")
    weiRaised = crowdsale_contract.functions.weiRaised().call()
    st.write(f"## Wei Raised               : {weiRaised}")
    openingTime = crowdsale_contract.functions.openingTime().call()
    st.write(f"## Opening Time             : {openingTime}")
    closingTime = crowdsale_contract.functions.closingTime().call()
    st.write(f"## Closing Time             : {closingTime}")
    currentTime = crowdsale_contract.functions.currentTime().call()
    st.write(f"## Current Time             : {currentTime}")
else:
################################################################################
# Purchase Tokens
################################################################################
    accounts = w3.eth.accounts
    purchasers_account = accounts[0]
    purchasers_account = st.selectbox("Select Account", options=accounts)
    crowdsale_contract_address = os.getenv("SMART_CONTRACT_CROWDSALE_ADDRESS")
    tokens_desired = int(st.number_input("Enter tokens desired"))
    wallet = crowdsale_contract.functions.wallet().call()
    st.write(f"### Wallet is {wallet}")
    st.write(f"### Wallet's balance is {w3.eth.getBalance(wallet)} weis")
    symbol = token_contract.functions.symbol().call()
    cap = crowdsale_contract.functions.cap().call()
    st.write(f"### Total {symbol} Tokens             : {cap}")
    total_token_available = token_contract.functions.totalSupply().call()
    st.write(f"### Total {symbol} Tokens Issued      : {total_token_available}")
    balance = token_contract.functions.balanceOf(purchasers_account).call()
    st.write(f"### This account currently holds {balance} {symbol} tokens")
    st.write(f"### account balance is {w3.eth.getBalance(purchasers_account)} weis")
    if st.button("Get Wei Estimate"):
        rate = crowdsale_contract.functions.rate().call()
        st.write(f"### rate : {rate}")
        wei_estimate = crowdsale_contract.functions.getWeiEstimate(tokens_desired).call()
        st.write(f"### Wei Estimate for {tokens_desired} tokens : {wei_estimate}")    
    if st.button("Purchase"):
        st.write(f"Purchasing {tokens_desired} tokens ....")
        wei_estimate = crowdsale_contract.functions.getWeiEstimate(tokens_desired).call()
        st.write(f"### Wei Estimate for {tokens_desired} tokens : {wei_estimate}")
        
        tx_hash = crowdsale_contract.functions.buyTokens(purchasers_account).transact({
            "from":purchasers_account,
            "gas":1000000,
            "to":crowdsale_contract_address,
            "gasPrice":0,
            "value":wei_estimate
        })
        w3.eth.wait_for_transaction_receipt(tx_hash)
        st.write(f"### Done purchasing {tokens_desired} tokens")
        st.write(f"### Wallet balance now is {w3.eth.getBalance(wallet)} weis")
        st.write(f"### account balance now is {w3.eth.getBalance(purchasers_account)} weis")


################################################################################
# Award Certificate
################################################################################

# Enter a text string for the certificate or link to digital certificate location
#certificate_details = st.text_input("The URI to the certificate")
#if st.button("Award Certificate"):
#    # Call the awardCertificate function with web3
#    # @TODO: YOUR CODE HERE!
#    tx_hash = contract.functions.awardCertificate(student_account, certificate_details).transact({
#        "from":student_account,
#        "gas":1000000
#    })

################################################################################
# Display Certificate
################################################################################
#certificate_id = st.number_input("Enter a Certificate Token ID to display", value=0, step=1)
# @TODO: YOUR CODE HERE!
#if st.button("Display Certificate"):
#    # Get the certificate owner
#    certificate_owner = contract.functions.ownerOf(certificate_id).call()
#    st.write(f"The certificate was awarded to {certificate_owner}")
#    # Get the certificate's URI
#    certificate_uri = contract.functions.tokenURI(certificate_id).call()
#    st.write(f"The certificate's tokenURI metadata is {certificate_uri}")
#    st.image(certificate_uri)
