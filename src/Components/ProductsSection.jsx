/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const allProducts = [
  { "id": 1, "name": "Onion", "image": "/onions.jpg", "category": "Vegetables" },
  { "id": 2, "name": "Ginger", "image": "/ginger.jpg", "category": "Vegetables" },
  { "id": 3, "name": "Green Chilly", "image": "/spicesbulk.jpeg", "category": "Vegetables" },
  { "id": 4, "name": "Mango Skewer", "image": "/Mango.jpg", "category": "Fruits" },
  { "id": 5, "name": "Watermelon", "image": "/Watermelon.png", "category": "Fruits" },
  { "id": 6, "name": "Frozen Mixed Fruits", "image": "/frozenmixedfruits.jpg", "category": "Fruits" },
  { "id": 7, "name": "Dry Fruits", "image": "/dryfruit.jpg", "category": "Dry Fruits" },
  // { "id": 35, "name": "Rice", "image": "/rice.jpg", "category": "Grains" },
  // { "id": 33, "name": "Dal", "image": "/dal.jpg", "category": "Grains" },
  // { "id": 34, "name": "Tender Coconut", "image": "/tender.jpg", "category": "Spices" },
  { "id": 8, "name": "Melon", "image": "/melon.jpg", "category": "Fruits" },
  { "id": 9, "name": "Kiwi", "image": "/kiwi.jpg", "category": "Fruits" },
  { "id": 10, "name": "Durian", "image": "/durain.jpg", "category": "Fruits" },
  { "id": 11, "name": "Papaya Skewer", "image": "/papaya.jpg", "category": "Fruits" },
  { "id": 12, "name": "Pineapple Cubes", "image": "/pineapple.jpg", "category": "Fruits" },
  { "id": 13, "name": "Dragon Fruit", "image": "/Dragonnfruit.jpg", "category": "Fruits" },
  { "id": 14, "name": "Strawberry", "image": "/strawebery.jpg", "category": "Fruits" },
  { "id": 15, "name": "Blueberry", "image": "/blueberry.jpg", "category": "Fruits" },
  { "id": 16, "name": "Raspberry", "image": "/rasberry.jpg", "category": "Fruits" },
  { "id": 17, "name": "Blackberry", "image": "blackberry.jpg", "category": "Fruits" },
  { "id": 18, "name": "Coconut", "image": "cocnut.jpg", "category": "Fruits" },
  { "id": 19, "name": "Lemon", "image": "lemon.jpg", "category": "Fruits" },
  { "id": 20, "name": "Lime", "image": "Lime.jpg", "category": "Fruits" },
  { "id": 21, "name": "Pomegranate", "image": "pomegrnate.jpg", "category": "Fruits" },
  { "id": 22, "name": "Cherry", "image": "/cherry.jpg", "category": "Fruits" },
  { "id": 23, "name": "Peach", "image": "/peach.jpg", "category": "Fruits" },
  { "id": 24, "name": "Nectarine", "image": "/nectrarine.jpg", "category": "Fruits" },
  { "id": 25, "name": "Plum", "image": "/plum.jpg", "category": "Fruits" },
  { "id": 26, "name": "Grapes", "image": "grape.jpg", "category": "Fruits" },
  { "id": 27, "name": "Guava", "image": "/guava.jpg", "category": "Fruits" },
  { "id": 28, "name": "Passion Fruit", "image": "/passionfruit.jpg", "category": "Fruits" },
  { "id": 29, "name": "Tangerine", "image": "/tangerine.jpg", "category": "Fruits" },
  { "id": 30, "name": "Cranberry", "image": "/cranberry.jpg", "category": "Fruits" },
  { "id": 31, "name": "Garlic", "image": "/garlic.jpg", "category": "Vegetables" },
  { "id": 32, "name": "Tapioca", "image": "/tapioca.jpg", "category": "Vegetables" },
  { "id": 33, "name": "Lemon", "image": "/lemon.jpg", "category": "Vegetables" },
  { "id": 34, "name": "Cavendish Banana", "image": "/greenbanana.jpg", "category": "Vegetables" },
  { "id": 35, "name": "Tomato", "image": "/tomato.jpg", "category": "Vegetables" },
  { "id": 36, "name": "Tender Coconut", "image": "/tender.jpg", "category": "Fruits" },
  { "id": 37, "name": "Pear", "image": "/pears.jpg", "category": "Fruits" },
  { "id": 38, "name": "Basmathi White Sella", "image": "/basmathirice.webp", "category": "Grains" },
  { "id": 39, "name": "Jasmine Rice", "image": "/jasminerice.jpg", "category": "Grains" },
  { "id": 40, "name": "Sona Masoori Rice", "image": "/sonamasooririce.webp", "category": "Grains" },
  { "id": 41, "name": "Cumin Seeds", "image": "/CuminSeeds.webp", "category": "Grains" },
  { "id": 42, "name": "Maize seeds", "image": "/dal.jpg", "category": "Grains" },
  { "id": 43, "name": "Safron", "image": "/safron.jpeg", "category": "Spices" },
  { "id": 44, "name": "Green Cardamon", "image": "/greencardamon.webp", "category": "Spices" },
  { "id": 45, "name": "Feenel Seeds", "image": "/fennelseeds.jpg", "category": "Spices" },
  { "id": 46, "name": "Turmeric", "image": "/turmeric.png", "category": "Spices" },
  { "id": 47, "name": "Dry Fig", "image": "/dryfig.webp", "category": "Dry Fruits" },
  { "id": 48, "name": "Dry Lemon", "image": "/drylemon.webp", "category": "Dry Fruits" },
  // { "id": 30, "name": "Dry Lemon", "image": "/turmeric.png", "category": "Dry Fruits" },
  { "id": 49, "name": "Pistachio", "image": "/pistachio.webp", "category": "Dry Fruits" },
  { "id": 50, "name": "Rasins", "image": "/raisins.webp", "category": "Dry Fruits" },
  { "id": 51, "name": "Potato", "image": "/potato.jpg", "category": "Vegetables" },
  { "id": 52, "name": "Broccoli", "image": "/brocolli.jpg", "category": "Vegetables" },
  { "id": 53, "name": "Dates", "image": "/dateKhazar.jpg", "category": "Dry Fruits" },
  { "id": 54, "name": "Cauliflower", "image": "/Cauliflower.jpg", "category": "Vegetables" },
  { "id": 55, "name": "Spinach", "image": "/Spinach.jpg", "category": "Vegetables" },

]


const categories = ["All", "Vegetables", "Fruits", "Spices", "Dry Fruits", "Grains"];

const ProductGrid = ({ data }) => {
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-beige-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8 bona-nova-sc-bold">
          Our Products
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center mb-6 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-white ${
                selectedCategory === category
                  ? "bg-green-600"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          {visibleProducts < filteredProducts.length && (
            <button
              onClick={() => {
                if (data) {
                  showMoreProducts();
                } else {
                  navigate("/product");
                }
              }}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
            >
              View More Products
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
