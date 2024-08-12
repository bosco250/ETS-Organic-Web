import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Log from "../assets/log.png";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className=" md:fixed md:w-full top-0 left-0 bg-white z-10
    py-[30px] px-[50px] md:flex items-center justify-center
    "
    >
      <div className=" md:flex md:flex-row gap-10 justify-between items-center w-full hidden">
        <div className="flex md:flex-row flex-1 justify-between items-center md:gap-[100px] ">
          <div className="flex justify-center items-center">
            <img className="w-8 h-10 object-fill" src={Log} alt="" />
            <h1 className=" font-roboto leading-10 font-bold text-[#274C5B] text-[38px]">
              Organick
            </h1>
          </div>
          <div className="">
            <ul
              className="nav-items font-roboto flex md:flex-row list-none text-[20px]
            gap-[35px] justify-center items-center font-bold text-[#274C5B] leading-6 "
            >
              <li className=" cursor-pointer">Home</li>
              <li className=" cursor-pointer">About</li>
              <li className=" cursor-pointer">Pages</li>
              <li className=" cursor-pointer">
                Shop
                <ul className=""></ul>
              </li>
              <li className=" cursor-pointer">Projects</li>
              <li className=" cursor-pointer">News</li>
            </ul>
          </div>
        </div>
        <div className=" flex mdflex-row items-center gap-5">
          <div className=" flex flex-row">
            <input className="border-none rounded-[30px] h-8" type="text" />
            <div
              className="bg-[#7EB693] flex justify-center items-center rounded-full
           w-7 h-7 ml-[-30px] mt-[2px]"
            >
              <IoSearch className="text-white" />
            </div>
          </div>
          <div className="flex items-center gap-4 font-roboto ">
            <div className="bg-[#274C5B] flex justify-center items-center rounded-full w-6 h-6">
              <FaCartShopping className="text-white" />
            </div>
            <h2 className=" text-[#274C5B]">Cart(0)</h2>
          </div>
        </div>
      </div>
      {/* For Mobile navBar */}
      <div
        className="flex flex-row md:hidden fixed top-0 left-0
      justify-between items-center h-24 z-10 w-full px-5 bg-white"
      >
        <div className="flex justify-center items-center">
          <img className="w-8 h-10 object-fill" src={Log} alt="" />
          <h1 className=" font-roboto leading-10 font-bold text-[#274C5B] text-[38px]">
            Organick
          </h1>
        </div>
        <div className="flex gap-6">
          <div
            className="bg-[#7EB693] flex justify-center items-center rounded-full
           w-8 h-8 "
          >
            <IoSearch className="text-white w-7 h-6" />
          </div>
          <button onClick={toggleIsOpen} className="">
            {isOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* mobile items */}
      <div
        className={`fixed bg-white z-10 h-full py-7 top-24 left-0
            ${
              isOpen ? " w-full transition-all ease-out duration-500" : "hidden"
            } `}
      >
        <ul
          className={`nav-items font-roboto flex flex-col list-none text-[20px]
            gap-[25px] justify-center  px-6 font-bold text-[#274C5B] leading-6 
            `}
        >
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About</li>
          <li className=" cursor-pointer">Pages</li>
          <li className=" cursor-pointer">Shop </li>
          <li className=" cursor-pointer">Projects</li>
          <li className=" cursor-pointer">News</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
