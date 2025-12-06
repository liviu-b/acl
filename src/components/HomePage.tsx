import React from 'react';
import Hero from './Hero';
import About from './About';
import FAQ from './FAQ';
import Services from './Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FAQ />
    </>
  );
};

export default HomePage;