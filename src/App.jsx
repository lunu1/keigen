
import './App.css'
import Footer from './Components/Footer';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/About';
import { Navbar } from './Components/Navbar';
import ContactUs from './Pages/Contact';
import ProductGrid from './Components/ProductsSection';
import ServiceSection from './Pages/Service';

export default function App() {
  return (
   <>
   <Router>
   <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/product" element={<ProductGrid data="true"/>}/>
      <Route path="/service" element={<ServiceSection/>}/>

</Routes>
<div className="fixed bottom-[20px] right-[20px] z-10">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/971565637134"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Chat on WhatsApp"
            src="/Whatsapp.png"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      </div>
   <Footer/>
   </Router>
   {/* <Home/> */}
   </>
  )
}
