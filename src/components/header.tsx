//import Web3 from "web3";
//import Web3Modal from "web3modal";
//import WalletConnectProvider from "@walletconnect/web3-provider";

import { useState } from "react";
// import connectWallet from "../utils/connectWallet"
// import getAccountAddress from "../utils/getAccount";
// connect wallet backend code
/*
const provider_options={
  walletconnect:{
    package:WalletConnectProvider,
    options:{
      infuraId:""
    },
  },
};

class core{
  connect(){
    if( typeof window !=="undefined"){
      const web3modal = new Web3Modal({
     // const web3modal= new Web3Modal({
        network:"mainnet",
        cacheProvider:true,
        providerOptions: provider_options,
    
      });
    }
  }
} 
*/

async function getAccountAddress() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}

function connectWallet(setAccountAddress: any) {

  // const connectButtonOnClick = () => {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccountAddress().then((response) => {
        setAccountAddress(response);
      });
    } else {
      console.log("error");
    }
  // };
}




export default function Navbar()


{
  
const [accountAddress, setAccountAddress] = useState("");
  return (
    <>
      <nav className="mt-16 flex w-full flex-row justify-around px-4 md:mt-0">
        <ul className="">
          <li>
            <h2 className="font-serif text-3xl font-medium text-white">
              D-Warden
            </h2>
          </li>
        </ul>
        <ul className="flex flex-row gap-3">
          <li className=" font-serif text-lg font-medium text-white">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
          </li>
          <li className=" font-serif text-lg font-medium text-white">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
          </li>
          <li className=" font-serif text-lg font-medium text-white">
           
            <button className="rounded-full border border-[hsl(280,100%,70%)] p-2 font-serif text-base font-bold tracking-wider text-white outline-none transition-all duration-300 hover:bg-[hsl(280,100%,70%)]"
            onClick={() => connectWallet(setAccountAddress)}>
            {
              accountAddress ? "Hello!": "Connect wallet"
            }
            </button>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"></a> */}
          </li>
        </ul>
      </nav>
    </>
  );
}
