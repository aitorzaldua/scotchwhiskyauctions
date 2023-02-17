import { useState } from "react";
import NavBar from "./NavBar";
import { ethers } from "ethers";

import contractAbi from "./utils/contractAbi.json";

const contractAddress = "0xa341b27f38cC658507593f2ECAbA4A15b10234f5";

const whichOne = 1;

const loadData = async (whichOne = 1) => {

  try {
    if (ethereum) {
      const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/lVH3kEFWP68nfURINIQvYAaW1JxDHGEL");
      const contract = new ethers.Contract(contractAddress,contractAbi,provider);
      const dataObtained = await contract.getVoting(whichOne);
      alert(dataObtained);
    } else {
      console.log("we don´t have Metamask object");
    }

  } catch (error) {
    console.log(error);
  }
};

export default function PreviousAuction() {

  const [Membervoting, setMemberVoting] = useState(1);

  return (
    <div className="min-h-screen">
      <div className="bg-white">
        <NavBar />
      </div>
      <div
        onClick={loadData}
        className="text-white bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
        <button>click!</button>
      </div>
   
    </div>
  );
}
