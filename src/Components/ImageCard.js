import ETHpayment from './ETHpayment';

import frame from '../Images/frame.png';

function App() {
  return (
    <div className="image-card image-card-fade">
        <div className='nft-box'>
          <div className='frame'>
          <img src={frame} alt='frame'/>
          </div>
          <ETHpayment />
        </div>
      
      
        
    </div>
  );
}

export default App;
