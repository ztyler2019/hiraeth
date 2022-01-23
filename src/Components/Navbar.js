import { Navbar, Container, Nav, NavDropdown, NavLink } from 'react-bootstrap';

import logo from '../Images/head.png';
import title from '../Images/hiraeth1.png';
import yt from '../Images/yt.png';
import insta from '../Images/insta.png';
import reddit from '../Images/reddit.png';
import twitter from '../Images/twitter.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

        //
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="light" sticky="top">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Money Features</Nav.Link>
      <NavDropdown title="Money Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <Nav>
      <NavLink href="#title"><img className='title' src={title} /></NavLink>
    </Nav>
    <Nav>
      <Nav.Link href=""><img className='social-media' src={yt}/></Nav.Link>
      <Nav.Link href=""><img className='social-media' src={insta}/></Nav.Link>
      <Nav.Link href=""><img className='social-media' src={reddit}/></Nav.Link>
      <Nav.Link href=""><img className='social-media' src={twitter}/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default App;