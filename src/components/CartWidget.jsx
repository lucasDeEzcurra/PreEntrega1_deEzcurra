import CartContainer from "./CartContainer";
import { BsCart } from "react-icons/bs"

const CartWidget = ({cartProducts,total,hidden,setHidden}) => {
    console.log(cartProducts);
    const onHidden = () => {
        setHidden(!hidden)
    }
    return (
        <div>
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                 {cartProducts.length > 0 &&
                    <div className="cart-item-count">{cartProducts.length}</div>
                 } 
            </div>
            <BsCart onClick={() => onHidden()}/>   
             
        </div>
    )
}

export default CartWidget