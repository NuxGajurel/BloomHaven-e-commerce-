import React from "react";
import Main from "../../public/Img/main.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-row lg:items-start space-y-3 mb-6 lg:mb-0 space-x-10 m-3">
        <div>
          <img src={Main} alt="" className="h-47 w-40" />
        </div>

        <div className="grid grid-rows-4 space-x-3 mt-9">
           <h2>Pages</h2>
          <Link
            to="/home"
            className="hover:text-pink-600 transition-colors text-black"
          >
            Home
          </Link>
          <Link to="/product" className="hover:text-pink-600 transition-colors">
            Product
          </Link>
          <Link to="/about" className="hover:text-pink-600 transition-colors">
            About
          </Link>
          <a
            href="https://github.com/NuxGajurel/BloomHaven-e-commerce-"
            className="hover:text-pink-600 transition-colors"
          >
            GitHub Repo
          </a>
        </div>
        <div className="grid grid-rows-4 space-x-3 lg:m-9 mt-2">
          <h2>Connect</h2>
          <a
            href="https://github.com/NuxGajurel"
            className="hover:text-pink-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/nuxgajurel/"
            className="hover:text-pink-600 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/nux-gajurel-355962348/"
            className="hover:text-pink-600 transition-colors"
          >
            Linkedin
          </a>
          <a
            href="nuxgajurel46@gmail.com"
            className="hover:text-pink-600 transition-colors"
          >
            G-mail
          </a>
        </div>
      </div>

      <div className="mt-2 m-3">
        <p className="flex items-center justify-center">
          {" "}
          Made By{" "}
          <a href="https://github.com/NuxGajurel" className="text-blue-500">
            @NuxGajurel
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
