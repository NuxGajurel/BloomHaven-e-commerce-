import React from 'react'
import Flower from '../../public/Img/mero.jpg'
const Home = () => {

  const flowerProducts =[
    {
      id:1 , name:"sunFlower" , price:1100 , inStock:true , describe :"This is a sun flower flower from kathmandu patan.",url:Flower ,

    },
    {
      id:2 , name:"sunFlower" , price:1100 , inStock:true , describe :"This is a sun flower flower from kathmandu patan.",url:Flower ,

    },
    {
      id:3 , name:"sunFlower" , price:1100 , inStock:true , describe :"This is a sun flower flower from kathmandu patan.",url:Flower ,

    },
      {
      id:4 , name:"sunFlower" , price:1100 , inStock:true , describe :"This is a sun flower flower from kathmandu patan.",url:Flower ,

    },
  ]

  return (
    <div>
  <div className='mt-2'>

  <div>
{
  flowerProducts.map((flowerProduct)=>(
    <div className='grid grid-cols-3 shadow-md bg-white'> 
      <div className='flex flex-col col-4 space-x-5 mt-4' key={flowerProduct.id}>
        <img src={flowerProduct.url} alt=""  className='h-100 w-100'/>
        <h3 className='text-2xl'>{flowerProduct.price}</h3>
        <p>{flowerProduct.describe}</p>

      </div>
    </div>
  ))
}
  
  
  </div>
 
  </div>
      
    </div>
  )
}

export default Home