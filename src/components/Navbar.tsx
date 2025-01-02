"use client";
import React from "react";
import Link from "next/link";

import { useState } from "react";
import {
  FaCartArrowDown,
  FaHeart,
  FaUser,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <header className="max-w-7xl justify-between  mx-auto flex p-4 bg-primary">
      <button
        onClick={toggleMenu}
        className="text-xl md:text-2xl  sm:block md:block lg:hidden"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif">
        Elite Attire
      </h1>

      <nav className="hidden md:hidden lg:block justify-center p-3">
        <div className="flex gap-4">
          <ul className="flex gap-4 font-serif">
            <li className=" underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className=" hover:underline">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className=" hover:underline">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className=" hover:underline">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
          </ul>

          <div className="flex gap-2">
            <Link href={"/contact"}>
              <FaUser size={20} className="hover:bg-primary" />
            </Link>

            <Link href={"/products"}>
              <FaHeart size={20} className="hover:bg-primary" />
            </Link>
            <Link href={"/cart"}>
              <FaCartArrowDown size={20} className="hover:bg-primary" />
            </Link>
          </div>
        </div>
      </nav>

      {isOpen && (
        <nav className="absolute w-[60%] mt-10 p-4 h-full bg-slate-400 justify-end rounded-lg">
          <ul className="mt-10 flex flex-col gap-4  font-serif justify-center">
            <li className="text-primary underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="hover:text-primary hover:underline">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="flex gap-2 lg:hidden justify-center py-2">
        <Link href={"/contact"}>
          <FaUser size={20} className="hover:text-primary" />
        </Link>

        <Link href={"/products"}>
          <FaHeart size={20} className="hover:text-primary" />
        </Link>
        <Link href={"/cart"}>
          <FaCartArrowDown size={20} className="hover:text-primary" />
        </Link>
      </div>
    
    </header>
    <hr className="border" />
    </>
  );
};

export default Navbar;