import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Homebg from "../assets/images/Homek1.jpg";
import Homebg1 from "../assets/images/Homek2.jpg";
import Homebg2 from "../assets/images/Homek3.jpg";
import Homebg8 from "../assets/images/Homek8.jpg";
import Homebg9 from "../assets/images/Homek9.jpg";
import Homebg4 from "../assets/images/Homek9.jpg";
import Homebg5 from "../assets/images/Homek10.jpg";

import { useNavigate } from "react-router-dom";

const imageAnimations = {
  initial: { opacity: 0, scale: 1.2 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
};

const contentAnimations = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

const buttonAnimations = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const backgrounds = [
  {
    image: Homebg,
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Bulk Sales Opportunity
        </h1>
        <p>Are you an Exporter, Supplier, or Direct Land Owner? Contact us directly to sell your products in bulk!</p>
      </div>
    ),
  },
  {
    image: Homebg1,
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Competitive Commission</h1>
        <p>We charge only a 5% commission on every sale, ensuring great value for your transactions.</p>
      </div>
    ),
  },
  {
    image: Homebg2,
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Fast Payment Processing</h1>
        <p>Receive instant payment via bank transfer or TT—quick, secure, and reliable.</p>
      </div>
    ),
  },
  {
    image: Homebg8,
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p>Call or WhatsApp us at +971 56 5637134, or email keigenfoodstufftradingllc@gmail.com for more details.</p>
      </div>
    ),
  },
  {
    image: Homebg9,
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Bulk Import Services</h1>
        <p>We also import bulk quantities to meet your sourcing needs efficiently.</p>
      </div>
    ),
  },
  {
    image: Homebg4,
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Third-Party Sales</h1>
        <p>Leverage our third-party sales facility for convenient and hassle-free transactions.</p>
      </div>
    ),
  },
  {
    image: Homebg5, // Replace with the appropriate image variable
    component: (
      <div className="text-black text-center space-y-2">
        <h1 className="text-3xl font-bold">Reexporting Made Easy</h1>
        <p>
          Simplify your international trade with our reliable reexporting services. We ensure smooth logistics and documentation for your global business needs.
        </p>
      </div>
    ),
  },
];

const HeroSection = () => {
  
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-[88vh] w-full relative overflow-hidden">
        {/* Image Background */}
        <motion.img
          key={currentIndex}
          src={backgrounds[currentIndex].image}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageAnimations}
          transition={{ duration: 1.5 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5">
          <motion.div
            key={currentIndex}
            className="px-4 py-6 bg-white bg-opacity-60 rounded-lg h-[20vh] flex items-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={contentAnimations}
            transition={{ duration: 1 }}
          >
            {backgrounds[currentIndex].component}
          </motion.div>
          <motion.button
            className="px-6 py-2 bg-green-600 text-white rounded-md"
            {...buttonAnimations}
            onClick={()=>navigate("/contact")}
          >
            Contact Us
          </motion.button>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full"
          {...buttonAnimations}
        >
          &#8249;
        </motion.button>
        <motion.button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full"
          {...buttonAnimations}
        >
          &#8250;
        </motion.button>

        {/* Indicators */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {backgrounds.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white opacity-100"
                  : "bg-gray-500 opacity-50"
              }`}
              {...buttonAnimations}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSection;
