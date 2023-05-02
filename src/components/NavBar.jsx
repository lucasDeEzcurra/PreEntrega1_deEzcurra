import Container from 'react-bootstrap/Container';
import CartContainer from './CartContainer';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NavBar({cartProducts, total, setTotal, count, setCount,setHidden,hidden}) {
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
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/acerca">Acerca</Nav.Link>
              <Nav.Link as={Link} to="/">Productos</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <Nav.Link as={Link} to="/encontranos">Encontranos</Nav.Link>
              <Button><CartWidget cartProducts={cartProducts} setHidden={setHidden} hidden={hidden} total={total}/></Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <CartContainer
                hidden={hidden}
                cartProducts={cartProducts}
                total={total}
              />  
    </>
  );
}

export default NavBar;