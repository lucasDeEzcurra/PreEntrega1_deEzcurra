import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState, useContext } from "react";
import CartContainer from "./components/CartContainer";
import productsJSON from './products.json'
import { CartProvider } from "./context/CartProvider";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [hidden, setHidden] = useState(true);

  const onAddToCart = (productId) => {
    let productToCart = productsJSON.products.find(e => e.id === productId)
    productToCart.quantity = 1
    if (cartProducts.find(e => e.id === productId) ) {
       const products =  cartProducts.map(e => e.id === productId ? {...e,quantity: e.quantity + 1} : e)
      return setCartProducts([...products])
    }

   setCartProducts([...cartProducts, productToCart])    
 }

  const onRemoveProduct = (productId) => {
   const newCart = cartProducts.filter((p) => p.id !== productId)
    setCartProducts(newCart)
  }
  const onDecreaseQuantity = (productId) => {
    let newArray = cartProducts.map((p) => {
      if (p.id === productId) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setCartProducts(newArray);
  }

  return (
      <BrowserRouter>
        <CartProvider>
        <NavBar
          hidden={hidden}
          setHidden={setHidden}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          count={count}
          setCount={setCount}
          total={total}
          setTotal={setTotal}
        />
        </CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
              onAddToCart={onAddToCart}
                hidden={hidden}
                setHidden={setHidden}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                onAddToCart={onAddToCart}
                hidden={hidden}
                setHidden={setHidden}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/item/:productId"
            element={
              <ItemDetailContainer
                onAddToCart={onAddToCart}
                hidden={hidden}
                setHidden={setHidden}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartContainer
                hidden={hidden}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}
                onRemoveProduct={onRemoveProduct}
                onDecreaseQuantity={onDecreaseQuantity}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;
