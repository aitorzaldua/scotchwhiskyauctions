import styles from '../styles/Home.module.css'


import { ethers, providers } from 'ethers';
import contractABI from './utils/helloWord.json';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT;
const alchemyServer = process.env.NEXT_PUBLIC_SERVER;



const loadData = async () => {
  const provider = new ethers.providers.JsonRpcProvider(alchemyServer);
  const contract = new ethers.Contract(contractAddress, contractABI, provider)
  const dataObtained = await contract.getHelloWorld();
  alert (dataObtained);

}

export default function Home() {
  return (
    <div className={styles.container}>
    Click the button here
    <button onClick={loadData}>click!</button>
    </div>
  )
}
