import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const flowerProducts = [
    { id: 1, url: "/Img/mero.jpg" },
    { id: 2, url: "/Img/6.jpg" },
    { id: 3, url: "/Img/3.jpg" },
    { id: 4, url: "/Img/7.jpg" },
  ];

  const OurServices = [
    { id: 1, image: "/Img/services1.jpg" },
    { id: 2, image: "/Img/services2.jpg" },
    { id: 3, image: "/Img/services3.jpg" },
  ];

  return (
    <div className="mt-2">
      <h1 className="lg:text-4xl text-3xl mt-7 m-6 flex">OUR PRODUCTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-6">
        {flowerProducts.map((flowerProduct) => (
          <Link to="/product" key={flowerProduct.id}>
            <div className="rounded p-1 bg-white shadow-md items-center flex justify-center hover:border">
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
          <img src="/Img/yup.png" alt="Process" />
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
