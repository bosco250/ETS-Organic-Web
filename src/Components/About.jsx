import React from "react";
import AboutImg from "../assets/aboutus.png";
import Organic from "../assets/organic.png";
import QualityImg from "../assets/quality.png";
import { TiArrowRight } from "react-icons/ti";

const About = () => {
  return (
    <div className="p-10 flex flex-col md:flex-row">
      <div className="w-full">
        <img src={AboutImg} alt="" className=" w-full" />
      </div>
      <div className="w-full mt-10">
        <div className="">
          <h2 className="font-yellow font-[400] text-[30px] text-[#7EB693]">
            About Us
          </h2>
          <h1 className="font-roboto w-3/4 text-[#274C5B] font-[700] text-[35px] leading-10">
            We Believe in Working Accredited Farmers
          </h1>
          <p className=" font-[400] w-5/6 text-[#525C60] text-[15px] mt-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className=" mt-5">
          <div className="flex flex-row gap-5 justify-center items-center mt-2">
            <div>
              <img src={Organic} alt="" className=" w-8 h-8" />
            </div>
            <div>
              <h1 className="text-[#274C5B] font-roboto font-[700] text-[20px] leading-6">
                Organic Foods Only
              </h1>
              <p className="font-sans text-[#525C60] font-[400] w-3/4 leading-6 texxt-[15px] ">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center mt-5">
            <div>
              <img src={QualityImg} alt="" className=" w-8 h-8" />
            </div>
            <div>
              <h1 className="text-[#274C5B] font-roboto font-[700] text-[20px] leading-6">
                Quality Standards
              </h1>
              <p className="font-sans text-[#525C60] font-[400] w-3/4 leading-6 texxt-[15px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-10 ">
          <button className="bg-[#274C5B] rounded-[16px] p-5 text-white flex flex-row justify-center items-center gap-3 ">
            Shop Now
            <TiArrowRight className=" bg-[#335B6B] rounded-full text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
