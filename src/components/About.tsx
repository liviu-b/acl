import React from 'react';
import { Building2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-700 p-6 rounded-lg shadow-lg">
                <Building2 className="h-12 w-12 text-gray-300" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About ACL-Smart Software</h2>
            <p className="text-gray-600 mb-6">
              ACL-Smart Software operates in the IT sector, specializing in the development of innovative software solutions and complete IT services. We combine technical expertise with business acumen to deliver solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced developers, architects, and consultants work collaboratively to address complex challenges and create software that exceeds expectations. We pride ourselves on our agile approach, attention to detail, and commitment to quality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses through innovative technology solutions that drive growth and efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of custom software solutions that transform businesses in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;