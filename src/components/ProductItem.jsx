import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import productsJSON from '../products.json'
import {useNavigate } from 'react-router-dom';

const ProductItem = ({name,price,img,id,setCartProducts,cartProducts}) => {
    const navigate = useNavigate()

    const onAddToCart = (productId) => {
       let productToCart = productsJSON.products.find(e => e.id === productId)
       productToCart.quantity = 1
       if (cartProducts.find(e => e.id === productId) ) {
          const products =  cartProducts.map(e => e.id === productId ? {...e,quantity: e.quantity + 1} : e)
         return setCartProducts([...products])
       }

      setCartProducts([...cartProducts, productToCart])    
    }


    return (
        <Card className='cardStyle'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {price} $
                </Card.Text>

                <Button variant="primary" onClick={() => onAddToCart(id)}>Add To Cart</Button>
                {' '}
                <Button variant="primary" onClick={() => {navigate(`/item/${id}`)}}>ver detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductItem