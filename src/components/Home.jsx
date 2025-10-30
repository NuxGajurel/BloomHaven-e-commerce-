import React from "react";
import Flower from "../../public/Img/mero.jpg";
import Two from "../../public/Img/6.jpg";
import Three from "../../public/Img/3.jpg";
import Four from "../../public/Img/7.jpg";
import { Link } from "react-router-dom";
import Yup from "../../public/Img/yup.png";
import Services from "../../public/Img/services1.jpg";
import Services2 from "../../public/Img/services2.jpg";
import Services3 from "../../public/Img/services3.jpg";

const Home = () => {
  const flowerProducts = [
    { id: 1, url: Flower },
    { id: 2, url: Two },
    { id: 3, url: Three },
    { id: 4, url: Four },
  ];

  const OurServices = [
    {
      id: 1,
      image: Services,
    },
    {
      id: 2,
      image: Services2,
    },
    {
      id: 3,
      image: Services3,
    },
  ];

  return (
    <div className="mt-2">
      <h1 className="lg:text-4xl text-3xl mt-7 m-6 flex">OUR PRODUCTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-6">
        {flowerProducts.map((flowerProduct) => (
          <Link to="/product">
            <div
              key={flowerProduct.id}
              className="rounded p-1 bg-white shadow-md items-center flex justify-center "
            >
              <img
                src={flowerProduct.url}
                alt={`Flower ${flowerProduct.id}`}
                className="lg:w-full lg:h-100 lg:object-cover h-90 relative w-full rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
      <h1 className="lg:text-4xl text-2xl mt-9 m-6 flex justify-center items-center">
        🌿 How Our Products Are Made
      </h1>
      <div className="lg:flex lg:justify-between mt-8 bg-gray-100 shadow-md">
        <div className="mt-3">
          <img src={Yup} alt="" />
        </div>
        <div className="mt-22 mr-8 gap-3 ml-6">
          <li>
            Selection of Fresh Flowers – We handpick the freshest, locally
            sourced flowers from trusted farms every morning.
          </li>
          <li>
            Eco-Friendly Materials – All wrapping papers, ribbons, and packaging
            materials are 100% biodegradable and eco-friendly.
          </li>
          <li>
            Design & Arrangement – Our floral experts craft each bouquet with
            creativity and care to match your chosen theme or occasion.
          </li>
          <li>
            Quality Check – Every arrangement is inspected to ensure freshness,
            balance, and presentation before packaging.
          </li>
          <li>
            Sustainable Packaging – We use recycled kraft paper and natural
            twine to wrap each bouquet beautifully and responsibly.
          </li>
          <li>
            Personal Touch – Optionally, a handwritten note or custom message is
            added for a heartfelt delivery.
          </li>
          <li>
            Safe Delivery – Flowers are kept in temperature-controlled packaging
            to stay fresh until they reach your doorstep.
          </li>
          <li>
            Locally Crafted Vases – Our vases are made by local artisans using
            sustainable clay and glass materials.
          </li>
          <li>
            Natural Fragrance Only – We never use artificial scents; every aroma
            comes naturally from fresh blooms.
          </li>
          <li>
            Continuous Care Tips – Each order includes simple flower-care
            instructions to help your blooms last longer.
          </li>
          <Link to="/product">
            <button className="bg-[#1D1D1F] hover:bg-[#333333] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 lg:mt-8 mt-2 hidden sm:block">
              View Products
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-3xl mt-7 flex justify-center items-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
          {OurServices.map((OurService) => (
            <div
              key={OurService.id}
              className="rounded p-1 bg-white shadow-md items-center flex justify-center hover:border"
            >
              <img
                src={OurService.image}
                alt={`Service ${OurService.id}`}
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
