import React, { useState } from "react";
import logo from "../assets/log.png";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestSquare } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useBackground } from "./CreateContext";

const Footer = () => {
  const [dark, setDark] = useState(false);
  const { setBackGroundColor } = useBackground();

  const handleDark = () => {
    setDark(!dark);
    const newColor = dark ? "white" : "black";
    setBackGroundColor(newColor);
  };

  const textColor = dark ? "text-white" : "";

  return (
    <div className={textColor}>
      <hr className="mt-2" />
      <div className="flex flex-wrap mt-8 items-center justify-center">
        <div className="text-right mr-8">
          <h1 className="text-2xl font-bold m-4">Contact Us</h1>
          <h5>Email</h5>
          <p>dusengimana06@gmail.com</p>
          <h5>Phone</h5>
          <p>0786946188</p>
          <h5>Address</h5>
          <p>Nyamirambo, Nyarugenge, Kigali, Rwanda</p>
        </div>

        <hr className="lg:bg-current h-48 w-[2px] mx-2" />
        <div className="flex items-center justify-center">
          <div className="">
            <div className="cursor-pointer items-center flex m-4">
              <img src={logo} className="w-10 h-10 m-3" alt="Organick Logo" />
              <li className="text-2xl font-bold list-none">Organick</li>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <div className="flex gap-1 mt-5 items-center justify-center">
              <FaInstagram size={30} />
              <MdFacebook size={30} />
              <IoLogoTwitter size={30} />
              <FaPinterestSquare size={30} />
            </div>
          </div>
        </div>

        <hr className="lg:bg-current h-48 w-[2px] mx-2" />
        <div className="ml-8">
          <h1 className="text-2xl font-bold m-4">Utility Pages</h1>
          <p>
            <NavLink to={"/login"}>Log In</NavLink>
          </p>
          <p className="flex items-center cursor-pointer" onClick={handleDark}>
            {dark ? <MdSunny /> : <FaMoon />} Theme{" "}
          </p>
          <p>
            <NavLink to={"/"}>All Products</NavLink>
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center m-4">
        <p>Copy@2024 by Fabrice</p>
      </div>
    </div>
  );
};

export default Footer;
