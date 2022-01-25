import { Navbar, Container, Nav } from 'react-bootstrap';
import Countdown from 'react-countdown';

import title from '../Images/hiraeth1.png';
import yt from '../Images/yt.png';
import insta from '../Images/insta.png';
import reddit from '../Images/reddit.png';
import twitter from '../Images/twitter.png';
import patreon from '../Images/patreon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

        //
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src={title} className="logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <div className='buffer'>
    <Countdown date="11/11/2022"/></div>
    {/*<Nav className="me-auto">
      <Nav.Link href="#features">Money Features</Nav.Link>
      <NavDropdown title="Money Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
      
    </Nav>*/}
    
    <div className='buffer2' />
    <Nav>
      <Nav.Link href="https://www.youtube.com/channel/UCqU0YrP58xBnBTk4XzeJTPw"><img className='social-media' src={yt} alt='YouTube'/></Nav.Link>
      <Nav.Link href="https://www.patreon.com/hiraeth2022"><img className='social-media' src={patreon} alt='Patreon'/></Nav.Link>
      <Nav.Link href="https://www.instagram.com/zacks_cozy_corner/"><img className='social-media' src={insta} alt='Instagram'/></Nav.Link>
      <Nav.Link href="https://www.reddit.com/user/ZskrillaVkilla"><img className='social-media' src={reddit} alt='Reddit'/></Nav.Link>
      <Nav.Link href="https://twitter.com/SpayceKowBoi"><img className='social-media' src={twitter} alt='Twitter'/></Nav.Link>
    </Nav>
  </Container>
</Navbar>
    
  );
}

export default App;