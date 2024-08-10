import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <div className="flex flex-col w-[250px] bg-[#F9F8F8]  rounded-xl ">
      <div className="">
        <button className="rounded-md p-1 text-white bg-[#274C5B] ">
          {" "}
          {props.category}
        </button>
      </div>
      <Link
        to={`/detail/${props.id}`}
        state={{
          img: props.image,
          name: props.name,
          exp: props.category,
          price: props.cost,
        }}
      >
        <div className="">
          <img src={props.image} className=" w-full h-[270px]" />
        </div>
        <div className="flex flex-col px-5  rounded-b-xl">
          <p className="font-roboto text-[17px] font-[500] text-[#274C5B]  ">
            {props.name}{" "}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 mt-2">
              <p className=" line-through text-gray-400 text-[14px]">$20.00</p>
              <p className="font-sans font-[600] text-[14px] text-[#274C5B] ">
                {props.cost}
              </p>
            </div>
            <div className=" flex flex-row gap-1 text-white w-1/3">
              <IoIosStar className=" text-orange-500 fill-orange-500" />
              <IoIosStar className=" text-orange-500 fill-orange-500" />
              <IoIosStar className=" text-orange-500 fill-orange-500" />
              <IoIosStar className=" text-orange-500 fill-orange-500" />
              <IoIosStar className=" text-orange-500 fill-orange-500" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
