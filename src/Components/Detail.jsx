import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import agriculture from "../assets/agriculture.png";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { img = "", name = "No Name", exp = "No Description", price = "N/A" } = location.state || {};

  
  const handleDelete = async () => {
    try {
      // Delete document from Firestore
      await deleteDoc(doc(db, "products", id)); // Adjust collection name if necessary
    //   alert('Product deleted successfully');
      navigate('/'); // Redirect to another page after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    //   alert('Failed to delete product');
    }
  };


  const handleUpdate = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div
      className="h-full w-full flex justify-center items-center"
      // style={{
      //   backgroundImage: `url(${agriculture})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="w-[90%] bg-white p-4 rounded-lg shadow-lg flex flex-col md:w-[80%] md:flex">
        <div className="w-[100%] h-[60vh] md:w-[100%] md:h-screen">
        <img src={img} alt={name} className="mb-4  h-full w-full" />

        </div>
        <div className="w-[90%] flex flex-col mt-4 justify-center items-center md-[40%]">
        <h2 className="text-xl font-bold mb-4 text-[#274C5B]"><span className="text-md text-black">Name:</span>{name}</h2>
        <p className="mb-2 text-[#274C5B]"><span className="text-md text-black">description:</span>{exp}</p>
        <p className="text-gray-900 font-semibold"><span className="text-md text-black">Price:</span>{price}</p>
        <div className=" flex gap-10 mt-3">
          <button
            className="py-1 px-4 rounded-md text-white"
            style={{ backgroundColor: "#7EB693" }}
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="py-1 px-4 rounded-md text-white"
            style={{ backgroundColor: "red" }}
            onClick={handleDelete}
          >
            Delete
          </button> 
        </div>
     
        </div>
      </div>
    </div>
  );
};

export default Detail;