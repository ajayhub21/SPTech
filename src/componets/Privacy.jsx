import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        
        <p className="text-gray-700 mb-4">
          At SP Technologies, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard the data you share with us when
          using our document scanning services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Personal Information: Name, contact information (email, phone number), and location details.</li>
          <li>Scanned Documents: Any information contained within the documents you provide for scanning.</li>
          <li>Technical Data: IP address, browser type, and usage data to improve our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>To provide and enhance our document scanning services.</li>
          <li>To communicate with you regarding your requests or inquiries.</li>
          <li>To analyze service performance and improve our offerings.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Data Security
        </h2>
        <p className="text-gray-700">
          We implement strict security measures to protect your data from
          unauthorized access, alteration, disclosure, or destruction. However,
          no method of electronic storage or transmission over the internet is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Sharing Your Information
        </h2>
        <p className="text-gray-700">
          We do not sell, trade, or rent your personal information to others.
          We may share information with third parties when necessary to provide
          our services or comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Your Rights and Choices
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Access and Correction: You can request access to or correction of your personal information.</li>
          <li>Data Deletion: You can request that we delete your personal data, subject to legal and contractual obligations.</li>
          <li>Marketing Preferences: You can opt out of marketing communications at any time.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and significant updates will be communicated
          via email or our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact
          us at:
        </p>
        <address className="text-gray-700 mt-2">
          <strong>SP Technologies</strong><br />
          No: 4 NSK Nagar, RP Road, Hasthinapuram, Chrompet, Chennai - 44<br />
          Email: <a href="mailto:support@sptechnologies.com" className="text-blue-600 hover:underline">support@sptechnologies.com</a><br />
          Phone: +91-9876543210
        </address>
      </div>
    </div>
  );
};

export default Privacy;
