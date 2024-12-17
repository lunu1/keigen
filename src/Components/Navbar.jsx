import React, { useState } from "react";
import Logo from "../assets/images/keigenlogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white bona-nova-sc-bold font-bold">
      <div className="sm:px-4 px-10">
        <div className="py-4 flex items-center justify-center h-[15vh] sm:h-[12vh]">
          <nav className="bona-nova-sc justify-between flex flex-col sm:flex-row items-center z-10 w-full">
            {/* Logo */}
            <div className="flex justify-between w-full sm:w-auto mb-4 sm:mb-0 ">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="vipla logo"
                  className="h-16 sm:h-[12vh] mr-4 object-contain"
                />
                <div className="flex flex-col justify-center items-center">
                  <h1 className="hidden sm:block leading-tight text-sm sm:text-base">
                    Keigen Food Stuff and <br /> Beverage Trading LLC
                  </h1>
                  <h1 className="hidden sm:block text-gray-500 text-right text-xs sm:text-sm">
                    كيجن لتجارة المواد الغذائية <br /> والمشروبات ذ.م.م
                  </h1>
                </div>
              </Link>
              {/* Hamburger Menu Icon */}
              <div className="sm:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black text-2xl">
                  {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } sm:hidden bg-white shadow-lg absolute top-[12vh] left-0 w-full z-20`}
            >
              <div className="flex flex-col items-center gap-4 py-4">
                <Link
                  to="/about"
                  className="text-black hover:text-opacity-100 transition tracking-widest text-sm"
                >
                  ABOUT
                </Link>
                <Link
                  to="/service"
                  className="text-black hover:text-opacity-100 transition tracking-widest text-sm"
                >
                  SERVICES
                </Link>
                <Link
                  to="/product"
                  className="text-black hover:text-opacity-100 transition trking-widest text-sm"
                >
                  PRODUCT
                </Link>
                <Link
                  to="/contact"
                  className="text-black hover:text-opacity-100 transition tracking-widest text-sm"
                >
                  CONTACT
                </Link>

                {/* Call Section in Dropdown */}
                <div className="flex items-center space-x-2">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                    initial={{ scale: 0.9, rotate: 0 }}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path d="M21.4 15.89l-4.35-1.85a1 1 0 00-1 .09l-2.28 1.45a15.26 15.26 0 01-6.34-6.34l1.45-2.28a1 1 0 00.09-1L8.11 2.6a1 1 0 00-1-.6H4a2 2 0 00-2 2 18 18 0 0018 18 2 2 0 002-2v-3.11a1 1 0 00-.6-1z" />
                  </motion.svg>
                  <div className="text-gray-800 text-lg font-medium">
                    +971582159377
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links - Always Visible on Desktop */}
            <div className="hidden sm:flex flex-wrap gap-3 sm:gap-16 items-center justify-between w-full sm:w-auto">
              <Link
                to="/about"
                className="text-opacity-65 text-black hover:text-opacity-100 transition tracking-widest text-xs sm:text-base"
              >
                ABOUT
              </Link>
              <Link
                to="/service"
                className="text-opacity-65 text-black hover:text-opacity-100 transition tracking-widest text-xs sm:text-base"
              >
                SERVICES
              </Link>
              <Link
                to="/product"
                className="text-opacity-65 text-black hover:text-opacity-100 transition tracking-widest text-xs sm:text-base"
              >
                PRODUCT
              </Link>
              <Link
                to="/contact"
                className="text-opacity-65 text-black hover:text-opacity-100 transition tracking-widest text-xs sm:text-base"
              >
                CONTACT
              </Link>
            </div>

            {/* Call Section - Always Visible on Desktop */}
            <div className="hidden sm:flex items-center space-x-2">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
                initial={{ scale: 0.9, rotate: 0 }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M21.4 15.89l-4.35-1.85a1 1 0 00-1 .09l-2.28 1.45a15.26 15.26 0 01-6.34-6.34l1.45-2.28a1 1 0 00.09-1L8.11 2.6a1 1 0 00-1-.6H4a2 2 0 00-2 2 18 18 0 0018 18 2 2 0 002-2v-3.11a1 1 0 00-.6-1z" />
              </motion.svg>
              <div className="text-gray-800 text-lg font-medium">
                +971582159377
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};