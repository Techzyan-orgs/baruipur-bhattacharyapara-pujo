import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ChevronRight, Instagram, Facebook } from 'lucide-react';

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: '2026 Theme', href: '#theme' },
    { name: 'Sponsorship Tiers', href: '#sponsorship' },
    { name: 'Brand Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Blurred Backdrop for the Outside Portion */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-300 xl:hidden animate-fadeIn"
          aria-hidden="true"
        />
      )}

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen
        ? 'bg-festive-dark/98 backdrop-blur-xl border-b border-festive-gold/20 py-2.5 sm:py-3 shadow-xl shadow-black/40' 
        : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-3 sm:py-5'
    }`}>
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 xl:gap-6">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 xl:flex-initial xl:shrink-0 group">
            <div className="relative shrink-0 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Baruipur Bhattacharya Para Durgotsav Logo" 
                className="h-9 w-9 sm:h-11 sm:w-11 object-contain drop-shadow-[0_2px_10px_rgba(243,156,18,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col min-w-0 xl:min-w-max xl:shrink-0">
              <span className="font-bengali text-xs xs:text-sm sm:text-base xl:text-lg font-bold text-festive-cream leading-tight tracking-wide group-hover:text-festive-yellow transition truncate xl:overflow-visible xl:whitespace-nowrap">
                বারুইপুর ভট্টাচার্য্যপাড়া সার্বজনীন দুর্গোৎসব সমিতি
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-festive-gold/90 tracking-wider uppercase font-sans truncate xl:overflow-visible xl:whitespace-nowrap">
                Baruipur Bhattacharya Para Durgotsav Samiti
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-6 shrink-0">
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

          {/* Social & CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0">
            {/* Direct Social Follow Badges */}
            <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/10 shadow-inner">
              <a
                href="https://www.facebook.com/share/17dEsSNs8Z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our official Facebook page"
                className="p-1.5 sm:p-2 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/40 hover:border-[#1877F2] transition-all hover:scale-110 shadow-sm group"
                title="Official Facebook Page"
              >
                <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/baruipurbhattacharyaparapuja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our official Instagram profile"
                className="p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#E4405F] hover:text-white border border-pink-500/30 hover:border-transparent transition-all hover:scale-110 shadow-sm group"
                title="Official Instagram Profile"
              >
                <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <a
              href="#sponsorship"
              className="relative inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white btn-shimmer shadow-lg shadow-festive-crimson/30 hover:scale-105 transition-transform whitespace-nowrap"
            >
              <Award className="w-4 h-4 text-festive-yellow shrink-0 animate-bounce" />
              <span>Sponsor Durgotsav</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-festive-gold hover:text-white bg-festive-gold/10 hover:bg-festive-gold/20 border border-festive-gold/30 transition focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-festive-dark/98 backdrop-blur-2xl border-b border-festive-gold/30 px-4 pt-3 pb-6 mt-2 shadow-2xl animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm sm:text-base font-medium text-slate-200 hover:bg-festive-gold/15 hover:text-festive-yellow transition flex items-center justify-between active:scale-[0.99]"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-festive-gold/60" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2 space-y-3">
              <a
                href="#sponsorship"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white btn-shimmer shadow-lg shadow-festive-crimson/30 active:scale-95 transition-transform"
              >
                <Award className="w-4 h-4 text-festive-yellow" />
                <span>Become a Sponsor</span>
              </a>

              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold text-festive-gold/80 tracking-wider block text-center mb-2">
                  Official Social Channels
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://www.facebook.com/share/17dEsSNs8Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/50 text-white text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95 shadow-md shadow-[#1877F2]/10"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/baruipurbhattacharyaparapuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 hover:from-amber-500/30 hover:via-pink-500/30 hover:to-purple-500/30 border border-pink-500/50 text-white text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95 shadow-md shadow-pink-500/10"
                  >
                    <Instagram className="w-4 h-4 text-[#E4405F]" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}

