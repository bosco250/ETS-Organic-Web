// src/Components/add_product/Form.jsx
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { db, storage } from '../../firebase/config'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
// import agriculture from "../assets/agriculture.png";


const Update = ({ onClose }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const [type, setType] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [existingImage, setExistingImage] = useState(""); // To hold the existing image URL
  const [loading,setLoading]=useState(false)


  // Fetch product data when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setType(data.type);
          setDes(data.des);
          setPrice(data.price);
          setExistingImage(data.image); // Set the existing image URL
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching document: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  // Function to handle form submission
const navigate=useNavigate()

  const updateProduct = async (e) => {
    e.preventDefault();

    if(confirm("Are you going to update the item?...")){if (!type || !des || !price) {
      console.log("Please fill in all required fields.");
      return;
    }

    try {
        setLoading(true)
      let imageURL = existingImage;
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageURL = await getDownloadURL(storageRef);
      }

      const docRef = doc(db, "products", id);
      await updateDoc(docRef, {
        type,
        des,
        image: imageURL,
        price,
      });
navigate("/")
      console.log("Document updated with ID: ", id);

      if (onClose) onClose(); 
    } catch (error) {
      console.log("Error updating document: ", error);
    }}
    else{
      setLoading(false)
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 text-[#274C5B]"  
  
    >
      <div className="submit-case">
        <form onSubmit={updateProduct}>
          <p className="pt-3">Update Product</p>
          <label>
            <span>Product Type</span>
            <input
              id="type"
              className="subject"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Product Description</span>
            <input
              id="des"
              className="topic"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Product Image</span>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {existingImage && (
              <div>
                <img src={existingImage} alt="Existing Product" style={{ width: '100px', height: '100px' }} />
              </div>
            )}
          </label>
          <label>
            <span>Price</span>
            <input
              id="price"
              className="topic"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          {loading?<div className=' fixed  top-[16vh] left-[15vw] flex justify-center items-center w-[80%] h-[80%] bg-gray-100 opacity-80 rounded-xl
              '><ImSpinner2
               className="animate-spin w-1/2 h-1/2 text-[#274C5B]" /> </div> :( <button type="submit">"Update"</button>)}
        </form>
      </div>
    </div>
  );
};

export default Update;