
import React, { useState } from "react";
import { db,storage } from "../../firebase/config";
import { IoMdClose } from "react-icons/io";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./AddProduct.css";

const Addproduct = ({ onClose }) => {
  const [type, setType] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [loading,setLoading]=useState(false)

  const addProduct = async (e) => {
    e.preventDefault();

    if (!type || !des || !price || !image) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true)

      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageURL = await getDownloadURL(storageRef);

      const productsCollection = collection(db, "products");

      const docRef = await addDoc(productsCollection, {
        type,
        des,
        image: imageURL,
        price,
      });

      console.log("Document written with ID: ", docRef.id);

      setType("");
      setDes("");
      setImage(null);
      setPrice("");
      setLoading(false)
      window.location.reload();
      if (onClose) onClose();
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  return (
    <div className="submit-container">
      <div className="submit-case">
        <form onSubmit={addProduct}>
          <p className="close">
            <IoMdClose onClick={onClose} />
          </p>
          <p>Add Product</p>
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
              required
            />
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
          <button type="submit">{loading?"Submitting...":"Submit"}</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;