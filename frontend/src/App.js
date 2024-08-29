
import './App.css';
import Nav from './Components/Navbar/Nav';
import Products from './Components/Products/Products';
import ProductState from './Context/Product/ProductState';


function App() {
  return (
    <div className="App">
      <ProductState>
        <Nav />
        <Products />
      </ProductState>

    </div>
  );
}

export default App;
