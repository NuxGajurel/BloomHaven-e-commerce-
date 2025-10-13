import React from 'react'
import Flower from '../../public/Img/mero.jpg'
import Two from '../../public/Img/6.jpg'
import Three from '../../public/Img/3.jpg'
import Four from '../../public/Img/7.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  const flowerProducts = [
    { id: 1, url: Flower },
    { id: 2, url: Two },
    { id: 3, url: Three },
    { id: 4, url: Four },
  ];

  return (
    <div className='mt-2'>
      <h1 className='lg:text-4xl text-3xl mt-7 m-4'>OUR PRODUCTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        {flowerProducts.map((flowerProduct) => (
       <Link to="/products">
        <div key={flowerProduct.id} className="rounded p-2 bg-white shadow-md">
            <img src={flowerProduct.url} alt={`Flower ${flowerProduct.id}`} className="w-full h-100 object-cover" />
          </div>

       </Link>  
        ))}
      </div>
    </div>
  )
}

export default Home;
