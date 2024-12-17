import HeroSection from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import ProductGrid from "../Components/ProductsSection";
import AboutUs from "./About";
import ServiceSection from "./Service";

const Home = () => {
    return (
      <>
      <HeroSection/>
      <AboutUs/>
      <ProductGrid data={false}/>
      <ServiceSection/>
      
      </>
    )
  }
  
  export default Home