import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';

const CartContainer = ({ cartProducts, total, onRemoveProduct, onDecreaseQuantity}) => {
    return (
        <div className="cart-items">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Nombre</th>
                <th>Precio</th>
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
    );
  };

export default CartContainer;