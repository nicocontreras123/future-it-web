import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Technology from './Technology';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

const Layout = () => {
  return (
    <div className="bg-cyber-base min-h-screen font-body text-cyber-text-primary overflow-x-hidden">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-violet opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-violet opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyber-violet opacity-5 blur-[180px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Technology />
          <AboutUs />
          <ContactForm />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
};

export default Layout;
