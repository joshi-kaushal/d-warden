export default async function getAccountAddress() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
  
    return account;
  }