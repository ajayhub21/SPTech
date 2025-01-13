import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/SPTech", icon: "🏠" },
  { name: "ABOUT", href: "/SPTech/Aboutus", icon: "ℹ️" },
  { name: "SERVICES", href: "/SPTech/Services", icon: "🛠️" },
  { name: "PORTFOLIO", href: "/SPTech/PortfolioCaseStudies", icon: "📁" },
  { name: "CONTACT", href: "/SPTech/ContactUs", icon: "✉️" },
  { name: "FAQ", href: "/SPTech/FAQ", icon: "❓" },
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
      className="fixed top-0 left-0 w-full z-50 bg-custom-gradient shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 bg-gradient-to-b from-blue-50 to-white sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-14 w-auto sm:h-16 lg:h-20"
                  src="public/splogo1.png"
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

              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
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

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 pb-3 pt-4 bg-gradient-to-b from-black to-gray-900">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "text-yellow-500 border-b-2 border-yellow-500"
                      : "text-white hover:text-yellow-500",
                    "block rounded-md px-4 py-2 text-lg font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="px-4 mt-3">
              <Link
                to="/join-us"
                className="block w-full rounded-full bg-yellow-500 px-6 py-3 text-center text-base font-medium text-black hover:bg-yellow-600 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
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
