import React from "react";

export default function Services() {
  const features = [
    {
      title: "Medical Record Digitization (MRD)",
      description:
        "Efficiently digitize and organize patient records, enabling quick access to medical histories while ensuring compliance with healthcare regulations.",
      image: "/SPTech/mrd-icon.webp", // Replace with actual image path
    },
    {
      title: "Banking and Loan Files",
      description:
        "Securely digitize critical banking documents and loan files for streamlined operations and easy retrieval.",
      image: "/SPTech/banking-icon.webp", // Replace with actual image path
    },
    {
      title: "Engineering Drawings",
      description:
        "High-resolution scanning of large engineering drawings with precise detail for seamless integration into CAD systems.",
      image: "/SPTech/engineering-icon.webp", // Replace with actual image path
    },
    {
      title: "Finance and Legal Documentation",
      description:
        "Ensure financial and legal records are digitized securely, making audits and compliance management easier than ever.",
      image: "/SPTech/finance-icon.webp", // Replace with actual image path
    },
    {
      title: "Bulk Scanning Capacity",
      description:
        "Handle up to 50,000 documents per day with our state-of-the-art bulk scanning solutions designed for speed and accuracy.",
      image: "/SPTech/bulk-scan-icon.webp", // Replace with actual image path
    },
  ];

  return (
    <div className="services_section_2 py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative box_main p-6 shadow-lg rounded-xl bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              style={{ background: "linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%)" }}
            >
              {/* Image Section */}
              <div className="flex flex-col items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-24 w-24 rounded-full border border-gray-200 transition-transform duration-300 group-hover:scale-110"
                />
                <h6 className="mt-4 text-lg  text-gray-200">
                  {feature.title}
                </h6>
              </div>

              {/* Content Section */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-white bg-opacity-90 p-4 transition-opacity duration-300">
                <h6 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h6>
                <p className="mt-2 text-gray-600 text-sm text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
