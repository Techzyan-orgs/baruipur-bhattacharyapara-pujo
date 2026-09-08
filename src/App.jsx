import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SponsorMetrics from './components/SponsorMetrics';
import SponsorshipTiers from './components/SponsorshipTiers';
import ThemeStory from './components/ThemeStory';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DhaakFloatingWidget from './components/DhaakFloatingWidget';
import { DhaakAudioProvider } from './context/DhaakAudioContext';

export default function App() {
  const [selectedTier, setSelectedTier] = useState('Platinum Partner (₹75,000)');

  return (
    <DhaakAudioProvider>
      <div className="min-h-screen bg-festive-dark text-slate-100 font-sans selection:bg-festive-gold selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <SponsorshipTiers onSelectTier={setSelectedTier} />
          <SponsorMetrics />
          <ThemeStory />
          <Gallery />
          <LocationMap />
          <ContactSection selectedTier={selectedTier} setSelectedTier={setSelectedTier} />
        </main>
        <Footer />
        <DhaakFloatingWidget />
      </div>
    </DhaakAudioProvider>
  );
}

