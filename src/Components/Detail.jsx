import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ImSpinner2 } from "react-icons/im";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    img = "",
    name = "No Name",
    exp = "No Description",
    price = "N/A",
  } = location.state || {};

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    if (confirm("Are want to delete this Item?...")) {
      try {
        await deleteDoc(doc(db, "products", id));
        navigate("/");
      } catch (error) {
        console.error("Error deleting product:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    setLoading(true);
    navigate(`/update/${id}`);
  };

  return (
    <div className="h-full w-full flex justify-center items-center text-[#274C5B] pt-[10vh]">
      <div className="w-[90%] bg-zinc-200 p-4 rounded-lg  md:flex md:flex-row md:w-[80%] shadow-xl">
        <div className=" flex justify-end w-full">
          <img src={img} alt={name} className="mb-4 h-[400px] w-[350px] rounded-xl" />
        </div>
        <div className="w-[100%] flex flex-col mt-4 justify-center items-center md-[40%] ">
          <h2 className="text-xl font-bold mb-4 text-[#274C5B]">
            <span className="text-md text-black">Name:</span>
            {name}
          </h2>
          <p className="mb-2 text-[#274C5B]">
            <span className="text-md text-black">Description:</span>
            {exp}
          </p>
          <p className="text-gray-900 font-semibold">
            <span className="text-md text-black">Price:</span>
            {price}
          </p>
          <div className="flex gap-10 mt-3">
            <button
              className="py-1 px-4 rounded-md text-white flex items-center justify-center"
              style={{ backgroundColor: "#274C5B",color:"white" }}
              onClick={handleUpdate}
            >
              Update
            </button>
            {loading ? (
              <div
                className=" fixed  top-[16vh] left-[15vw] flex justify-center items-center w-[80%] h-[80%] bg-gray-100 opacity-80 rounded-xl
              "
              >
                <ImSpinner2 className="animate-spin w-1/2 h-1/2 text-red-200" />{" "}
              </div>
            ) : (
              <button
                className="py-1 px-4 rounded-md text-white flex items-center justify-center"
                style={{ backgroundColor: "red" }}
                onClick={handleDelete}
                disabled={loading}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
