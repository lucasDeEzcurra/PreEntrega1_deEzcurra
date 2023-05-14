import React, { useContext } from 'react';
import { Button, Col, Row,Card, Table, ListGroup,Image, Container} from 'react-bootstrap';
import { BsTrash,BsDash, BsPlus  } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import '../App.css'

const CartContainer = () => {
  
  const { cartProducts, onRemoveProduct, onDecreaseQuantity, onIncreaseQuantity } = useContext(CartContext);

  const total = cartProducts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  return (
    <Container className="my-5">
    <h2>Carrito</h2>
    <hr />
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
          <Button variant="primary">Checkout</Button>
        </Col>
    </Row>
  </Container>
  );
  };

export default CartContainer;