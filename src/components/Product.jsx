import React, { useState } from "react";
import Three from "../../public/Img/3.jpg";
import Four from "../../public/Img/4.jpg";
import Seven from "../../public/Img/7.jpg";
import Lala from "../../public/Img/lala.jpg";

const Product = ({
  cartItems,
  setCartItems,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  const handleAddtoCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const products = [
    {
      id: 1,
      name: "Sunflower",
      price: 2000,
      image: Three,
    },
    {
      id: 2,
      name: "Sunflower",
      price: 1500,
      image: Four,
    },
    {
      id: 3,
      name: "Lily",
      price: 1800,
      image: Seven,
    },
    {
      id: 4,
      name: "Rose",
      image: Lala,
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">Price: Rs.{product.price}</p>
            <button
              className="bg-[#1D1D1F] hover:bg-[#333333] text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
              onClick={() => handleAddtoCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
