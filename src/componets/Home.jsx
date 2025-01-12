import React, { useState } from "react";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number Submitted: ", phoneNumber);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
      {/* Hero Section */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-custom-gradient leading-tight mb-6">
            Effortless Document Scanning Solutions for Your Business Needs
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            Streamline your document management with advanced scanning
            technology designed to enhance productivity and efficiency.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex items-center justify-center lg:justify-start space-x-4"
          >
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-md">
              <span className="text-gray-500 font-medium">+91</span>
            </div>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full max-w-xs border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-custom-gradient text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-md transform -translate-x-8">
            <img
              src="/public/HomeSide.jpg"
              alt="Document Scanning Solutions"
              className="w-full relative -top-6 -right-10 h-auto max-w-[90%] md:max-w-[75%] rounded-xl shadow-lg object-cover transition duration-300 hover:scale-105"
            />
            {/* <img
              src="https://cdn.prod.website-files.com/61d565f8e34ebb4e5dae2da8/61dbf9fda79a38f033c52b3b_Hero%20Circle%202.svg"
              alt="Circle Design"
              className="absolute -top-6 -right-6 w-20 h-20 opacity-75 animate-pulse"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
