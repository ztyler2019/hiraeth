//import { PaymentButton } from "react-paypal-button-v2";
import { ReactComponent as CashApp } from '../Images/cash-app-seeklogo.com.svg';
import { ReactComponent as Venmo } from '../Images/venmo-icon.svg';
import { ReactComponent as Ethereum } from '../Images/ethereum.svg';



function Payment() {
    return (
      <div>
        
    <input type="radio" className="radio_item" value="cashApp" name="item" id="radio1" onClick={console.log("cashApp")}/>
    <label className="label_item" htmlFor="radio1"> <CashApp/> </label>
    
    <input type="radio" className="radio_item" value="Venmo" name="item" id="radio2"/>
    <label className="label_item" htmlFor="radio2"> <Venmo/> </label>

    <input type="radio" className="radio_item" value="Ethereum" name="item" id="radio3"/>
    <label className="label_item ethereum" htmlFor="radio3"> <Ethereum/> </label>

    {/*<button className='payment-buttons'><CashApp/></button>
    
      <a href="https://cash.app/$SpaceKowBoi/5">Cash App</a>
      <a href="venmo://paycharge?txn=pay&recipients=Zack-Tyler-19&amount=5&note=Donation%20for%20future%20Cubic%20Collective%20projects">Venmo</a>*/}
      </div>
    );
  }

export default Payment