import { Row, Col, Container } from 'react-bootstrap'
import ProductItem from './ProductItem'
import productsJSON from '../products.json'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useNavigate, useParams } from 'react-router-dom'

const ItemListContainer = ({cartProducts,setCartProducts, total, setTotal, count, setCount, hidden,onAddToCart}) => {
  const products = productsJSON.products
  const {categoryId} = useParams()
  const navigate = useNavigate()

  return (
    <Container className="mb-5">
      
      <DropdownButton
        className='d-inline'
        variant="secondary"
        id="dropdown-basic-button"
        title="Categories"
      >
        <Dropdown.Item onClick={() => navigate('/')}>Todos</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/category/camionero')}>
          Camioneros
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/category/imperial')}>
          Imperiales
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/category/torpedo')}>
          Torpedos
        </Dropdown.Item>
      </DropdownButton>
      
      <Row xs={1} md={2} lg={3}>
        {products.map((product) => {
          if (categoryId === undefined) {
            return (
              <Col key={product.id} align="center">
                <ProductItem
                  onAddToCart={onAddToCart}
                  setCartProducts={setCartProducts}
                  cartProducts={cartProducts}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  id={product.id}
                />
              </Col>
            )
          } else if (product.categorie === categoryId) {
            return (
              <Col key={product.id} align="center" >
                <ProductItem
                  onAddToCart={onAddToCart}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  id={product.id}
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
