/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Blog from './components/Blog';
import VendorForm from './components/VendorForm';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header isScrolled={isScrolled} lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <HowItWorks lang={lang} />
        <Features lang={lang} />
        <Blog lang={lang} />
        <VendorForm lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

