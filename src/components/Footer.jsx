import React from 'react'
import Main from '../../public/Img/main.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='lg:flex lg:flex-row lg:items-start space-y-3 mb-6 lg:mb-0 space-x-10 m-3'>
        <div>
        <img src={Main} alt="" className='h-40 w-40'/>
        
        </div>

         <div className='grid grid-rows-4 space-x-3 mt-9'>
       <Link to="/home" className="hover:text-pink-600 transition-colors text-black">Home</Link>
        <Link to="/product" className="hover:text-pink-600 transition-colors">Product</Link>
        <Link to="/about" className="hover:text-pink-600 transition-colors">About</Link>
        <a href="https://github.com/NuxGajurel/BloomHaven-e-commerce-">GitHub Repo</a>

      
   
      </div>
       <div className='grid grid-rows-4 space-x-3 lg:m-9 mt-2'>
         <a href="https://github.com/NuxGajurel">GitHub</a>
         <a href="https://www.instagram.com/nuxgajurel/">Instagram</a>
         <a href="https://www.linkedin.com/in/nux-gajurel-355962348/">Linkedin</a>
         <a href="nuxgajurel46@gmail.com">G-mail</a>
         </div>
       
       
        </div>
     
      <div className='mt-2 m-3'>
            <p className='flex items-center justify-center'> Made By  <a href="https://github.com/NuxGajurel" className='text-blue-500'>@NuxGajurel</a></p>
         </div>
    </div>
  )
}

export default Footer