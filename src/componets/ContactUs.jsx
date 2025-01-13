import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    email: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Validate phone number (only digits)
  const validatePhoneNumber = (number) => /^\d+$/.test(number);

  // Validate email format
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error for current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate phone number
    if (!validatePhoneNumber(formData.mobile)) {
      newErrors.mobile = "Phone number must contain only digits.";
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Send the form data to the backend
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", mobile: "", city: "", email: "" }); // Reset form
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
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-custom-gradient text-gray-800">
            Contact Us for Inquiries or Custom Quotes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Let us know a little about yourself, and we’ll reach out to discuss how we can work together to drive your success.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-white shadow-xl rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* City Field */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Terms and Submit Button */}
            <div className="mt-6 text-sm text-gray-600">
              By submitting your information, you agree to our{" "}
              <a href="/SPTech/Privacy" className="text-transparent bg-clip-text bg-custom-gradient hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/Terms" className="text-transparent bg-clip-text bg-custom-gradient hover:underline">
                Terms of Use
              </a>
              .
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:shadow-lg"
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

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-700">Find Us Here:</h2>
          <div className="mt-4">
            <iframe
              title="SP Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.7981136804!2d80.12702192390835!3d12.951322400392057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f6b56a0f0a97%3A0x5eb38d1234567890!2sSP%20Technologies%2C%20No%204%20NSK%20Nagar%2C%20Rp%20Road%2C%20Chromepet%2C%20Chennai%2044!5e0!3m2!1sen!2sin!4v1671234567890"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
