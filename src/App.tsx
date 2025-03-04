import React from 'react';
import { ArrowDown, Code, Wrench, Globe, Headset as HeadsetHelp, Building2 } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import GDPRPolicy from './components/GDPRPolicy';
import HomePage from './components/HomePage';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/gdpr-policy" element={<GDPRPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  );
}

export default App;