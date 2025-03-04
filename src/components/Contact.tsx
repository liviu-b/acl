import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title') || 'Contact Us'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle') || 'Have a question or want to discuss a project? Get in touch with our team.'}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.info') || 'Contact Information'}</h3>
              
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-gray-700 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.address.title') || 'Address'}</h4>
                  <p className="text-gray-600">{t('contact.address.value') || 'Hunedoara, Petroșani'}<br />{t('contact.address.city') || '332014'}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="h-6 w-6 text-gray-700 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.phone.title') || 'Phone'}</h4>
                  <p className="text-gray-600">{t('contact.phone.value') || '+40 758 158 490'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-gray-700 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.email.title') || 'Email'}</h4>
                  <p className="text-gray-600">{t('contact.email.value') || 'office@acl-smartsoftware.tech'}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-10">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">{t('contact.form.name') || 'Name'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">{t('contact.form.email') || 'Email'}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">{t('contact.form.subject') || 'Subject'}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">{t('contact.form.message') || 'Message'}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300"
              >
                {t('contact.form.submit') || 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;