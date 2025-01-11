const Pricing = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-12">
            Pricing Plans
          </h2>
  
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4">
                Basic Plan
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-6">$0.05 per page</p>
              <ul className="space-y-4 text-gray-600">
                <li>Up to 500 pages per month</li>
                <li>High-quality scanning</li>
                <li>Standard delivery time</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition">
                Get Started
              </button>
            </div>
  
            {/* Plan 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4">
                Premium Plan
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-6">$0.03 per page</p>
              <ul className="space-y-4 text-gray-600">
                <li>Up to 1500 pages per month</li>
                <li>Priority processing</li>
                <li>24-hour delivery time</li>
                <li>Discounted rates for bulk orders</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition">
                Get Started
              </button>
            </div>
  
            {/* Plan 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4">
                Enterprise Plan
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-6">$0.02 per page</p>
              <ul className="space-y-4 text-gray-600">
                <li>Unlimited pages per month</li>
                <li>Customizable scanning options</li>
                <li>Dedicated support</li>
                <li>Bulk order discounts available</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition">
                Contact Us
              </button>
            </div>
          </div>
  
          {/* Bulk Order Discount Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4">
              Bulk Order Discounts
            </h3>
            <p className="text-lg text-gray-600">
              We offer discounts for bulk orders! Contact us for special pricing on
              orders over 5000 pages.
            </p>
            <button className="mt-6 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  