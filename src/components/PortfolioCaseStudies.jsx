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
    value: 1000000,
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
  // {
  //   icon: <CheckCircleIcon className="h-12 w-12 text-orange-500" />,
  //   value: 24,
  //   label: "Service Availability (hrs)",
  // },
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            Companies
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Explore how our document scanning solutions streamline workflows.
        </p>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-4 rounded-full bg-gray-100">{stat.icon}</div>
              <h1 className="mt-6 text-3xl font-bold text-gray-700">
                <AnimatedNumber value={stat.value} />
                {typeof stat.value === "number" && stat.value >= 1000
                  ? "+"
                  : ""}
              </h1>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Before-and-After Section */}
      <div className="container mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            Before{" "}
          </span>
          and{" "}
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            After
          </span>{" "}
          Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Original Document"
              className="rounded-md w-full h-56 object-cover"
            />
            <p className="text-gray-600 mt-4 text-center">Original Document</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Scanned Document"
              className="rounded-md w-full h-56 object-cover"
            />
            <p className="text-gray-600 mt-4 text-center">Scanned Document</p>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="container mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Showcase of {""}
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            Successful Projects
          </span>
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg">
          <li className="text-lg text-gray-700 flex items-center gap-2">
            <CheckBadgeIcon className="w-6 h-6 text-customText" />
            Digitized thousands of legal documents for a leading law firm,
            reducing processing time by 70%.
          </li>
          <li className="text-lg text-gray-700 flex items-center gap-2">
            <CheckBadgeIcon className="w-6 h-6 text-customText" />
            Enhanced data retrieval for a financial institution by scanning and
            indexing over 10,000 records.
          </li>
          <li className="text-lg text-gray-700 flex items-center gap-2">
            <CheckBadgeIcon className="w-6 h-6 text-customText" />
            Streamlined record-keeping for a hospital chain with high-quality,
            securely scanned medical reports.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PortfolioCaseStudies;
