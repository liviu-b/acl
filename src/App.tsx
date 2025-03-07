import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import GDPRPolicy from './components/GDPRPolicy';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Global background gradients */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
          <div className="absolute inset-0 pattern-grid opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/gdpr-policy" element={<GDPRPolicy />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          </Routes>
          <Footer />
          <WhatsAppChat />
        </div>
      </div>
    </Router>
  );
}

export default App;