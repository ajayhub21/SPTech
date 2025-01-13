const Terms = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          Welcome to SP Technologies! By using our website and services, you
          agree to be bound by the following terms and conditions. Please read
          them carefully before accessing or using our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          1. General Terms
        </h2>
        <p className="text-gray-700">
          By accessing this website, you acknowledge that you have read,
          understood, and agreed to these terms. If you do not agree with these
          terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          2. Services Offered
        </h2>
        <p className="text-gray-700">
          SP Technologies provides document scanning, digitization, and related
          services. We strive to ensure accurate and efficient service delivery
          but do not guarantee error-free processing of documents.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          3. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Ensure all documents provided are legally permissible for scanning
            and processing.
          </li>
          <li>
            Do not submit any material that is illegal, harmful, or infringes on
            third-party rights.
          </li>
          <li>
            Maintain confidentiality of your account details when provided
            access to our online portal.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          4. Intellectual Property
        </h2>
        <p className="text-gray-700">
          All content on this website, including text, graphics, logos, and
          software, is the property of SP Technologies or its content suppliers
          and is protected by copyright, trademark, and other intellectual
          property laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-700">
          SP Technologies is not liable for any direct, indirect, incidental, or
          consequential damages arising from the use or inability to use our
          services, including but not limited to loss of data or revenue.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          6. Privacy
        </h2>
        <p className="text-gray-700">
          Your use of our services is subject to our{" "}
          <a href="/Privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          , which explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          7. Modifications to Terms
        </h2>
        <p className="text-gray-700">
          We reserve the right to modify these terms at any time. Any changes
          will be posted on this page, and your continued use of our services
          constitutes acceptance of such changes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          8. Governing Law
        </h2>
        <p className="text-gray-700">
          These terms are governed by the laws of India. Any disputes arising
          from the use of our services will be subject to the jurisdiction of
          courts located in Chennai, Tamil Nadu.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-700">
          If you have any questions regarding these terms, please contact us at:
        </p>
        <address className="text-gray-700 mt-2">
          <strong>SP Technologies</strong>
          <br />
          No: 4 NSK Nagar, RP Road, Hasthinapuram, Chrompet, Chennai - 44
          <br />
          Email:{" "}
          <a
            href="mailto:support@sptechnologies.com"
            className="text-blue-600 hover:underline"
          >
            support@sptechnologies.com
          </a>
          <br />
          Phone: +91-9876543210
        </address>
      </div>
    </div>
  );
};

export default Terms;
