import ETHpayment from './ETHpayment';

import frame from '../Images/frame.png';
import head from '../Images/head.png';
import dreamWorld from '../Images/dreamworld part1.png';
import intoTheLight from '../Images/intoTheLight.png';
import lighthouseOrtho from '../Images/lighthouseOrtho.png';
import meditation_medication from '../Images/meditation += medication.gif';
import mfw3 from '../Images/mfw3.png';
import apartment from '../Images/apartment1.png';
import walkAway from '../Images/walkAway.gif';
import moonView from '../Images/moon view.png';
import ohNo from '../Images/oh no4.png';
import tears from '../Images/tears5.png';


function App() {
  return (
    <div className="image-card image-card-fade">
        <div className='nft-box'>
          <div className='frame'>
          <img src={frame}/>
          </div>
          <ETHpayment />
          <div class="pic-ctn">
          <img src={apartment} alt="" class="pic" />
          <img src={walkAway} alt="" class="pic" />
          <img src={moonView} alt="" class="pic" />
          <img src={ohNo} alt="" class="pic" />
          <img src={tears} alt="" class="pic" />
        </div>
        </div>
      
      
        
    </div>
  );
}

export default App;
