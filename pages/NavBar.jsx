import Image from "next/image";
import Logo from "../public/images/whiskyLogo.png";

const NavbarItem = ({title, classProps}) => {
    return (
      <li className="mx-4 cursor-pointer ${classProps}">
        {title}
      </li>
    )
  }

export default function NavBar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={Logo} alt="logo" className="w-48 cursor-pointer" />
      </div>

      <ul className=" md:flex list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Current Auction</li>
        <li className="mx-4 cursor-pointer">Previous Auctions</li>
        <li className="mx-4 cursor-pointer">DAO Members</li>
        <li className="mx-4 cursor-pointer">Contact Us</li>
        <li className="text-white bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Wallet
        </li>
      </ul>
    </nav>
  );
}
