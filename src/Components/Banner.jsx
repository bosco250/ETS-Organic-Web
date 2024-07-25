import React from "react";
import Fruit from "../assets/fruit.png";
import Vegetable from "../assets/vegetable.png";

const Banner = () => {
  return (
    <div
      className="flex flex-col sm:flex-row  gap-4 md:m-10  lg:my-20 lg:mx-[150px]
      m-4"
    >
      <div
        style={{
          backgroundImage: `url(${Fruit})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full min-h-[200px] rounded-xl relative"
      >
        <div className=" absolute top-9 left-5 w-[200px]">
          <p className=" font-yellow font[500] text-[35px] leading-10 text-[#FFFFFF]">
            Natural
          </p>
          <p className=" font-roboto font-[700] text-[30px] leading-10 text-[#FFFFFF]">
            Get Garden Fresh Fruits
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Vegetable})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" w-full h-[200px] rounded-xl relative"
      >
        <div className="absolute top-9 md:left-5 w-[200px]">
          <p className=" font-yellow font[500] text-[35px] leading-10 text-[#7EB693]">
            Offer!!
          </p>
          <p className=" font-roboto font-[700] text-[30px] leading-10 text-[#274C5B]">
            Get 10% off
            <br /> on Vegetables
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
