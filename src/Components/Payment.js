import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "../ErrorMessage";
import TxList from "../TxList";

import { ReactComponent as CashApp } from '../Images/cash-app-seeklogo.com.svg';
import { ReactComponent as Venmo } from '../Images/venmo-icon.svg';
import { ReactComponent as Ethereum } from '../Images/ethereum.svg';

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
    if (paymentType === "Ethereum") {
    await startPayment({
      setError,
      setTxs,
      ether: data.get("amount")
    });
    } else if (paymentType === "CashApp") {
      window.location.href = "https://cash.app/$SpaceKowBoi/" + data.get("amount");
    } else if (paymentType === "Venmo") {
      window.location.href = "venmo://paycharge?txn=pay&recipients=Zack-Tyler-19&amount=" + data.get("amount") + "&note=Donation%20for%20future%20Cubic%20Collective%20projects";
    }
    
  };

  const [paymentType, setPaymentType] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <div className="eth-card">
        <main>
          <h1>
            Help Fund Future Projects
          </h1>
          <div>

          <div>
        
            <input 
              type="radio" 
              className="radio_item" 
              value="CashApp" 
              name="item" 
              id="radio1"
              onChange={(e) => setPaymentType("CashApp")}
            />
            <label className="label_item" htmlFor="radio1"> <CashApp/> </label>

            <input 
              type="radio" 
              className="radio_item" 
              value="Venmo" 
              name="item" 
              id="radio2"
              onChange={(e) => setPaymentType("Venmo")}
            />
            <label className="label_item" htmlFor="radio2"> <Venmo/> </label>

            <input 
              type="radio" 
              className="radio_item" 
              value="Ethereum" 
              name="item" 
              id="radio3"
              onChange={(e) => setPaymentType("Ethereum")}
            />
            <label className="label_item ethereum" htmlFor="radio3"> <Ethereum/> </label>

            {/*<button className='payment-buttons'><CashApp/></button>

              <a href="">Cash App</a>
              <a href="">Venmo</a>*/}
          </div>

            <div className="my-3 input">
              
              <input
                name="amount"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder={paymentType}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            
          </div>
        </main>
        <footer className="p-3">
          <button
            type="submit"
            className="button"
          >
            Donate
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}
