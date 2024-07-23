import React from "react";
import backImage from "../assets/Image.png";
import ImagPartener from "../assets/patterns.png";
import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[600px] w-full mt-[100px] relative"
    >
      <img src={ImagPartener} alt="" className=" w-full h-[580px]" />
      <div
        className="absolute top-[145px] left-[160px] w-[350px]
        flex flex-col gap-5"
      >
        <div className="">
          <p className=" font-yellow font-[400] text-[35px] leading-10 text-[#68A47F]">
            100% Natural food
          </p>
          <h1 className=" font-roboto font-[700] text-[47px] text-[#274C5B]">
            Choose the best healthier way
            <br />
            of life
          </h1>
        </div>
        <div className="">
          <button
            className=" p-5 flex justify-center items-center gap-2
            font-[600] text-[20px] text-[#274C5B] font-roboto leading-6 rounded-xl bg-[#EFD372]"
          >
            Explore Now
            <TiArrowRight className=" bg-[#274C5B] rounded-full text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
