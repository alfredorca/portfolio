import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand style={{paddingLeft: '2vw'}} href="/">Alfredo Cedeno</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">      
    </Nav>
    <Nav>
    <Nav.Link href="/about">About Me</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Personal</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Public</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tech</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey={2} href="/contact" style={{paddingRight: '6vw'}}>
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
