import React from "react";

export default function Features() {
  const features = [
    {
      title: "Medical Record Digitization (MRD)",
      description:
        "Efficiently digitize and organize patient records, enabling quick access to medical histories while ensuring compliance with healthcare regulations.",
      image: "/SPTech/LogoDark.png", // Replace with actual image path
    },
    {
      title: "Banking and Loan Files",
      description:
        "Securely digitize critical banking documents and loan files for streamlined operations and easy retrieval.",
      image: "/images/banking-icon.png", // Replace with actual image path
    },
    {
      title: "Engineering Drawings",
      description:
        "High-resolution scanning of large engineering drawings with precise detail for seamless integration into CAD systems.",
      image: "/images/engineering-icon.png", // Replace with actual image path
    },
    {
      title: "Finance and Legal Documentation",
      description:
        "Ensure financial and legal records are digitized securely, making audits and compliance management easier than ever.",
      image: "/images/finance-icon.png", // Replace with actual image path
    },
    {
      title: "Bulk Scanning Capacity",
      description:
        "Handle up to 50,000 documents per day with our state-of-the-art bulk scanning solutions designed for speed and accuracy.",
      image: "/images/bulk-scan-icon.png", // Replace with actual image path
    },
  ];

  return (
    <div className="services_section_2 py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`box_main p-6 shadow-lg rounded-lg bg-white flex items-center space-x-6 ${
                index === 0 ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Left Section with Image */}
              <div className="left_main flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-24 w-24 rounded-md"
                />
              </div>

              {/* Right Section with Content */}
              <div className="right_main flex-grow">
                <h6 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h6>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
