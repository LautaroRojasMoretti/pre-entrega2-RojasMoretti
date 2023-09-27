import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from "./components/categories/Categories";
import ProductList from "./components/products/ProductList";
import CategoriesProductList from "./components/categories/CategoriesProductList";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/CartContext/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </CartProvider>
    
  );
}

export default App;
