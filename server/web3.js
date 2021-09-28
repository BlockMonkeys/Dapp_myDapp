const Web3 = require("web3");
const rpcURL = "http://127.0.0.1:8545";
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

module.exports = web3;
