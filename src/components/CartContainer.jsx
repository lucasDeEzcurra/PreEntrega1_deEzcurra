import React, { useContext } from 'react';
import { Button, Col, Row,Image, Container} from 'react-bootstrap';
import { BsDash, BsPlus  } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
const CartContainer = () => {
  const Navigate = useNavigate()
  const { cartProducts, onRemoveProduct, onDecreaseQuantity, onIncreaseQuantity } = useContext(CartContext);
  const total = cartProducts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  return (
    <Container className="my-5">
      <h2>Carrito</h2>
      <hr />
      {cartProducts.length === 0 ? (
        <div className="text-center">
          <h2>Tu Carrito está vacío!</h2>
          <p>Agrega productos al carrito para continuar.</p>
          <Button onClick={() => Navigate('/')}>Ver Productos</Button>
        </div>
      ) : (
        <div>
          {cartProducts.map((product) => (
            <Row className="my-3" key={product.id}>
              <Col xs={12} sm={3} className="d-flex align-items-center">
                <Image src={product.img} fluid />
              </Col>
              <Col xs={12} sm={3} className="d-flex align-items-center">
                <p className='product-name'>{product.name}</p>
              </Col>
              <Col xs={12} sm={3} className="d-flex align-items-center justify-content-center">
                <Button variant="outline-dark" size="sm" onClick={() => onDecreaseQuantity(product.id)} disabled={product.quantity <= 1}>
                  <BsDash />
                </Button>
                <span className="mx-2">{product.quantity}</span>
                <Button variant="outline-dark" size="sm" onClick={() => onIncreaseQuantity(product.id)}>
                  <BsPlus />
                </Button>
              </Col>
              <Col xs={6} sm={3} className="d-flex align-items-center justify-content-end">
                <p className='product-price'>{product.price * product.quantity}$</p>
              </Col>
              <Col xs={6} sm={12} className="d-flex align-items-center justify-content-end mt-3">
                <Button variant="outline-danger" size="sm" onClick={() => onRemoveProduct(product.id)}>
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Row>
            <Col xs={12} sm={6} className="text-center text-sm-left">
              <h5>Total: {total}$</h5>
            </Col>
            <Col xs={12} sm={6} className="text-center text-sm-right">
              <Button as={Link} to="/check-out" variant="primary" >Checkout</Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
  
  };

export default CartContainer;