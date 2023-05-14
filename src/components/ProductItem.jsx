import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductItem = ({name,price,img,id}) => {
    const navigate = useNavigate()

    const {onAddToCart} = useContext(CartContext)
    

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