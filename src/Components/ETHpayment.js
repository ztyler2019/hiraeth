import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "../ErrorMessage";
import TxList from "../TxList";

//import '../css/ETHcard.css'
import '../css/ETH.css' 

const startPayment = async ({ setError, setTxs, ether }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = "0xBb51C46263E2032139B5cD97dfAC7B988e997269"
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="eth-card">
        <main>
          <h1>
            Help Fund Future Projects
          </h1>
          <div>
            <div className="my-3 input">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Ethereum"
              />
            </div>
          </div>
        </main>
        <footer className="p-3">
          <button
            type="submit"
            className="button"
          >
            Thanks
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}
