import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/Security" },
  { name: "Services", href: "/Services" },
  { name: "Pricing/Plans", href: "/Patients" },
  { name: "Contact Us", href: "/Login" },
  { name: "FAQ", href: "/FAQ" },
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
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-custom-gradient shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center">
                <img
                  className="h-12 w-auto sm:h-14 lg:h-16"
                  src="/SPLOGO.svg"
                  alt="SP Technology Logo"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div className="flex space-x-6">
                  {updatedNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-white text-customText"
                          : "text-white hover:bg-white hover:text-customText",
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Join Us Button */}
              <div className="hidden lg:flex">
                <Link
                  to="/JoinUs"
                  className="ml-4 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black-700 hover:text-customText hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 pb-3 pt-4 bg-gradient-to-r from-blue-700 to-purple-600 shadow-lg">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-customText"
                      : "text-white hover:bg-white hover:text-customText",
                    "block rounded-md px-4 py-2 text-base font-medium transition-all duration-300"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* Mobile Join Us Button */}
            <div className="px-4 mt-3">
              <Link
                to="/join-us"
                className="block w-full rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-black hover:text-customText shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                Join Us
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
