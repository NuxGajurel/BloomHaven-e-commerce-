import React from 'react'
import Main from '../../public/Img/ahh.jpg'
const About = () => {
  return (
    <div>

     <div className=''>
      <h1 className='text-3xl mt-7 ml-4 text-shadow-2xs'> 🌿About BloomHaven</h1>

      <div className=''>
        <div>
<p className='mt-6 ml-3 mr-1'>
  Welcome to BloomHaven, your one-stop destination for discovering beauty, creativity, and comfort in every product.
At BloomHaven, we believe shopping should be more than just a transaction — it should be an experience filled with inspiration and joy.

From timeless fashion pieces to elegant home essentials, every item in our collection is carefully chosen to help you express your unique style and elevate your everyday life.
Our goal is to make high-quality, thoughtfully designed products accessible to everyone, while delivering an exceptional online shopping experience.

We’re passionate about combining modern design, trusted quality, and customer satisfaction — because your happiness is what makes BloomHaven bloom. 🌸
</p>
        </div>

   <div className=''>
   <div className='flex justify-center items-center'>
    <img src={Main} alt="" className='lg:w-340 lg:h-120 mt-8'/>
  </div>


  <div className='mt-25 ml-4'>
    <h1 className='text-2xl text-shadow-2xs'>💚 Our Promise</h1>
   <li className='mt-3 ml-4'>Trusted quality and authentic designs</li>
   <li className='ml-4'>Smooth, secure, and fast shopping experience</li>
   <li className='ml-4'>Customer-first support that truly cares</li>
   <li className='ml-4'>Smooth, Secure & Fast Experience</li>
   <li className='ml-4'>

 Sustainability & Responsibility</li>
<li className='ml-4'>We believe that beauty and responsibility</li>

  </div>


   </div>


       </div>

  
     </div>







    </div>
  )
}

export default About