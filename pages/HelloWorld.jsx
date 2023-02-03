import { useEffect, useState } from "react";
import Image from "next/image.js";
import Logo from "../public/images/whiskyLogo.png";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "./utils/interact.jsx";


export default function HelloWorld() {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network.");
  const [newMessage, setNewMessage] = useState("");

  //called only once
  useEffect(() => {
    async function fetchMessage() {
      const message = await loadCurrentMessage();
      setMessage(message);
    }
    fetchMessage();
  }, []);

  function addSmartContractListener() {
    
  }

  function addWalletListener() {
    //TODO: implement
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onUpdatePressed = async () => {
    console.log(JSON.stringify(contract.abi));
  };

  //the UI of our component
  return (
    <div id="container" className="pl-16">
      <Image
        id="logo"
        src={Logo}
        alt=""
        className="md:flex-[0.5] flex-initial justify-center items-center w-48 cursor-pointer"
      ></Image>

      <button
        id="walletButton"
        onClick={connectWalletPressed}
        className="text-white bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 className="pt-8">Current Message:</h2>
      <p>{message}</p>
      <h2 className="pt-4">New Message:</h2>

      <div>
        <input
          type="text"
          className="text-white bg-[#424447] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#cbcdd6]"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button
          id="publishButton"
          onClick={onUpdatePressed}
          className="text-white bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          Update Message
        </button>
      </div>
    </div>
  );
}
