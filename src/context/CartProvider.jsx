import React, { useState } from 'react'
import { CartContext } from './CartContext'
import productsJSON from "../products.json";


export const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    const [count, setCount] = useState(0);

    const onAddToCart = (productId) => {
        let productToCart = productsJSON.products.find((e) => e.id === productId);
        productToCart.quantity = 1;
        if (cartProducts.find((e) => e.id === productId)) {
          const products = cartProducts.map((e) =>
            e.id === productId ? { ...e, quantity: e.quantity + 1 } : e
          );
          return setCartProducts([...products]);
        }
    
        setCartProducts([...cartProducts, productToCart]);
      };

      const onRemoveProduct = (productId) => {
        const newCart = cartProducts.filter((p) => p.id !== productId);
        setCartProducts(newCart);
      };

      const onDecreaseQuantity = (productId) => {
        let newArray = cartProducts.map((p) => {
          if (p.id === productId) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        });
        setCartProducts(newArray);
      };
      const onIncreaseQuantity = (productId) => {
        let newArray = cartProducts.map((p) => {
          if (p.id === productId) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
        setCartProducts(newArray);
      };
    


  return (
        <CartContext.Provider value={{cartProducts,count,setCount,onAddToCart,onRemoveProduct,onDecreaseQuantity,onIncreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
  
}
