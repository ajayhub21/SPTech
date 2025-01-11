import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
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
const LayOut = () => {
  return (
    <div className="pt-16">
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
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="Aboutus" element={<AboutUs />} />
          <Route path="Services" element={<Services />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Pricing" element={<Pricing/>}/>
          <Route path="Blog" element={<Blog/>}/>
          <Route
            path="PortfolioCaseStudies"
            element={<PortfolioCaseStudies />}
          />
          <Route path="ContactUs" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default IntroRoutes;
