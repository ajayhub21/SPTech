import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-custom-gradient shadow-lg py-12">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          {/* Logo and Address */}
          <div className="mb-8 lg:mb-0">
            <a href="/" className="inline-block mb-4">
              <img
                src="public/SPLOGO.svg"
                alt="Logo"
                className="h-10 mx-auto lg:mx-0"
              />
            </a>
            <p className="text-sm max-w-sm mx-auto lg:mx-0 text-white">
              SP Technologies No:4 NSK Nagar,Rp Road, Hasthinapuram,Chrompet
              ,Chennai-44 <br />
              Moblie-9600600105
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white  ">
            {/* Company Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4 text-white">
                Company
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/SPTech/Services"
                    className="hover:text-blue-400 transition"
                  >
                    Services
                  </a>
                </li>
                {/* <li> */}
                {/* <a
                    href="https://docon.freshteam.com/jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    Career
                  </a> */}
                {/* </li> */}
                <li>
                  <a
                    href="/SPTech/Aboutus"
                    className="hover:text-blue-400 transition"
                  >
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/patients"
                    className="hover:text-blue-400 transition"
                  >
                    Patients
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4 text-white">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/SPTech/Blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    Blogs & Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/SPTech/FAQ"
                    className="hover:text-blue-400 transition"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4 text-white">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/SPTech/Privacy"
                    className="hover:text-blue-400 transition"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <a
                    href="/SPTech/Terms"
                    className="hover:text-blue-400 transition"
                  >
                    Terms
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/Refund-And=Cancellation"
                    className="hover:text-blue-400 transition"
                  >
                    Refund & Cancellation
                  </a>
                </li> */}
                <li>
                  <button
                    onClick={() => console.log("Contact action")}
                    className="hover:text-blue-400 transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media and App Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.facebook.com/docon.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform text-white hover:text-blue-600"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/docon_technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform text-white hover:text-pink-500"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCTIM0imwM3wCAv6VuopEZgA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform text-white hover:text-red-500"
            >
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>

        {/* App Links */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* <a
              href="https://apps.apple.com/us/app/docon/id1505731925"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90"
            >
              <img
                src="https://cdn.prod.website-files.com/61d565f8e34ebb4e5dae2da8/61de9109389b4e1bb8ba6f66_Apple%20Store.png"
                alt="App Store"
                className="h-12"
              />
            </a> */}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © All rights reserved. SP Technologies
      </div>
    </footer>
  );
};

export default Footer;
