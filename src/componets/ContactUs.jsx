import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://alpha.docon.co.in/api/v1/campaign/promo/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            Contact Us for Inquiries or Custom Quotes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Let us know a little about yourself, and we’ll reach out to discuss how we can work together to drive your success.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-white shadow-xl rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:text-customText focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:text-customText focus:outline-none"
                  required
                />
              </div>

              {/* City Field */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:text-customText focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Terms and Submit Button */}
            <div className="mt-6 text-sm text-gray-600">
              By submitting your information, you agree to our{" "}
              <a href="/Privacy" className="text-customText hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/Terms" className="text-customText hover:underline">
                Terms of Use
              </a>
              .
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-custom-gradient text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              Submit
            </button>
          </form>

          {/* Success and Error Messages */}
          {formStatus === "success" && (
            <div className="mt-4 text-center text-green-600 font-medium">
              Thank you for your request. We will contact you shortly.
            </div>
          )}
          {formStatus === "error" && (
            <div className="mt-4 text-center text-red-600 font-medium">
              Oops! Something went wrong while submitting the form.
            </div>
          )}
        </div>

        {/* Contact Details Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Contact Details
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 font-medium">Phone</p>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +1 234 567 890
              </a>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 font-medium">Email</p>
              <a href="mailto:info@yourbusiness.com" className="text-blue-600 hover:underline">
                info@yourbusiness.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 font-medium">Address</p>
              <p className="text-gray-600">123 Your Business St, City, Country</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Follow Us</h2>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="https://twitter.com" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
            <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
              Instagram
            </a>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800">Our Location</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_URL"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
