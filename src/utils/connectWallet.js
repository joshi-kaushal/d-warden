import { useState } from "react";

import getAccountAddress from "./getAccount"

  
export default function connectWallet() {
    const [accountAddress, setAccountAddress] = useState("");
  
    const connectButtonOnClick = () => {
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
    };

}