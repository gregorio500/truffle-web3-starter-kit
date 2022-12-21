import Web3 from "web3";
import configuration from "../build/contracts/Example.json";

const CONTRACT_ABI = configuration.abi;
const CONTRACT_ADDRESS = configuration.networks['5777'].address;
const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);


///////////////



const inputWord = document.getElementById('inputWord')
const button = document.getElementById('btn')
const showData = document.getElementById('showData')



const setData = async () => {
  const accounts = await web3.eth.requestAccounts()
  button.addEventListener('click',  async (e) => {
    e.preventDefault()
    await contract.methods
        .setData(inputWord.value)
        .send({from: accounts[0]})
        .then(getData)
  })
}


const getData = async () => {
    await contract.methods
      .getData()
      .call()
      .then(res => showData.innerHTML = res )
  };



const main =() => {
  setData()
  getData()

}

main();