import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
    
      <div className="flex h-[60vh]  justify-center items-center font-serif " style={{background: 'url(/images/ab2.jpg)',backgroundSize: "cover", backgroundPosition: "center" }}>
      
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Elite Attire</h1>
      </div>
      
    
    
    <div className=" h-auto bg-cover flex font-serif flex-col justify-center lg:flex-row items-center p-4 gap-4 py-32 bg-slate-100">
      
        
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 px-4 lg:mb-0 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-semibold">
          Welcome to Elite Attire
        </h1>
        <p className="text-justify text-lg text-gray-500">
          Elite Attire is a premier boutique specializing in high-quality
          clothing, handmade crafts, and custom accessories. Our team of skilled
          designers and craftsmen create stunning pieces that not only look
          amazing but also feel comfortable and stylish. We believe that every
          person deserves to be treated with respect and attention, and that's
          why we strive to create an environment where customers feel valued and
          heard.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/images/bg5.jpg"
          alt="About Us"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg hover:scale-105"
        />
      </div>
    </div>
    </>
    
  );
};

export default About;