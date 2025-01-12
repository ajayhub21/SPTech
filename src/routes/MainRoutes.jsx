import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../componets/Home";
import AboutUs from "../componets/AboutUs";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Services from "../componets/Services";
import FAQ from "../componets/FAQ";
import PortfolioCaseStudies from "../componets/PortfolioCaseStudies";
import ContactUs from "../componets/ContactUs";
import Pricing from "../componets/Pricing";
import Blog from "../componets/Blog";

function IntroRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/SPTech" element={<Home />} />
        <Route path="/SPTech/Aboutus" element={<AboutUs />} />
        <Route path="/SPTech/Services" element={<Services />} />
        <Route path="/SPTech/FAQ" element={<FAQ />} />
        <Route path="/SPTech/Pricing" element={<Pricing />} />
        <Route path="/SPTech/Blog" element={<Blog />} />
        <Route
          path="/SPTech/PortfolioCaseStudies"
          element={<PortfolioCaseStudies />}
        />
        <Route path="/SPTech/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default IntroRoutes;
