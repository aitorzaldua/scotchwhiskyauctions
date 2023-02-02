import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/whiskyLogo.png";
import { useState } from "react";
import { connectWallet } from "./utils/connectWallet";

const NavbarItem = ({ title, classProps }) => {
  return <li className="mx-4 cursor-pointer ${classProps}">{title}</li>;
};

export default function NavBar() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={Logo} alt="logo" className="w-48 cursor-pointer" />
      </div>

      <ul className=" md:flex list-none flex-row justify-between items-center flex-initial">
        <Link href="/">
          <li className="mx-4 cursor-pointer">Home</li>
        </Link>
        <Link href="CurrentAuction">
          <li className="mx-4 cursor-pointer">Current Auction</li>
        </Link>
        <Link href="PreviousAuction">
          <li className="mx-4 cursor-pointer">Previous Auctions</li>
        </Link>
        <Link href="DaoMembers">
          <li className="mx-4 cursor-pointer">DAO Members</li>
        </Link>
        <li className="mx-4 cursor-pointer">Contact Us</li>
        <Link href="HelloWorld">
          <li className="mx-4 cursor-pointer">Hello World</li>
        </Link>
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
      </ul>
    </nav>
  );
}
