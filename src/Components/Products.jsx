import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import ProductCard from './ProductCard'
import Calabrese from '../assets/calabrese.png'
import Banana from '../assets/banana.png'
import Beans from '../assets/beans.png'
import Brown from '../assets/brown.png'
import Eggs from '../assets/eggs.png'
import Nuts from '../assets/nuts.png'
import Rusk from '../assets/rusk.png'
import Tomato from '../assets/tomato.png'


const Products = () => {
  return (
    <div className="px-5 md:px-12 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className=" font-yellow text-[#7EB693] text-[30px] font-[400] leading-10 ">Category</p>
        <p className="font-roboto text-[40px] font-[700] text-[#274C5B] leading-10">Our Products</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap md:ml-10 my-10 justify-center items-center">
      <ProductCard image={Calabrese} name="Calabrese Broccoli" category="Vegetable" cost="$13.00" />
      <ProductCard image={Banana} name="Fresh Banana Fruites" category="Fresh" cost="$14.00" />
      <ProductCard image={Nuts} name="White Nuts" category="Millets" cost="$15.00" />
      <ProductCard image={Tomato} name="Vegan Red Tomato" category="Vegetable" cost="$17.00" />
      
      <ProductCard image={Beans} name="Mung Bean" category="Health" cost="$11.00" />
      <ProductCard image={Brown} name="Brown Hazelnut" category="Nuts" cost="$12.00" />
      <ProductCard image={Eggs} name="Eggs" category="Fresh" cost="$17.00" />
      <ProductCard image={Rusk} name="Zelco Suji Elaichi Rusk" category="Fresh" cost="$15.00" />
      </div>
      <div className=" flex justify-center items-center md:my-16">
          <button className="bg-[#274C5B] rounded-[16px] p-4 text-white flex flex-row justify-center items-center gap-3 ">
            Shop Now
            <TiArrowRight className=" bg-[#335B6B] rounded-full text-white" />
          </button>
        </div>

    </div>
  )
}

export default Products
