const Blog = () => {
    return (
      <section className="py-16  text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-custom-gradient mb-12">
            Blog & Resources
          </h2>
  
          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1: Benefits of Digital Archiving */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-custom-gradient mb-4">
                Benefits of Digital Archiving
              </h3>
              <p className="text-gray-600 mb-4">
                Digital archiving helps businesses reduce storage costs and ensures easy access to documents. Learn about the key advantages of going digital.
              </p>
              <a href="#" className="text-transparent bg-clip-text bg-custom-gradient hover:text-red-500 font-semibold">
                Read More →
              </a>
            </div>
  
            {/* Article 2: How to Organize Scanned Documents */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-custom-gradient mb-4">
                How to Organize Scanned Documents
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to create an efficient folder structure and naming conventions for your scanned documents to improve workflow and retrieval.
              </p>
              <a href="#" className="text-transparent bg-clip-text bg-custom-gradient hover:text-red-500 font-semibold">
                Read More →
              </a>
            </div>
  
            {/* Article 3: The Importance of Document Security */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-custom-gradient mb-4">
                The Importance of Document Security
              </h3>
              <p className="text-gray-600 mb-4">
                Secure your digital documents by learning about best practices for protecting sensitive information from unauthorized access and loss.
              </p>
              <a href="#" className="text-transparent bg-clip-text bg-custom-gradient hover:text-red-500 font-semibold">
                Read More →
              </a>
            </div>
          </div>
  
          {/* Additional Resources Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-custom-gradient mb-4">
              Explore More Resources
            </h3>
            <p className="text-lg text-gray-600">
              Check out our other articles, guides, and resources to help you with digital document management and secure archiving.
            </p>
            <a
              href="#"
              className="mt-10 relative top-3 px-6 py-2 bg-custom-gradient to-red-500 text-white rounded-lg shadow-md hover:scale-105 transition"
            >
              View All Resources
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Blog;
  