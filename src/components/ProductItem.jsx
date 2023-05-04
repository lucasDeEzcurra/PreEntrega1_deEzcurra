import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import productsJSON from '../products.json'
import {useNavigate } from 'react-router-dom';

const ProductItem = ({name,price,img,id,setCartProducts,cartProducts,onAddToCart}) => {
    const navigate = useNavigate()

    

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