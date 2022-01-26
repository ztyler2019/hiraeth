import ETHpayment from './ETHpayment';

import frame from '../Images/frame.png';

function App() {
  return (
    <div className="image-card">
      <div className='container'>
      <div className='row'>
          <div className='col-xl-4 col-lg-6 col-md-12'>
            <img src={frame} alt='frame' className='frame'/>
          </div>
          <div className='col-xl-8 col-lg-6 col-md-12'>
            <ETHpayment />
          </div>
      </div>
      </div>
      
      
        
    </div>
  );
}

export default App;
