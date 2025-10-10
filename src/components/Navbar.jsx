import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from '../../public/Img/logo.png'
const Navbar = () => {
  
  return (
    <div>
       
        <nav className="flex items-center justify-between px-8 py-4 bg-white">

  <div>
 <h4><IoSearchOutline size={22}/></h4>
  </div>

 <div className=''>
    <div className="flex gap-8 text-gray-700 ">
    <Link to="/home" className="text-2xl font-bold text-pink-600">
    <img src={Logo} alt="" className='h-12 lg:h-15'/>
    </Link>
 </div>
</div>

<div className=''>
  
    <Link to="/addto" className="hover:text-pink-600 transition-colors"> <MdOutlineShoppingCart size={23}/> </Link>
 
</div>

 
    
  
</nav>
<hr className='bg-white shadow-md'/>



<div className='flex justify-center space-x-5 mt-5'>
  <Link to="/home" className="hover:text-pink-600 transition-colors text-black">Home</Link>
    <Link to="/product" className="hover:text-pink-600 transition-colors">Product</Link>
    <Link to="/about" className="hover:text-pink-600 transition-colors">About</Link>
</div>

    </div>
  )
}

export default Navbar