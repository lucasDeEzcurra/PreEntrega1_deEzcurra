import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [hidden, setHidden] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
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
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
