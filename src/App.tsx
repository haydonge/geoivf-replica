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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
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
