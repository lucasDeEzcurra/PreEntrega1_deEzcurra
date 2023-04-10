import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <> 
      <Navbar bg="dark" variant="dark" expand={"md"} className="mb-3" sticky='top'>
        <Container fluid>
            <Navbar.Brand className='mx-5' href="#">MATES ARTESANALES</Navbar.Brand>
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
                <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/acerca">Acerca</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/encontranos">Encontranos</Nav.Link>
              <Nav.Link href="/carrito"><CartWidget/></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;