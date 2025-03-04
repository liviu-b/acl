import React, { useEffect } from 'react';

const GDPRPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 pt-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">GDPR Policy for ACL-Smart Software</h1>
          <p className="text-gray-600 mb-8">Last updated: 05.02.2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p className="text-gray-700">
                This GDPR Policy outlines how ACL-Smart Software collects, processes, and protects personal data in compliance with the General Data Protection Regulation (GDPR). We are committed to safeguarding the privacy rights of our customers, employees, and partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Collection and Processing</h2>
              
              <h3 className="text-xl font-medium mb-2">Types of Personal Data Collected</h3>
              <p className="text-gray-700 mb-3">
                ACL-Smart Software collects and processes the following types of personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Names and contact information</li>
                <li>Email addresses</li>
                <li>IP addresses</li>
                <li>Usage data related to our software products</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">Purpose of Data Collection</h3>
              <p className="text-gray-700 mb-3">
                We collect and process personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Providing and improving our software products and services</li>
                <li>Customer support and communication</li>
                <li>Processing transactions and payments</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">Legal Basis for Processing</h3>
              <p className="text-gray-700 mb-3">
                Our legal bases for processing personal data include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Consent from the data subject</li>
                <li>Contractual necessity</li>
                <li>Legitimate business interests</li>
                <li>Legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Protection Measures</h2>
              <p className="text-gray-700 mb-3">
                ACL-Smart Software implements appropriate technical and organizational measures to ensure the security of personal data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>End-to-end encryption for data transmission and storage</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Subject Rights</h2>
              <p className="text-gray-700 mb-3">
                Under GDPR, individuals have the following rights regarding their personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Right to access their personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, individuals can contact our Data Protection Officer at office@acl-smartsoftware.tech
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
              <p className="text-gray-700">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. Once the retention period expires, personal data is securely deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Third-Party Data Sharing</h2>
              <p className="text-gray-700">
                ACL-Smart Software may share personal data with trusted third-party service providers who assist us in operating our business and providing services to our customers. These third parties are contractually obligated to protect personal data in compliance with GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">International Data Transfers</h2>
              <p className="text-gray-700">
                If personal data is transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Breach Notification</h2>
              <p className="text-gray-700">
                In the event of a personal data breach, ACL-Smart Software will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk to the rights and freedoms of individuals, we will also notify the affected individuals without undue delay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Changes to this Policy</h2>
              <p className="text-gray-700">
                We reserve the right to update this GDPR Policy as needed. Any changes will be communicated to our customers and partners through our website or email notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
              <p className="text-gray-700 mb-3">
                For any questions or concerns regarding this GDPR Policy or our data protection practices, please contact:
              </p>
              <div className="mt-3">
                <p className="font-semibold">Data Protection Officer</p>
                <p>ACL-Smart Software</p>
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

export default GDPRPolicy;