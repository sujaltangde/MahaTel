import React, { useState } from "react";

interface TokenDisplayStates {
  tokenTicker?: string;
  tokenName?: string;
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
  
  const [multisenderStates, setMultisenderStates] = useState<MultisenderStates>({});

  const handleTokenDisplay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("tokenDisplayStates", tokenDisplayStates);
    setPageState("2");
  };

  
  const handleMultisender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("multisenderStates", multisenderStates);
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
        <div className="border-white border md:w-44 w-16  block"></div>
        
        <div
          className={`${
            pageState === "2" && "bg-blue-900"
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

     

      {/* Multisender */}
      {pageState === "2" && (
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
