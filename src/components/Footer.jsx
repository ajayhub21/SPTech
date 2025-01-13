import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-12 shadow-lg">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          {/* Logo and Address */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <img
                src="/SPTech/public/LogoDark.png"
                alt="SP Technologies Logo"
                className="h-14 w-14"
              />
              <h1 className="text-xl lg:text-2xl font-bold">SP Technologies</h1>
            </div>
            <p className="text-sm mt-4 max-w-sm mx-auto lg:mx-0">
              No: 4 NSK Nagar, RP Road, Hasthinapuram, Chrompet, Chennai-44
              <br />
              <strong>Mobile:</strong> 9600600105
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Company Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4">Company</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/SPTech/Services"
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/SPTech/Aboutus"
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/SPTech/Blog"
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    Blogs & Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/SPTech/FAQ"
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h2 className="font-extrabold text-lg mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/SPTech/Privacy"
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <a
                    href="/SPTech/Terms"
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => console.log("Contact action")}
                    className="hover:bg-custom-gradient hover:text-white transition rounded-md px-2 py-1"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media and Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-center">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-custom-gradient hover:text-white transition rounded-full p-2"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-custom-gradient hover:text-white transition rounded-full p-2"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-custom-gradient hover:text-white transition rounded-full p-2"
            >
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>

          {/* Footer Bottom Section */}
          <div className="text-sm text-gray-600 mt-6 md:mt-0">
            © {new Date().getFullYear()} SP Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
