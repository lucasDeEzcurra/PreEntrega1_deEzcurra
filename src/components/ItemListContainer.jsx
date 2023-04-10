import { Row, Col, Container } from 'react-bootstrap';
import ProductItem from "./ProductItem"

let products = [
    {
      name: 'Camionero',
      price: 2500,
      change: 'ARS',
      img: '/producto5.png',
      id: 1,
    },
    {
      name: 'Camionero Black',
      price: 2000,
      change: 'ARS',
      img: '/producto6.png',
      id: 2,
    },
    {
      name: 'Camionero Brown',
      price: 2700,
      change: 'ARS',
      img: '/producto7.png',
      id: 3,
    },
    {
      name: 'Torpedo Delux',
      price: 10000,
      change: 'ARS',
      img: '/producto8.png',
      id: 4,
    },
    {
      name: 'Torpedo',
      price: 3500,
      change: 'ARS',
      img: '/producto9.png',
      id: 5,
    },
    {
      name: 'Imperial',
      price: 7500,
      change: 'ARS',
      img: '/producto1.png',
      id: 6,
    },
    {
      name: 'Imperial Premium',
      price: 12500,
      change: 'ARS',
      img: '/producto2.png',
      id: 7,
    },
    {
      name: 'Torpedo Cuero',
      price: 5500,
      change: 'ARS',
      img: '/producto3.png',
      id: 8,
    },
  ]

const ItemListContainer = () => {
    return (
        <Container className='mb-5'>
            <Row xs={1} md={2} lg={3}>
            {products.map((product) => (
                    <Col key={product.id} align='center'>
                        <ProductItem name={product.name} img={product.img} price={product.price}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ItemListContainer