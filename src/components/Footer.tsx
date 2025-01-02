import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary p-6 ">
      {/* Grid layout for footer sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-y-5">
        {/* Menu Section */}
        <div className="space-y-2">
          <h2 className="text-2xl mb-2 font-serif font-semibold">Menu</h2>
          <p className="text-lg">New arrivals</p>
          <p className="text-lg">Best sellers</p>
          <p className="text-lg">Recently viewed</p>
          <p className="text-lg">Popular this week</p>
          <p className="text-lg">All products</p>
        </div>

        {/* Categories Section */}
        <div className="space-y-2 ">
          <h2 className="text-2xl  mb-2 font-serif font-semibold">Categories</h2>
          <p className="text-lg">Bags</p>
          <p className="text-lg">Shirts</p>
          <p className="text-lg">Laptop Bags</p>
          <p className="text-lg">Accessories</p>
          <p className="text-lg">Smartwatches</p>
        
        </div>

        {/* Our Company Section */}
        <div className="space-y-2">
          <h2 className="text-2xl  mb-2 font-serif font-semibold">Our company</h2>
          <p className="text-lg ">About us</p>
          <p className="text-lg ">Vacancies</p>
          <p className="text-lg ">Contact us</p>
          <p className="text-lg">Privacy</p>
          <p className="text-lg ">Returns policy</p>
        </div>

        {/* Mailing List Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl  mb-2 font-serif font-semibold">Join our mailing list</h2>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="your@email.com"
              className="p-3 rounded-l-md border border-gray-400 text-pink-200 focus:outline-none w-full bg-pink-200"
            />
            <button className="p-3 rounded-r-md bg-black  text-white focus:outline-none w-[118px]">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="border border-black my-6" />
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <p className="text-lg mb-5 font-serif">
          &copy; 2025 Ayesha Iqbal Ecommerce Project. All rights reserved.
        </p>
        <div className="flex  gap-4 text-2xl ">
          <FaLinkedin />
          <FaFacebookSquare />
          <FaInstagram />
          <FaSkype />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;