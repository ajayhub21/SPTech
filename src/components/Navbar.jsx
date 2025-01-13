import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/SPTech" },
  { name: "ABOUT", href: "/SPTech/Aboutus" },
  { name: "SERVICES", href: "/SPTech/Services" },
  { name: "PORTFOLIO", href: "/SPTech/PortfolioCaseStudies" },
  { name: "CONTACT", href: "/SPTech/ContactUs" },
  { name: "FAQ", href: "/SPTech/FAQ" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: location.pathname === item.href,
  }));

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  src="/SPTech/LogoDark.png"
                  alt="SP Technologies Logo"
                />
                <h1 className="text-black text-lg sm:text-base lg:text-xl tracking-wide">
  SP Technologies
</h1>

              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div className="flex space-x-8">
                  {updatedNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-custom-gradient text-white"
                          : "text-black hover:bg-custom-gradient hover:from-blue-500 hover:via-green-400 hover:to-blue-500 hover:text-white",
                        "rounded-md px-4 py-2 text-sm font-medium transition-all duration-300"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className="lg:hidden fixed inset-0 z-50 bg-white bg-opacity-95 backdrop-blur-md overflow-y-auto">
            <div className="space-y-6 px-6 pt-16 pb-8 flex flex-col items-start min-h-screen">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-custom-gradient text-white font-semibold rounded-md px-4 py-3"
                      : "text-black hover:text-white hover:bg-custom-gradient hover:from-blue-500 hover:via-green-400 hover:to-blue-500 hover:shadow-md rounded-md px-4 py-3",
                    "w-full text-center text-lg font-medium transition-all duration-300"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <hr className="border-t border-gray-300 my-4 w-full" />
              <Disclosure.Button className="absolute top-0 right-4 p-2 text-black rounded-full hover:bg-gray-300 transition-colors duration-300">
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
