import { Row, Col, Container } from 'react-bootstrap'
import ProductItem from './ProductItem'
import productsJSON from '../products.json'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState(productsJSON.products)
  const [categorie, setCategorie] = useState('all')

  return (
    <Container className="mb-5">
      <DropdownButton
        className='d-inline'
        variant="secondary"
        id="dropdown-basic-button"
        title="Categories"
      >
        <Dropdown.Item onClick={() => setCategorie('all')}>Todos</Dropdown.Item>
        <Dropdown.Item onClick={() => setCategorie('camionero')}>
          Camioneros
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setCategorie('imperial')}>
          Imperiales
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setCategorie('torpedo')}>
          Torpedos
        </Dropdown.Item>
      </DropdownButton>
      <h4 className='d-inline m-5 '>{greeting}</h4>
      <Row xs={1} md={2} lg={3}>
        {products.map((product) => {
          if (categorie === 'all') {
            return (
              <Col key={product.id} align="center">
                <ProductItem
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
              </Col>
            )
          } else if (product.categorie === categorie) {
            return (
              <Col key={product.id} align="center">
                <ProductItem
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
              </Col>
            )
          }
          return ''
        })}
      </Row>
    </Container>
  )
}

export default ItemListContainer
