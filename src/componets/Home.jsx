import Navbar from "./Navbar";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import PortfolioCaseStudies from "./PortfolioCaseStudies";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Homepage = () => {
  return (
    <div className="font-poppins">
      <header className="relative h-screen">
        {/* Background image */}
        <div
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: "url('HomeHero3.jpg')",
            backgroundSize: "cover", // Ensures the image fills the space proportionally
          }}
        >
          {/* Navbar inside the header */}
          <Navbar />

          {/* Hero Content */}
          <div className="flex items-center justify-center h-full text-center text-black backdrop-brightness-90">
            <div>
              <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
                Welcome to <span className="text-yellow-500">DocuScanPro</span>
              </h1>
              <p className="text-xl mb-8 drop-shadow-md">
                Efficient Document Scanning, Storage, and Delivery Services
                Tailored for Your Business.
              </p>
              <a
                href="#services"
                className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-600 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </header>
      <Services />
      <AboutUs />
      <Blog />
      <PortfolioCaseStudies />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Homepage;
