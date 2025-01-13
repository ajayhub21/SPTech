import React, { useState, useEffect, useRef } from "react";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import PortfolioCaseStudies from "./PortfolioCaseStudies";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputChange = (e) => setPhoneNumber(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number Submitted: ", phoneNumber);
  };

  // Custom hook for animation triggering
  const useAnimateOnView = (ref) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setVisible(true),
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => ref.current && observer.disconnect();
    }, [ref]);
    return visible;
  };

  // References for components
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { component: <AboutUs />, ref: aboutUsRef },
    { component: <PortfolioCaseStudies />, ref: portfolioRef },
    { component: <Blog />, ref: blogRef },
    { component: <FAQ />, ref: faqRef },
    { component: <Services />, ref: servicesRef },
    { component: <ContactUs />, ref: contactRef },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="py-16  min-h-screen flex items-center ">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-custom-gradient leading-tight mb-6 animate-fadeIn">
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

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center relative">
            <div className="w-full h-auto max-w-lg relative overflow-hidden">
              <img
                src="/SPTech/HomeSide1"
                alt="Document Scanning Solutions"
                className="w-full max-w-full rounded-xl shadow-lg object-cover object-center transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Rendering */}
      {sections.map(({ component, ref }, index) => (
        <div
          key={index}
          ref={ref}
          className={`transition duration-1000 transform ${
            useAnimateOnView(ref)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {component}
        </div>
      ))}
    </>
  );
};

export default Home;
