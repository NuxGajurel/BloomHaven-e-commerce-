import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../public/Img/logo.png";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const[openSearchBar , setOpenSearchBar]=useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        {/* search bar */}
        <div>
          <h4>
            <IoSearchOutline size={22} onClick={()=> setOpenSearchBar(!openSearchBar)}/>
          </h4>
<div className={`${openSearchBar ? "block" : "hidden"} pb-5 fixed top-2 right-0 w-full bg-white shadow-lg transform transition-transform duration-200 z-20 flex justify-center h-22`}>
 
 <div className="grid grid-cols-2 space-x-0 mt-5">

<input type="search" className="lg:flex lg:justify-center lg:w-150 border border-pink-600 hover:border-pink-600 lg:h-10 h-8 mt-3 sm:w-58 flex justify-center items-center ml-3 w-55" placeholder="Type here to search....."/>
<button onClick={()=> setOpenSearchBar(false)} size={27} className="">  close</button>
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
      <hr className="bg-white shadow-md" />

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

      {/* Add to card  */}

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
        <div className="flex justify-center items-center h-130">
          <p>Your cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
