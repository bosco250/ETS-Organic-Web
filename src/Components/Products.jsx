import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
import { TiArrowRight } from "react-icons/ti";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8); 
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsArray = [];
        querySnapshot.forEach((doc) => {
          productsArray.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsArray);
        setDisplayedProducts(productsArray.slice(0, visibleCount));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const loadMoreProducts = () => {
    const newVisibleCount = visibleCount + 8;
    setVisibleCount(newVisibleCount);
    setDisplayedProducts(products.slice(0, newVisibleCount));
  };
  useEffect(() => {
    setDisplayedProducts(products.slice(0, visibleCount));
  }, [visibleCount, products]);


  if (loading) {
    return (
      <div className="flex justify-center items-center text-black text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="px-5 md:px-12 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className=" font-yellow text-[#7EB693] text-[30px] font-[400] leading-10 ">
          Category
        </p>
        <p className="font-roboto text-[40px] font-[700] text-[#274C5B] leading-10">
          Our Products
        </p>
      </div>
      <div className="flex md:flex-row gap-10 flex-wrap md:ml-10 my-10 justify-center items-center">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            category={product.type}
            image={product.image}
            name={product.des}
            cost={product.price}
            id={product.id}
          />
        ))}
      </div>
      <div className=" flex justify-center items-center md:my-16">
        <button onClick={loadMoreProducts}
        className="bg-[#274C5B] rounded-[16px] p-4 text-white flex flex-row justify-center items-center gap-3 ">
          Load More
          <TiArrowRight className=" bg-[#335B6B] rounded-full text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
