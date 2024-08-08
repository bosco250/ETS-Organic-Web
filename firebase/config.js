
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCRP3tJclxHgjLwOSNmKJv8K68UUBroWwQ",
  authDomain: "etsmovie-1d29a.firebaseapp.com",
  projectId: "etsmovie-1d29a",
  storageBucket: "etsmovie-1d29a.appspot.com",
  messagingSenderId: "932246559337",
  appId: "1:932246559337:web:01da316596b70be92d20f8"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app)