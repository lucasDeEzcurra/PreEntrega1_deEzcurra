import { BsCart } from "react-icons/bs"
import cart from '../cart.json'
import { useState } from "react"

const CartWidget = () => {
    const [cartProducts, setCartProducts] = useState(cart.products)

    return (
        <div>
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                 {cartProducts.length > 0 &&
                    <div className="cart-item-count">{cartProducts.length}</div>
                 } 
            </div>
            <BsCart/>
        </div>
    )
}

export default CartWidget