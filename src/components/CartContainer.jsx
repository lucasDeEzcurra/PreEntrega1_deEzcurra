import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';

const CartContainer = ({ cartProducts, total, onRemoveProduct, onDecreaseQuantity, hidden, setHidden}) => {
    console.log(hidden);
    return (
      <div className="cart-container" hidden={hidden} style={{ position: "fixed", top: "60px", right: "0", width: "300px", backgroundColor: "white", border: "1px solid #ccc", borderRadius: "5px", padding: "10px",zIndex: '9999', }}>
        <Button variant="light" className="cart-btn">
          <i className="fa fa-shopping-cart"></i>
        </Button>
        <div className="cart-items">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Qty</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.quantity}</td>
                  <td>{product.name}</td>
                  <td>{product.price} {product.change}</td>
                  <td>
                    <Button variant="danger" onClick={() => onRemoveProduct(product.id)} size="sm">
                      <BsTrash />
                    </Button>
                    {product.quantity > 1 && (
                      <Button variant="warning" onClick={() => onDecreaseQuantity(product.id)} size="sm">
                        -
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col className="text-right">
              <h6>Total: {total} {cartProducts[0]?.change}</h6>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <Button variant="success" size="sm">Buy Now</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

export default CartContainer;