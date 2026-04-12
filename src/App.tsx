import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Hospitals from './components/Hospitals';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        跳到主要内容
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Services />
        <Hospitals />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
