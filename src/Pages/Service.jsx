import React from "react";
import leaf from "../assets/images/leaf.svg";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 bona-nova-sc-bold">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 mt-4">
          Keigen Food Stuff and Beverage Trading LLC specializes in facilitating bulk sales of fruits, vegetables, rice, dry fruits, and spices in Dubai. We provide a streamlined platform for both buyers and sellers, offering flexible purchasing options and commission-based sales models.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={leaf}
                alt="Import Service"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-2xl font-semibold text-green-600">
            Bulk Selling Services
            </h3>
            <p className="text-gray-600 mt-3">
            For those looking to sell bulk quantities of fruits, vegetables, rice, dry fruits, and spices, Keigen offers a commission-based selling platform. We connect sellers with buyers in Dubai's competitive market, ensuring fair pricing and smooth transactions. Our team facilitates the entire process, from listing your products to finalizing the sale, providing sellers with the opportunity to maximize their profits.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={leaf}
                alt="Bulk Orders"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-2xl font-semibold text-green-600">
            Bulk Purchase Services
            </h3>
            <p className="text-gray-600 mt-3">
            We purchase high-quality fruits, vegetables, rice, dry fruits, and spices in bulk from suppliers and ensure timely delivery to our buyers. Our extensive network of suppliers from India, Pakistan, and China guarantees freshness, quality, and variety. We aim to offer competitive pricing and seamless logistics support for all bulk purchases.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                src={leaf}
                alt="Commission Basis"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-2xl font-semibold text-green-600">
              Commission-Based Selling
            </h3>
            <p className="text-gray-600 mt-3">
            Keigen provides commission-based selling services for bulk quantities of fruits, vegetables, rice, dry fruits, and spices. We act as a bridge between buyers and sellers, ensuring smooth negotiations and fair trade practices. Our goal is to create a win-win situation for both parties, providing sellers with a lucrative platform to list their products and buyers with easy access to quality goods.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition" onClick={()=>navigate("/contact")}>
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
