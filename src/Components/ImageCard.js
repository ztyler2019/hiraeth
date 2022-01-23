import ETHpayment from './ETHpayment';

import dreamWorld from '../Images/dreamworld part1.png';
import intoTheLight from '../Images/intoTheLight.png';
import lighthouseOrtho from '../Images/lighthouseOrtho.png';
import meditation_medication from '../Images/meditation += medication.gif';
import mfw3 from '../Images/mfw3.png';

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
          <img src="https://picsum.photos/200/300?t=1" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=2" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=3" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=4" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=5" alt="" class="pic" />
        </div>
        
    </div>
  );
}

export default App;
