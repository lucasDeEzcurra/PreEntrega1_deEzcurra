import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { FaMoneyBillAlt, FaArrowLeft } from 'react-icons/fa';
import productsJSON from '../products.json';

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const product = productsJSON.products.find(p => p.id === parseInt(productId));
    const navigate = useNavigate()
    return (
      <Container className="my-5 py-5 bg-white rounded shadow-lg">
        <Row>
          <Col md={6}>
            <Image src={product.img} fluid />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2>{product.name}</h2>
            <h3>
              <Badge pill variant="success">
                {product.price} {product.change}
              </Badge>
              {' '}
              <FaMoneyBillAlt />
            </h3>
            <p>{product.description}</p>
            <Button variant="primary">Agregar al carrito</Button>
            <Button variant="light" className="ml-3" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Volver
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };

export default ItemDetailContainer;
