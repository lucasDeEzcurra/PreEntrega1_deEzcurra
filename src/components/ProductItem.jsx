import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductItem = ({name,price,img}) => {
    return (
        <Card className='cardStyle'>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {price} $
                </Card.Text>

                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductItem