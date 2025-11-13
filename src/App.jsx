import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import FlowerPage from './pages/FlowerPage';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  // Состояние корзины
  const [cartItems, setCartItems] = useState([]);

  // Функция добавления в корзину
  const addToCart = (flower) => {
    setCartItems((prev) => [...prev, flower]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/flower/:id"
          element={<FlowerPage addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
