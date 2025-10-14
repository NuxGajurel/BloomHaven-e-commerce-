import React from "react";
import Flower from "../../public/Img/mero.jpg";
import Two from "../../public/Img/6.jpg";
import Three from "../../public/Img/3.jpg";
import Four from "../../public/Img/7.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const flowerProducts = [
    { id: 1, url: Flower },
    { id: 2, url: Two },
    { id: 3, url: Three },
    { id: 4, url: Four },
  ];

  return (
    <div className="mt-2">
      <h1 className="lg:text-4xl text-3xl mt-7 m-6">OUR PRODUCTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-6">
        {flowerProducts.map((flowerProduct) => (
          <Link to="/products">
            <div
              key={flowerProduct.id}
              className="rounded p-1 bg-white shadow-md items-center flex justify-center hover:border "
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
    </div>
  );
};

export default Home;
