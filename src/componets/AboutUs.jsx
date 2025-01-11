import {
  BoltIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <section className="text-gray-800">
      <div className="container mx-auto px-6">
        {/* <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-custom-gradient mb-8">
          About Us
        </h2> */}
        <div className="py-16 bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
          {/* Hero Section */}
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-custom-gradient leading-tight mb-6">
                Our Story
              </h1>
              <p className="text-gray-700 text-lg mb-8 max-w-xl">
                SP Technology started with a vision to provide seamless and
                efficient document scanning services. With years of expertise,
                we ensure top-quality service for businesses and individuals
                looking for reliable digital document solutions
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
              <div className="relative w-full max-w-md transform -translate-x-8">
                <img
                  src="/aboutus.jpg"
                  alt="Document Scanning Solutions"
                  className="w-full h-auto rounded-xl shadow-lg object-cover transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Your Story */}

        {/* Mission & Vision */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg border border-blue-200 shadow-md">
          <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-custom-gradient mb-4">
            Mission & Vision
          </h3>
          <p className="text-lg text-center text-gray-600 leading-relaxed mx-auto max-w-2xl">
            Our mission is to transform document management by providing fast,
            secure, and user-friendly scanning services. We aim to be the leader
            in digital document solutions, helping our clients boost
            productivity and reduce costs.
          </p>
        </div>

        {/* Why Choose Us */}
        <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-custom-gradient mb-8">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-8">
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <BoltIcon className="h-12 w-12 text-blue-500" />
            </div>
            <h4 className="text-xl text-transparent bg-clip-text bg-custom-gradient mb-4">
              Speed
            </h4>
            <p className="text-gray-600">
              We pride ourselves on delivering fast results without compromising
              quality. Your documents will be scanned and ready in no time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <CheckCircleIcon className="h-12 w-12 text-green-500" />
            </div>
            <h4 className="text-xl text-transparent bg-clip-text bg-custom-gradient mb-4">
              Accuracy
            </h4>
            <p className="text-gray-600">
              Our technology ensures precise and accurate scanning, preserving
              every detail of your documents for future use.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <CurrencyDollarIcon className="h-12 w-12 text-yellow-500" />
            </div>
            <h4 className="text-xl text-transparent bg-clip-text bg-custom-gradient mb-4">
              Affordability
            </h4>
            <p className="text-gray-600">
              We offer competitive pricing without compromising the quality of
              service, making our solutions affordable for businesses of all
              sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
