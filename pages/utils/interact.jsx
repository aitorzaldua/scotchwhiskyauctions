require('dotenv').config();
const alchemyKey = process.env.GOERLI_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("./contractAbi.json");
const contractAddress = process.env.HW_CONTRACT_ADDRESS;


export const helloWorldContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const loadCurrentMessage = async () => { 
  const message = await helloWorldContract.methods.message().call(); 
  return message;
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};

