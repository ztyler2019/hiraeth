import { Navbar, Container} from 'react-bootstrap';
import Countdown from 'react-countdown';

import title from '../Images/title.png';
import yt from '../Images/yt.png';
import insta from '../Images/insta.png';
import reddit from '../Images/reddit.png';
import twitter from '../Images/twitter.png';
import patreon from '../Images/patreon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

        //
    <Navbar className='' collapseOnSelect expand="lg" variant="light">
      <Container>

        <div className='col-lg-4 col-md-6 col-12'>
          <Navbar.Brand href="#home"><img src={title} className="title" alt="logo" /></Navbar.Brand>
        </div>

        <div className='countdown col-lg-4 col-md-12 col-12'>
          <p className='text'>[ <Countdown date="11/11/2022"/> ]</p>
        </div>
    
        <div className='social-container col-lg-4 col-md-3 col-12' >
            <a href="https://www.youtube.com/channel/UCqU0YrP58xBnBTk4XzeJTPw"><img className='social-media1' src={yt} alt='YouTube'/></a>
            <a href="https://www.patreon.com/hiraeth2022"><img className='social-media2' src={patreon} alt='Patreon'/></a>
            <a href="https://www.instagram.com/zacks_cozy_corner/"><img className='social-media3' src={insta} alt='Instagram'/></a>
            <a href="https://www.reddit.com/user/ZskrillaVkilla"><img className='social-media4' src={reddit} alt='Reddit'/></a>
            <a href="https://twitter.com/SpayceKowBoi"><img className='social-media5' src={twitter} alt='Twitter'/></a>
          
        </div>
      </Container>
    </Navbar>
    
  );
}

export default App;