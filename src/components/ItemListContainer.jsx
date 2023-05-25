import { Row, Col, Container } from 'react-bootstrap'
import ProductItem from './ProductItem'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useNavigate, useParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { useEffect , useState} from 'react'
import { db } from '../services/db'
import LoadingSpinner from './LoadingSpinner'

const ItemListContainer = () => {

  const [products,setProducts] = useState({});
  const {categoryId} = useParams();
  const navigate = useNavigate();

  useEffect(()=> { 
    const productsDb = categoryId === undefined ? collection(db,'items') : query(collection(db,'items'), where('categorie', '==', categoryId ))
    getDocs(productsDb) 
    .then(data => {
      const products = data.docs.map(doc=> ({id: doc.id, ...doc.data()}))
      setProducts(products)
    })
  },[categoryId])

  return (
    <Container className="mb-5">
      { products.length > 0 ?
      <Container>
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
        {
        products.map((product) => {
            return (
              <Col key={product.id} align="center">
                <ProductItem
                  categorie={product.categorie}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  id={product.id}
                />
              </Col>
            )
        }) }
      </Row>
      </Container>
      : <LoadingSpinner text={'Cargando Productos...'}></LoadingSpinner> }
    </Container>
  )
}

export default ItemListContainer
