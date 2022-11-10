import { Navbar, NavDropdown, Nav, } from 'react-bootstrap';
import './index.css'
const Navbarr = () => {

  return (
    <>
       <div className='App tc f3 navbar-container'>
        <Navbar bg='light' expand='sm' class="shadow-sm p-3 mb-5 bg-white rounded">
          <Navbar.Brand href="#home">
            <img alt="logo" className='navbar-logo' src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1667925017/Logo_gdz6u6.jpg"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-b' />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-c' >
            <Nav className='mr-auto'>
              <Nav.Link href="/" className="link">Home</Nav.Link>
              <Nav.Link href="#about" className="link">About</Nav.Link>
              <Nav.Link href="#services" className="link">Services</Nav.Link>
              <Nav.Link href="#portfolio" className="link">Portfolio</Nav.Link>
              <Nav.Link href="#videos" className="link">Videos</Nav.Link>
            </Nav>
            <NavDropdown title="Share" className="link-s" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          
        </Navbar>
        </div>
    </>
  );
}

export default Navbarr;