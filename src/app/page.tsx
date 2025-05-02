import React from 'react';
import Navber from './components/Navber';
import Home from './components/Home';
import Programs from './components/Programs';
import Everyone from './components/Everyone';
import Success from './components/Success';
import Partners from './components/Partners';
import About from './components/About';
import Values from './components/Values';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/Backtotop';

export default function Page() {
  return (
    <div>
      <Navber />
      <Home />
      <Programs />
      <Everyone />
      <Success />
      <Partners />
      <About />
      <Values />
      <Team />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
