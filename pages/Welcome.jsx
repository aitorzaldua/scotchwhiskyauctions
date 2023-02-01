import Image from "next/image";
import Brands from "../public/images/brands.png";

export default function Welcome() {
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:py-20 md:px-52 py-12 px-4">
        {/* Left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl py-1">
            The DAO for the most sophisticated collectors
          </h1>
          <p className="text-left mt-5  font-light  md:w-9/12 w-11/12 text-base">
            Scotch Whisky Auctions is a decentralized autonomous organization,
            open to all, where you can auction or obtain the most exclusive
            whiskies to increase your collection or as a future investment.{" "}
            <br />
            Each bottle has its own NFT, a proof of ownership that guarantees
            both the origin and the current holder, as well as adding value to
            the collectible.
            <br />
            You can even make a profit simply by being a member of the
            organization. 100% transparent thanks to Blockchain technology.
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-2 md:w-9/12 mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Open DAO</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Proof of Property
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              NFT
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        {/* End of the Left side */}

        {/* Rigth side */}
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Image src={Brands} alt="Chess" className="w-600 cursor-pointer" />
        </div>
        {/* End of the Rigth side */}
      </div>
    </div>
  );
}
