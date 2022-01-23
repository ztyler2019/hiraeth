import ETHpayment from './ETHpayment';

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
        <div class="pic-ctn">
          <img src={dreamWorld} alt="" class="pic" />
          <img src={intoTheLight} alt="" class="pic" />
          <img src={lighthouseOrtho} alt="" class="pic" />
          <img src={meditation_medication} alt="" class="pic" />
          <img src={mfw3} alt="" class="pic" />
        </div>
      <div>
          <ETHpayment />
      </div>
      <div class="pic-ctn">
          <img src={apartment} alt="" class="pic" />
          <img src={walkAway} alt="" class="pic" />
          <img src={moonView} alt="" class="pic" />
          <img src={ohNo} alt="" class="pic" />
          <img src={tears} alt="" class="pic" />
        </div>
      
        
    </div>
  );
}

export default App;
