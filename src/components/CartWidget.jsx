import { useContext } from "react"
import { BsCart } from "react-icons/bs"
import { CartContext } from "../context/CartContext"


const CartWidget = () => {

    const {cartProducts}  = useContext(CartContext)
    let count = 0
    cartProducts.map(e=> count += e.quantity)
    return (
        <div>
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                 {cartProducts.length > 0 &&
                    <div className="cart-item-count">{count}</div>
                 } 
            </div>
            <BsCart/>
        </div>
    )
}

export default CartWidget