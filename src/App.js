import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Productos Disponibles !"} />
      <Footer />
    </div>
  );
}

export default App;
