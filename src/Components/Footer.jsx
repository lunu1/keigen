import { Link } from "react-router-dom";
// import { Instagram, Twitter, Facebook, LinkedIn } from "../assets/icons/Icons";

const Footer = () => {
  return (
    <div className="bg-green-700 text-white py-10 flex flex-col space-y-10px-0 md:px-5 md:py-5">
      <div className="flex flex-col lg:flex-row justify-between gap-10 sm:px-40 py-10">
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>
          Welcome to Keigen Food Stuff and Beverage Trading LLC, your trusted partner in the import and export of fresh fruits and vegetables. Established with a passion for delivering quality and excellence, we have become a leading name in Dubai’s vibrant produce market.          </p>
        </div>
        <div className="flex-1 space-y-1 text-center lg:text-left">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <div className="flex flex-col">
            <Link to="/" className=" hover:underline">Home</Link>
            <Link to="/about" className=" hover:underline">About us</Link>
            <Link to="/service" className="hover:underline">Service</Link>
            <Link to="/product" className=" hover:underline">Product</Link>
            <Link to="/contact" className="hover:underline">Contact us</Link>
          </div>
        </div>
        <div className="flex-1 space-y-1 text-center lg:text-left">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Contact No.: +971582159377</p>
          <p>salim@keigenfoodstufftrading.net</p>
          {/* <div className="flex justify-center lg:justify-start space-x-3">
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <Instagram />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <LinkedIn />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <Twitter />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <Facebook />
            </a>
          </div> */}
        </div>
      </div>
      <div className="text-center border-t border-gray-500 pt-5 space-y-2">
        <p>&copy; {new Date().getFullYear()}Altrasul. All rights reserved.</p>
        <p>
          <a href="#" className=" hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className=" hover:underline">Terms of Service</a>
        </p>
        <p>Developed by Digtel</p>
      </div>
    </div>
  );
};

export default Footer;