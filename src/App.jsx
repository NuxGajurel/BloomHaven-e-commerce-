import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          cartItems={cartItems}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <Product cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/check" element={<Checkout />} />
        </Routes>

        <hr className="mt-4 border border-gray-200" />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
