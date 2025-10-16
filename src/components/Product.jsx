import React from 'react'
import One from '../../public/Img/4.jpg'

const Product = () => {
  const products=[
    {
      id:1,
      name:"Mero Flower ho",
      price:100000,
      color:[
        {
          name:"Gray",
        image:One
        },{
          name:"black",
          image:One
        },
      ],
      size:["M","L","XL"],
      description:"sunflower from biratchowk ko shop bata"
    },
    {
      id:2,
      name:"Mero Flower ho",
      price:100000,
      color:[
        {
          name:"Gray",
        image:One
        },{
          name:"black",
          image:One
        },
      ],
      size:["M","L","XL"],
      description:"sunflower from biratchowk ko shop bata"
    },
    
  ]
  return (
    <div className='px-8 lg:px-20 py-10'>
      <h1>All Products</h1>
      <div>
        {
          products.map((product)=>{
       <div key={product.id}>
        <img src={product.image} alt="" />
        <h1>{product.price}</h1>
        </div>
          })
        }
      </div>

    </div>
  )
}

export default Product