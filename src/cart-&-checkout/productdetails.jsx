import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import RecentlyViewed from "../components/RecentlyViewed";
import { Link } from "react-router-dom";


// --- DUMMY DATA ---
// In a real app, this would come from an API call based on the product ID in the URL
const product = {
  id: 1,
  name: "Tomatoes",
  image: "/src/assets/tomatoes.png", // Using a path that works with Vite
  category: "Vegetables",
  inStock: true,
  price: 3500,
  priceUnit: "Per 1 paint",
  variants: [
    "Standard Tomatoes",
    "Cherry Tomatoes",
    "Roma Tomatoes",
  ],
  description: "Fresh and juicy tomatoes, perfect for salads, sauces, and sandwiches. Grown locally and delivered fresh to your door. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus enim modi ut iste vitae atque? Sed odit soluta aspernatur dolore magnam, distinctio quasi amet iure repellendus fuga, libero ullam quia, praesentium consequuntur facilis reiciendis vel."
};


// --- SUBCOMPONENTS ---

const Breadcrumb = ({ category, name }) => (
  <div className="text-gray-500 text-sm mb-4">
    <Link to="/">Home</Link>    &gt; <Link to="/vegitables">{category}</Link>   &gt; {name}
  </div>
);

const ProductImage = ({ image, name }) => (
  <div className="bg-yellow-50 shadow rounded-lg p-6 flex justify-center items-center h-[380px] w-full">
    <img
      src={image}
      alt={name}
      className="h-full object-contain rounded"
    />
  </div>
);

const ProductTags = ({ category, inStock }) => (
  <div className="flex gap-3 mb-2">
    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
      {category}
    </span>
    {inStock && (
      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
        In Stock
      </span>
    )}
  </div>
);

const ProductPricing = ({ name, price, priceUnit }) => (
  <>
    <h1 className="text-3xl font-bold mb-2">{name}</h1>
    <p className="text-3xl font-bold text-gray-800 mb-4">
      ₦{price.toLocaleString()}{" "}
      <span className="text-sm font-normal text-gray-500">{priceUnit}</span>
    </p>
  </>
);

const ProductSelect = ({ variants, selectedType, onTypeChange }) => (
  <div className="mb-4">
    <label className="text-sm font-semibold">
      Select the type you want to buy
    </label>
    <select 
      value={selectedType}
      onChange={onTypeChange}
      className="w-full border rounded p-2 mt-1 text-sm bg-green-50 border-green-600"
    >
      <option value="">Select from the list of options</option>
      {variants.map(variant => (
        <option key={variant} value={variant}>{variant}</option>
      ))}
    </select>
  </div>
);

const QuantitySelector = ({ quantity, onQuantityChange }) => (
  <div className="flex items-center gap-4 mb-4">
    <label className="text-sm font-semibold">Quantity</label>
    <div className="flex items-center gap-2 border rounded px-3 py-1 shadow-sm">
      <button onClick={() => onQuantityChange(-1)} className="px-2 text-lg font-bold">-</button>
      <span className="text-sm font-semibold">{quantity}</span>
      <button onClick={() => onQuantityChange(1)} className="px-2 text-lg font-bold">+</button>
    </div>
  </div>
);

const DeliveryInfo = () => (
  <div className="mt-6 p-4 border rounded-lg flex items-center gap-3 bg-green-50 shadow-sm border-green-600">
    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
      <FaRegClock className="text-blue-500"/>
    </div>
    <div>
      <p className="font-semibold text-sm">24-Hour Delivery</p>
      <p className="text-xs text-gray-500">
        Order now, get it between now and tomorrow
      </p>
    </div>
  </div>
);

const DescriptionSection = ({ description }) => (
  <div className="mt-10 mb-4">
    <h2 className=" border-b w-25 pb-3 text-lg font-semibold text-green-600 mb-2">Description</h2>
    <div className=" lg:p-4 md:-4 rounded-lg text-sm leading-relaxed text-gray-700">
      <h3 className="font-semibold mb-2">Product description</h3>
      <p>{description}</p>
    </div>
  </div>
);


// --- MAIN COMPONENT ---

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState(product.variants[0] || "");

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };
  
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedType) {
      alert("Please select a product type.");
      return;
    }
    const cartItem = {
      product,
      quantity,
      selectedType,
      totalPrice: product.price * quantity,
    };
    console.log("Added to basket:", cartItem);
    alert(`${quantity} ${selectedType}(s) added to basket!`);
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <Breadcrumb category={product.category} name={product.name} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
        <ProductImage image={product.image} name={product.name} />

        <div className="bg-white shadow rounded-lg p-6">
          <ProductTags category={product.category} inStock={product.inStock} />
          <ProductPricing
            name={product.name}
            price={product.price}
            priceUnit={product.priceUnit}
          />
          <ProductSelect
            variants={product.variants}
            selectedType={selectedType}
            onTypeChange={handleTypeChange}
          />
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />

          <button
            onClick={handleAddToCart}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 text-sm rounded shadow transition"
          >
            Add to Basket
          </button>

          <DeliveryInfo />
        </div>
      </div>

      <DescriptionSection description={product.description} />
      <RecentlyViewed />
    </div>
  );
}
