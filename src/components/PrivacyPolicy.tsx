import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 pt-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy for ACL-Smart Software</h1>
          <p className="text-gray-600 mb-8">Last updated: 05.02.2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p className="text-gray-700">
                Welcome to ACL-Smart Software ("we", "us", or "our"). At ACL-Smart Software, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and protection of data when you use our services or visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p className="text-gray-700 mb-3">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Name and contact details (e.g., email address, phone number, mailing address)</li>
                <li>Business information (e.g., company name, job title)</li>
                <li>Account credentials (e.g., username and password)</li>
                <li>Payment information (e.g., credit card details, billing address)</li>
                <li>Any other information you provide voluntarily</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">
                When you visit our website or use our services, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Log data and usage statistics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Providing and improving our IT services and products</li>
                <li>Customizing user experience</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with clients about services, updates, and support</li>
                <li>Analyzing usage patterns to enhance our offerings</li>
                <li>Ensuring the security and integrity of our systems</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-3">
                ACL-Smart Software may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Service providers and subcontractors who assist in our operations</li>
                <li>Payment processors for handling financial transactions</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners, with your consent, for specific collaborative projects</li>
              </ul>
              <p className="text-gray-700">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
              <p className="text-gray-700 mb-3">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Encryption of sensitive information</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccuracies in your data</li>
                <li>Request deletion of your data</li>
                <li>Object to certain data processing activities</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700">
                We use cookies and similar technologies to enhance user experience and collect usage data. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. We will notify you of any significant changes by posting a prominent notice on our website or sending you a direct communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-3">
                <p className="font-semibold">ACL-Smart Software</p>
                <p>Email: office@acl-smartsoftware.tech</p>
                <p>Phone: +40 758 154 490</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;