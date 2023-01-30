import { useState } from "react";

export default function HelloWord() {

    const [walletAddress, setWalletAddress] = useState();

    async function requestAccount() {
        console.log('requesting account...')

        if(window.ethereum) {
            console.log("we have the object mate");
        } else {
            console.log("we have not, boomer");
        }

        try {
            const accounts = await window.ethereum.request({method: "eth_requestAccounts", })
            console.log(accounts[0]);
            setWalletAddress(accounts[0]);
        } catch (error) {
            console.log("error");
        }
    }
  return (
    <div className="p-60">
      <button
      className="text-3xl font-bold text-blue-600 bg-orange-600"
      onClick={ requestAccount }
      >wallet button
      </button>
      <h3 className="pt-5">Wallet addres: {walletAddress}</h3>
    </div>
  );
}
