import React from "react";

function Services() {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 lg:px-8 py-12">
      {/* Heading Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Your documents <br />
          are in{" "}
          <span className="text-transparent bg-clip-text bg-custom-gradient">
            safe hands
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="text-center max-w-3xl mt-6">
        <p className="text-lg md:text-xl text-gray-600">
          Your documents are valuable. We ensure they are handled with the
          utmost care and security, using advanced technology to safeguard them
          and meet your requirements.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          {
            title: "High-Quality Scanning",
            description:
              "We use state-of-the-art scanners to provide crystal-clear digital copies of your documents.",
            icon: "https://cdn.prod.website-files.com/61dc2de9c3225e63b12473b8/625fbf7b7e151a85d636fdbd_Doctor_Icons-04.svg",
          },
          {
            title: "Secure Digital Storage",
            description:
              "Your digital files are stored in secure environments, ensuring confidentiality and easy access.",
            icon: "https://cdn.prod.website-files.com/61dc2de9c3225e63b12473b8/625fbfb77e151a791537045d_Doctor_Icons-02.svg",
          },
          {
            title: "Hardcopy Reproduction",
            description:
              "Need a physical copy? We offer high-quality printing services to reproduce your scanned documents.",
            icon: "https://cdn.prod.website-files.com/61dc2de9c3225e63b12473b8/625fbfc51a44537f8e7266d5_Doctor_Icons-01.svg",
          },
          {
            title: "Tailored Solutions",
            description:
              "We provide customized document management solutions tailored to your specific needs.",
            icon: "https://cdn.prod.website-files.com/61dc2de9c3225e63b12473b8/625fbfd1bc19adf6c469afb3_Doctor_Icons-03.svg",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white shadow-md p-6 rounded-lg transform hover:scale-105 transition-transform"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-16 w-16 object-contain mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-12">
        <a
          href="#"
          className="bg-custom-gradient text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}

export default Services;
