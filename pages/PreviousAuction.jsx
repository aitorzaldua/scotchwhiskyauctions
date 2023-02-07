import NavBar from "./NavBar";
import { ethers } from "ethers";

import contractAbi from "./utils/contractAbi.json";

const contractAddress = '0xDf41B601ACe7A0fDFcBeC132f31892Bb3d80B62f';

const loadData = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, contractABI, provider)
  const dataObtained = await contract.getMemos();
  alert (dataObtained);
}

export default function PreviousAuction() {
  return (
    <div className="min-h-screen">
      <div className="bg-white">
        <NavBar />
      </div>
      <div onClick={loadData} className="text-white bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        <button>click!</button>
      </div>
    </div>
  );
}
