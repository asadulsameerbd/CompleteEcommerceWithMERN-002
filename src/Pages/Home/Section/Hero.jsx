import React from "react";
import heroImg from "../../../assets/rabbit-hero.webp";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={heroImg}
        className="w-full h-62.5 md:h-122.5 lg:[750px] object-cover"
        alt=""
      />
      <div className="absolute inset-0  bg-black/40  py-5  flex justify-center items-center ">
        <div className="text-white text-center py-10">
          <h1 className="text-2xl md:text-5xl lg:text-7xl uppercase text-white text-center  font-bold">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm md:text-lg tracking-tighter pt-3 pb-5">
            Explore our Vacation-Ready Outfit with fast Worldwide shippings
          </p>

          <Link
            to="#"
            className="btn text-white bg-primary hover:bg-btn transition-all duration-150 px-6 py-2 mt-5  rounded-sm text-sm md:text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
