import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import PortfolioCaseStudies from "../components/PortfolioCaseStudies";
import ContactUs from "../components/ContactUs";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";

const LayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function IntroRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/SPTech" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="Aboutus" element={<AboutUs />} />
          <Route path="Services" element={<Services />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route
            path="PortfolioCaseStudies"
            element={<PortfolioCaseStudies />}
          />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default IntroRoutes;
