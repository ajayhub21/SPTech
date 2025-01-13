import React, { useState } from "react";

const faqItems = [
  {
    question: "1. What types of documents can you scan?",
    answer:
      "We can scan all types of documents, including invoices, contracts, blueprints, medical records, and more. Our scanners are equipped to handle various sizes and formats, ensuring high-quality output for every document.",
  },
  {
    question: "2. How secure is the digital archiving process?",
    answer:
      "Our digital archiving process uses advanced encryption technologies to safeguard your documents. We also comply with industry-standard security protocols to ensure your data remains confidential and protected.",
  },
  {
    question: "3. What file formats do you provide?",
    answer:
      "We offer a variety of file formats, including PDF, JPEG, PNG, and TIFF. If you have specific format requirements, we can accommodate those as well.",
  },
  {
    question: "4. Can I request hardcopy reproductions of scanned documents?",
    answer:
      "Absolutely! We provide high-quality printing services for your scanned documents upon request. You can choose from various paper types and sizes to suit your needs.",
  },
  {
    question: "5. How long does the scanning process take?",
    answer:
      "The duration of the scanning process depends on the volume and complexity of the documents. For standard volumes, we typically complete the process within 2-3 business days.",
  },
  {
    question:
      "6. Do you offer tailored solutions for unique document management needs?",
    answer:
      "Yes, we specialize in providing customized document management solutions. Whether you need specialized scanning, indexing, or storage options, we can create a solution tailored to your requirements.",
  },
  {
    question: "7. Is there a limit to the number of documents I can submit?",
    answer:
      "No, we handle both small and large-scale document scanning projects. Whether you have a few pages or several thousand documents, we can accommodate your needs.",
  },
  {
    question: "8. How do you ensure the quality of scanned documents?",
    answer:
      "We use high-resolution scanners and conduct thorough quality checks to ensure that your documents are digitized accurately and clearly. Our team also verifies the output before final delivery.",
  },
  {
    question: "9. What additional services do you provide?",
    answer:
      "In addition to scanning and archiving, we offer indexing, OCR (Optical Character Recognition), and cloud integration services. Let us know your requirements, and we’ll be happy to assist.",
  },
  {
    question: "10. Can I retrieve my digital files anytime?",
    answer:
      "Yes, you can access your digital files anytime through our secure platform. We provide easy-to-use tools for file retrieval and management.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Frequently
              <span className="text-transparent bg-clip-text bg-custom-gradient">
                Asked Questions
              </span>
            </h1>
          </div>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Have questions? We've got answers! Learn more about our services,
            processes, and how we ensure the best for our clients.
          </p>

          <div className="mt-12 space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="font-medium text-gray-800 text-lg">
                    {item.question}
                  </p>
                  <img
                    src="https://cdn.prod.website-files.com/61d565f8e34ebb4e5dae2da8/61fa558768e2c1617df79a1d_IC-Go%20Forward.svg"
                    alt="Toggle"
                    className={`h-6 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center container mx-auto px-6 mt-16 py-10 bg-custom-gradient rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">
              Want to Know More?
            </h2>
            <p className="mt-4 text-white">
              Contact us today to explore how our services can make document
              management seamless for you.
            </p>
            <button className="bg-custom-gradient text-white px-6 mt-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:-translate-y-1 hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
