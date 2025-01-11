import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
        Effortless Document Scanning Solutions for Your Business Needs
      </h1>
      <p className="text-gray-700 text-lg text-center mb-8 max-w-xl">
        Streamline your document management with advanced scanning technology.
      </p>
      <img 
        src="/path-to-your-image.jpg" 
        alt="Document Scanning Illustration" 
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;
