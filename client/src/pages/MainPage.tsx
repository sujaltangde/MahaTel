import React, { useState } from "react";

interface TokenDisplayStates {
  tokenTicker?: string;
  tokenName?: string;
  supply?: number;
}

interface NFTStates {
  nftImage?: string | ArrayBuffer | null;
  nftImgName?: string;
  nftName?: string;
  supply?: number;
}

interface MultisenderStates {
  contractAddress?: string;
  noOfUsers?: number;
  addressesAmounts?: string;
}

const MainPage: React.FC = () => {
  const [pageState, setPageState] = useState<string>("1");

  const [tokenDisplayStates, setTokenDisplayStates] = useState<TokenDisplayStates>({});
  const [nftStates, setNFTStates] = useState<NFTStates>({});
  const [multisenderStates, setMultisenderStates] = useState<MultisenderStates>({});

  const handleTokenDisplay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("tokenDisplayStates", tokenDisplayStates);
    setPageState("2");
  };

  const handleDeployNFT = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("nftStates", nftStates);
    setPageState("3");
  };

  const handleMultisender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("multisenderStates", multisenderStates);
  };

  const nftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setNFTStates((prevState) => ({
            ...prevState,
            nftImage: reader.result,
            nftImgName: e.target.files![0].name,
          }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <div className="flex justify-center items-center py-12 flex-wrap md:gap-4 gap-2">
        <div
          className={`${
            pageState === "1" && "bg-blue-900"
          } md:text-xl text-xs border border-white px-6 py-3 rounded-3xl cursor-pointer`}
        >
          Token Display
        </div>
        <div className="border-white border w-44 hidden md:block"></div>
        <div
          className={`${
            pageState === "2" && "bg-blue-900"
          } md:text-xl text-xs border border-white px-8 py-3 rounded-3xl cursor-pointer`}
        >
          NFT's
        </div>
        <div className="border-white border w-44 hidden md:block"></div>
        <div
          className={`${
            pageState === "3" && "bg-blue-900"
          } md:text-xl text-xs border border-white px-6 py-3 rounded-3xl cursor-pointer`}
        >
          Multisender
        </div>
      </div>

      {/* Token Display */}
      {pageState === "1" && (
        <div className="flex justify-center items-center mt-8 w-full px-4">
          <form
            onSubmit={handleTokenDisplay}
            className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg"
          >
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Token Ticker"
              value={tokenDisplayStates.tokenTicker}
              onChange={(e) => {
                setTokenDisplayStates({
                  ...tokenDisplayStates,
                  tokenTicker: e.target.value.toLocaleUpperCase(),
                });
              }}
              required
            />
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Token Name"
              onChange={(e) => {
                setTokenDisplayStates({
                  ...tokenDisplayStates,
                  tokenName: e.target.value,
                });
              }}
              required
            />
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Supply"
              onChange={(e) => {
                setTokenDisplayStates({
                  ...tokenDisplayStates,
                  supply: parseInt(e.target.value),
                });
              }}
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded focus:outline-none focus:shadow-outline"
            >
              Display Token
            </button>
          </form>
        </div>
      )}

      {/* NFT's */}
      {pageState === "2" && (
        <div className="flex justify-center items-center mt-8 w-full px-4">
          <form
            onSubmit={handleDeployNFT}
            className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-6 items-center"
          >
            <label htmlFor="nftImg" className="cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline">
              {nftStates && nftStates.nftImgName ? nftStates.nftImgName.length > 24 ? nftStates.nftImgName.slice(0,24) + "..." : nftStates.nftImgName : " Select NFT Image"}
            </label>
            <input
              type="file"
              id="nftImg"
              className="hidden"
              name="nft"
              onChange={nftChange}
              required
            />
            {nftStates && nftStates.nftImage && (
              <div className="mt-2 w-full flex justify-center">
                <img
                  src={nftStates.nftImage as string}
                  alt="Selected NFT"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="NFT Name"
              onChange={(e) => {
                setNFTStates({
                  ...nftStates,
                  nftName: e.target.value,
                });
              }}
              required
            />
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Supply"
              onChange={(e) => {
                setNFTStates({
                  ...nftStates,
                  supply: parseInt(e.target.value),
                });
              }}
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded focus:outline-none focus:shadow-outline"
            >
              Deploy NFT
            </button>
          </form>
        </div>
      )}

      {/* Multisender */}
      {pageState === "3" && (
        <div className="flex justify-center items-center mt-8 w-full px-4">
          <form
            onSubmit={handleMultisender}
            className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-6 items-center"
          >
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Token's Or NFT's contract address"
              onChange={(e) => {
                setMultisenderStates({
                  ...multisenderStates,
                  contractAddress: e.target.value,
                });
              }}
              required
            />
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="No of users to send"
              onChange={(e) => {
                setMultisenderStates({
                  ...multisenderStates,
                  noOfUsers: parseInt(e.target.value),
                });
              }}
              required
            />
            <textarea
              onChange={(e) => {
                setMultisenderStates({
                  ...multisenderStates,
                  addressesAmounts: e.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`Enter in "address, amount" format`}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MainPage;
