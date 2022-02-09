import { Navbar, Container} from 'react-bootstrap';
import Countdown from 'react-countdown';

import title from '../Images/title.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

        <div className='container'>
        <div className='row'>
        <div className='col-3'/>
        <div className='col-6'>
          <img src={title} className="title" alt="logo" />
        </div>
        <div className='col-3'/>
        </div>

        <div className='countdown col-12'>
          [ <Countdown date="11/11/2022"/> ]
        </div>
    
    </div>
    
  );
}

export default App;