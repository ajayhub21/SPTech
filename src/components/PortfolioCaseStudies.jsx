import { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

const stats = [
  {
    icon: <DocumentTextIcon className="h-12 w-12 text-blue-500" />,
    value: 1000,
    label: "Documents Scanned",
  },
  {
    icon: <CheckCircleIcon className="h-12 w-12 text-green-500" />,
    value: 500,
    label: "Happy Clients",
  },
  {
    icon: <PresentationChartBarIcon className="h-12 w-12 text-purple-500" />,
    value: 99.9,
    label: "Accuracy Rate",
  },
  {
    icon: <DocumentTextIcon className="h-12 w-12 text-red-500" />,
    value: 10,
    label: "Years of Experience",
  },
];

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setDisplayValue(start.toFixed(value % 1 === 0 ? 0 : 1));
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return <>{displayValue}</>;
};

const PortfolioCaseStudies = () => {
  return (
    <section className="py-12 px-6 sm:px-12 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            Companies
          </span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mt-3 sm:mt-4">
          Explore how our document scanning solutions streamline workflows.
        </p>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-custom-gradient group"
            >
              <div className="p-3 sm:p-4 rounded-full bg-gray-100 group-hover:bg-opacity-20">
                {stat.icon}
              </div>
              <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-gray-700 group-hover:text-white">
                <AnimatedNumber value={stat.value} />
                {typeof stat.value === "number" && stat.value >= 1000 ? "+" : ""}
              </h1>
              <p className="text-gray-600 mt-1 sm:mt-2 group-hover:text-gray-200 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Before-and-After Section */}
      <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            Before{" "}
          </span>
          and{" "}
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            After
          </span>{" "}
          Transformation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <img
              src="/SPTech/bulk-document-scanning-service.png"
              alt="Original Document"
              className="rounded-md w-full h-40 sm:h-56 object-cover"
            />
            <p className="text-gray-600 mt-3 text-center text-sm sm:text-base">
              Original Document
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <img
              src="/SPTech/kodak 1.jpg"
              alt="Scanned Document"
              className="rounded-md w-full h-40 sm:h-56 object-cover"
            />
            <p className="text-gray-600 mt-3 text-center text-sm sm:text-base">
              Scanned Document
            </p>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16 py-8 sm:py-10 bg-custom-gradient rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 sm:mb-8 text-center">
          Showcase of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Successful Projects
          </span>
        </h2>
        <div className="flex justify-center items-start">
          <ul className="list-none space-y-3 sm:space-y-4">
            <li className="text-sm sm:text-lg text-white flex items-center gap-3 sm:gap-4">
              <CheckBadgeIcon className="w-6 sm:w-8 h-6 sm:h-8 text-teal-300" />
              Digitized thousands of legal documents for a leading law firm,
              reducing processing time by 70%.
            </li>
            <li className="text-sm sm:text-lg text-white flex items-center gap-3 sm:gap-4">
              <CheckBadgeIcon className="w-6 sm:w-8 h-6 sm:h-8 text-teal-300" />
              Enhanced data retrieval for a financial institution by scanning
              and indexing over 10,000 records.
            </li>
            <li className="text-sm sm:text-lg text-white flex items-center gap-3 sm:gap-4">
              <CheckBadgeIcon className="w-6 sm:w-8 h-6 sm:h-8 text-teal-300" />
              Streamlined record-keeping for a hospital chain with high-quality,
              securely scanned medical reports.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCaseStudies;
