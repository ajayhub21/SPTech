import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-custom-gradient mb-8">
          About Us
        </h2>

        {/* Your Story */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl text-transparent bg-clip-text bg-custom-gradient mb-4">Our Story</h3>
            <p className="text-lg leading-relaxed">
              SP Technology started with a vision to provide seamless and efficient document scanning services. With years of expertise, we ensure top-quality service for businesses and individuals looking for reliable digital document solutions.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="public/sideimg2.webp"
              alt="Company Story"
              className="w-full max-w-sm h-auto rounded-lg shadow-lg object-cover" // added max-w-sm to make the image smaller and responsive
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-custom-gradient mb-4">
            Mission & Vision
          </h3>
          <p className="text-lg text-center leading-relaxed mx-auto max-w-2xl">
            Our mission is to transform document management by providing fast, secure, and user-friendly scanning services. We aim to be the leader in digital document solutions, helping our clients boost productivity and reduce costs.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl text-transparent bg-clip-text bg-custom-gradient mb-4">Speed</h4>
            <p>We pride ourselves on delivering fast results without compromising quality. Your documents will be scanned and ready in no time.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl text-transparent bg-clip-text bg-custom-gradient mb-4">Accuracy</h4>
            <p>Our technology ensures precise and accurate scanning, preserving every detail of your documents for future use.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl text-transparent bg-clip-text bg-custom-gradient mb-4">Affordability</h4>
            <p>We offer competitive pricing without compromising the quality of service, making our solutions affordable for businesses of all sizes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
