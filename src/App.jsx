import About from "./Components/About";
import Banner from "./Components/Banner";
import { useBackground } from "./Components/CreateContext";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  const {BackgroundColor}=useBackground();
const textColor=BackgroundColor==='black'?'text-white':"";
  return (
    <div style={{backgroundColor:BackgroundColor}} className={textColor}>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
