import React from "react";
import Main from "../../public/Img/ahh.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl mt-7 ml-4 text-shadow-2xs">
          
          🌿About BloomHaven
        </h1>

        <div className="">
          <div>
            <p className="mt-6 ml-3 mr-1">
              Welcome to BloomHaven, your one-stop destination for discovering
              beauty, creativity, and comfort in every product. At BloomHaven,
              we believe shopping should be more than just a transaction — it
              should be an experience filled with inspiration and joy. From
              timeless fashion pieces to elegant home essentials, every item in
              our collection is carefully chosen to help you express your unique
              style and elevate your everyday life. Our goal is to make
              high-quality, thoughtfully designed products accessible to
              everyone, while delivering an exceptional online shopping
              experience. We’re passionate about combining modern design,
              trusted quality, and customer satisfaction — because your
              happiness is what makes BloomHaven bloom. 🌸
            </p>
          </div>

          <div className="">
            <div className="flex justify-center items-center">
              <img src={Main} alt="" className="lg:w-340 lg:h-120 mt-8" />
            </div>

            <div className="mt-25 ml-4">
              <h1 className="text-2xl text-shadow-2xs">💚 Our Promise</h1>
              <li className="mt-3 ml-4">
                Trusted quality and authentic designs
              </li>
              <li className="ml-4">
                Smooth, secure, and fast shopping experience
              </li>
              <li className="ml-4">Customer-first support that truly cares</li>
              <li className="ml-4">Smooth, Secure & Fast Experience</li>
              <li className="ml-4">Sustainability & Responsibility</li>
              <li className="ml-4">
                We believe that beauty and responsibility
              </li>
              <div>
                <h1 className="text-2xl text-shadow-2xs mt-6">✨ Our Mission</h1>
                <p className="mt-2">To bring a haven of beautiful, affordable, and sustainable products to people who value quality and creativity.</p>

              </div>

              <div>
               <h2 className="text-2xl text-shadow-2xs mt-6">
                🌸 Trusted Quality & Authentic Designs
               </h2>
               <p className="mt-2"></p>We take pride in offering products that are thoughtfully designed, beautifully made, and built to last.
From elegant home décor to trendy fashion pieces, every product you find at BloomHaven carries our seal of authenticity and craftsmanship.

              </div>

              
              <div className="mt-9 flex justify-center items-center">
                <Link to="/products">
                <button className="bg-[#1D1D1F] hover:bg-[#333333] text-white font-medium py-2 px-6 rounded-full transition-all duration-300">
    Start Shoping
</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
