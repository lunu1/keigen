import { motion } from "framer-motion";
import About1 from "../assets/images/FoodAbout.jpg";
import About2 from "../assets/images/FoodAboutone.jpg";
import About3 from "../assets/images/FoodAbouttwo.jpg";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold text-green-600 bona-nova-sc-bold">
            About Us
          </h1>
          <p className="mt-4 text-gray-600">
            Learn more about our journey and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={About1}
              alt="Truck"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Our Journey</h2>
              <p className="mt-4 text-gray-600">
                Keigen Fruits, Vegetables, Rice, Dry Fruits, Spices Exporting
                and Trading is a globally recognized company specializing in
                sourcing and distributing premium-quality food products. We take
                pride in our robust network of trusted suppliers from India,
                Pakistan, and China, ensuring that our customers receive only
                the freshest, highest-quality, and most nutritious products.
                With a commitment to excellence, sustainability, and customer
                satisfaction, we have built a reputation as a reliable partner
                in the international agricultural export market. Whether it’s
                fresh fruits, vegetables, rice, dry fruits, or spices, Keigen
                guarantees quality and consistency in every shipment.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={About2}
              alt="Factory"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              <p className="mt-4 text-gray-600">
              To become a global leader in the fruits, vegetables, rice, dry fruits, and spices export and trading industry by fostering sustainable agricultural practices and delivering the highest quality products. We aim to build enduring partnerships and set new standards for excellence in the international supply chain.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden mt-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              <p className="mt-4 text-gray-600">
              At Keigen, our mission is to create a dynamic marketplace for customers looking to sell bulk quantities of fruits, vegetables, rice, dry fruits, and spices in Dubai. By sourcing from trusted suppliers in India, Pakistan, and China, we strive to offer a seamless experience for both buyers and sellers. Our platform connects suppliers with buyers, facilitating hassle-free buying and selling, whether through bulk purchases or commission-based selling. We are committed to ensuring fair trade, quality assurance, and innovation in the agricultural export sector.
              </p>
            </div>
            <img
              src={About3}
              alt="Mission"
              className="w-full h-56 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
