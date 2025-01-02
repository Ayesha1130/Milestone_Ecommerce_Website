import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="flex bg-cover h-screen bg-center justify-center items-center font-serif "
      style={{ backgroundImage: "url(/images/bg4.jpg)" }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Welcome to Our Store
        </h1>
        <p className=" text-xl mt-3">
          Discover our new line of high-quality attire made with the finest
          materials.
          <br />
          Our selection is curated to cater to all your fashion needs.
        </p>
        <Link href={"/products"}>
          <button className="px-10 py-3 bg-primary rounded-lg hover:scale-105 mt-3 ">
            Explore Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;