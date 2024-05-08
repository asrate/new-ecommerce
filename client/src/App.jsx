// import Header from '../components/Header'
import Header from "./components/Header/Header";
import Carsousel from "./components/carousel/Carsousel";
import Category from "./components/catagory/category";
import "./App.css";
import Product from "./components/products/Product";
import Ashewa from "./components/products/ProductList"
import Murade from "./components/products/murade";

function App() {
  return (
    <>
      <div>
        <Header />
        <Carsousel />
        <Category />
        <Product />
        <Ashewa />
        <Murade/>
      </div>
    </>
  );
}

export default App;
