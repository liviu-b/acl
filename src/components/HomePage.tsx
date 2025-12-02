import React from 'react';
import Hero from './Hero';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact'; // Recomand să adaugi și Contact aici
import Services from './Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact /> 
    </>
  );
};

export default HomePage;