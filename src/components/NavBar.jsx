import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function NavBar() {

  return (
    <> 
      <Navbar bg="dark" variant="dark" expand={"md"} className="mb-3" sticky='top'>
        <Container fluid>
            <Navbar.Brand className='mx-5' as={Link} to="/">MATES ARTESANALES</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">Productos</Nav.Link>
              <Nav.Link as={Link} to="/orders">Mis ordenes de compra</Nav.Link>
              <Button as={Link} to="/cart"><CartWidget/></Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;