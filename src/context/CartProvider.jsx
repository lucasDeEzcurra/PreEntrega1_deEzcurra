import React from 'react'
import { CartContext } from './CartContext'

const data = {
    nombre: 'MATES ARTESANALES',
    numero: 3
}

export const CartProvider = ({children}) => {
  return (
  
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
  
}
