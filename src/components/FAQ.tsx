import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`ml-4 p-1 rounded-full border transition-all duration-300 ${isOpen ? 'bg-blue-500/20 border-blue-400 text-blue-400' : 'border-white/10 text-gray-400 group-hover:border-white/30'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-900">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Header Section */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="inline-flex items-center justify-center p-3 mb-6 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <HelpCircle size={24} />
              </div>
              <h2 className="font-tech text-3xl md:text-4xl font-bold mb-6 tech-gradient-text">
                {t('faq.title')}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {t('faq.subtitle')}
              </p>
              
              {/* Optional: Call to Action small card */}
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-white font-medium mb-2">{t('faq.moreQuestions')}</p>
                <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                  {t('faq.contactUs')} <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="lg:w-2/3">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;