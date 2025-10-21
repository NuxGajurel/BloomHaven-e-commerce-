import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../public/Img/logo.png";
import { RxCross1 } from "react-icons/rx";
import Cart from "../../public/Img/cart.jpg";

const Navbar = ({ cartItems = [], increaseQty, decreaseQty, removeItem }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        <div>
          <h4>
            <IoSearchOutline
              size={22}
              onClick={() => setOpenSearchBar(!openSearchBar)}
            />
          </h4>
          <div
            className={`${
              openSearchBar ? "block" : "hidden"
            } pb-5 fixed top-2 right-0 w-full bg-white shadow-lg transform transition-transform duration-200 z-20 flex justify-center h-22`}
          >
            <div className="grid grid-cols-2 space-x-0 mt-5">
              <input
                type="search"
                className="lg:flex lg:justify-center lg:w-150 border border-pink-600 hover:border-pink-600 lg:h-10 h-8 mt-3 sm:w-58 flex justify-center items-center ml-3 w-55"
                placeholder="Type here to search....."
              />
              <button onClick={() => setOpenSearchBar(false)} size={50}>
                close
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-8 text-gray-700 ">
            <Link to="/home" className="text-2xl font-bold text-pink-600">
              <img src={Logo} alt="" className="h-12 lg:h-15" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <MdOutlineShoppingCart
            size={23}
            onClick={() => setOpenAdd(!openAdd)}
          />
        </div>
      </nav>
      <hr className="boader border-gray-200" />

      <div className="flex justify-center space-x-5 mt-5">
        <Link
          to="/home"
          className="hover:text-pink-600 transition-colors text-black"
        >
          Home
        </Link>
        <Link to="/product" className="hover:text-pink-600 transition-colors">
          Product
        </Link>
        <Link to="/about" className="hover:text-pink-600 transition-colors">
          About
        </Link>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-200 z-20 ${
          openAdd ? "translate-xl" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2>Your Card</h2>

          <button onClick={() => setOpenAdd(false)} className="text-gray">
            <RxCross1 />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div
            className="mt-65 ml-24 h-full"
            onClick={() => setOpenAdd(!openAdd)}
          >
            <div className="h-30 w-30">
              <img src={Cart} alt="" />
            </div>

            <Link to="/product">
              <button className="bg-[#1D1D1F] hover:bg-[#333333] text-white font-medium py-2 px-6 rounded-full transition-all duration-300">
                Start Shoping
              </button>
            </Link>
          </div>
        ) : (
          <div className="p-5 space-x-4 overflow-y-auto h-[80%]">
            {cartItems.map((item) => (
              <div
                className="flex items-center justify-between border-b pb-3"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 ml-3">
                  <h3 className="font-medium"> {item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Rs.{item.price}* {item.qty}
                  </p>
                  <p className="">Rs.{item.price * item.qty}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>

                    <span>{item.qty}</span>
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 bg-gray-300 rounded hover:bg-gray-200"
                    >
                      -
                    </button>
                    <button
                      className=" text-red-500 hover:text-red-700 ml-2"
                      onClick={() => removeItem(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length > 0 && (
              <div className="p-5 border-t">
                <h3 className="text-lg font-semibold text-right">
                  Total: Rs. {total.toLocaleString()}
                </h3>

                <Link to="/check">
                  {" "}
                  <button
                    className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md"
                    onClick={() => setOpenAdd(!openAdd)}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
