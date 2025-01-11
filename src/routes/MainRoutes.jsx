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
        </Route>
      </Routes>
    </Router>
  );
}

export default IntroRoutes;
