import Payment from './Payment';

import frame from '../Images/Frame.mp4';

function App() {
  return (
    <div className="image-card">
      <div className='container'>
      <div className='row'>
          <div className='col-xl-4 col-lg-6 col-md-12 d-none d-lg-block'>
            <video src={frame} alt='frame' className='frame' autoPlay muted loop/>
          </div>
          <div className='col-xl-8 col-lg-6 col-md-12'>
            <Payment />
          </div>
      </div>
      </div>
      
      
        
    </div>
  );
}

export default App;
