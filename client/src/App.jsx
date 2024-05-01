// import Header from '../components/Header'
import Header from "./components/Header/Header";
import Carsousel from "./components/carousel/Carsousel";
import Category from "./components/catagory/category";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Carsousel />
        <Category />
      </div>
    </>
  );
}

export default App;
