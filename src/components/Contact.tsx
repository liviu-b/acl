import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* === Background Identic cu Services.tsx & FAQ.tsx === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-tech text-3xl md:text-5xl font-bold mb-6 tech-gradient-text">
            {t('contact.title') || 'Contact Us'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed px-2">
            {t('contact.subtitle') || 'Have a question or want to discuss a project? Get in touch with our team.'}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info Card */}
          <div className="lg:w-1/3">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 h-full shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              
              {/* Decorative background blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl font-bold text-white mb-8">
                {t('contact.info') || 'Contact Information'}
              </h3>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start group/item">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:scale-110 transition-all duration-300 border border-blue-500/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('contact.address.title') || 'Address'}</h4>
                    <p className="text-gray-200 font-medium">
                      {t('contact.address.value') || 'Hunedoara, Petroșani'}
                      <br />
                      <span className="text-gray-400 font-normal">{t('contact.address.city') || '332014'}</span>
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start group/item">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover/item:bg-purple-500/20 group-hover/item:scale-110 transition-all duration-300 border border-purple-500/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('contact.phone.title') || 'Phone'}</h4>
                    <p className="text-gray-200 font-medium">{t('contact.phone.value') || '+40 758 154 490'}</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start group/item">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover/item:bg-emerald-500/20 group-hover/item:scale-110 transition-all duration-300 border border-emerald-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('contact.email.title') || 'Email'}</h4>
                    <a href="mailto:office@acl-smartsoftware.tech" className="text-gray-200 font-medium hover:text-blue-400 transition-colors break-all">
                      {t('contact.email.value') || 'office@acl-smartsoftware.tech'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">
                    {t('contact.form.name') || 'Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-100 placeholder-gray-600 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
                    {t('contact.form.email') || 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-100 placeholder-gray-600 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6 space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">
                  {t('contact.form.subject') || 'Subject'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-100 placeholder-gray-600 transition-all duration-300"
                  placeholder="Project inquiry..."
                  required
                />
              </div>
              
              <div className="mb-8 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">
                  {t('contact.form.message') || 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-100 placeholder-gray-600 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <span>{t('contact.form.submit') || 'Send Message'}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;