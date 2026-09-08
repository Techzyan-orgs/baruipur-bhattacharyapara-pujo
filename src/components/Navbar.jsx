import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Sponsorship Tiers', href: '#sponsorship' },
    { name: 'Brand Impact', href: '#impact' },
    { name: 'Theme & Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-festive-dark/95 backdrop-blur-xl border-b border-festive-gold/20 py-3 shadow-xl shadow-black/40' : 'bg-gradient-to-b from-black/90 to-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative shrink-0 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Baruipur Bhattacharya Para Durgotsav Logo" 
                className="h-11 w-11 sm:h-13 sm:w-13 object-contain drop-shadow-[0_2px_10px_rgba(243,156,18,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bengali text-base sm:text-lg lg:text-xl font-bold text-festive-cream leading-tight tracking-wide group-hover:text-festive-yellow transition whitespace-nowrap">
                বারুইপুর ভট্টাচার্য্যপাড়া সার্বজনীন দুর্গোৎসব সমিতি
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-festive-gold/90 tracking-wider uppercase font-sans whitespace-nowrap">
                Baruipur Bhattacharya Para Durgotsav Samiti
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs 2xl:text-sm font-medium text-slate-300 hover:text-festive-yellow transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festive-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#sponsorship"
              className="relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white btn-shimmer shadow-lg shadow-festive-crimson/30 hover:scale-105 transition-transform whitespace-nowrap"
            >
              <Award className="w-4 h-4 text-festive-yellow shrink-0 animate-bounce" />
              <span>Sponsor Durgotsav</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-festive-gold" /> : <Menu className="w-6 h-6 text-festive-gold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-festive-card/95 backdrop-blur-2xl border-b border-festive-gold/20 px-4 pt-4 pb-6 mt-2 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-festive-gold/10 hover:text-festive-yellow transition flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-festive-gold/50" />
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#sponsorship"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white btn-shimmer shadow-lg shadow-festive-crimson/30"
              >
                <Award className="w-4 h-4 text-festive-yellow" />
                <span>Become a Sponsor</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

