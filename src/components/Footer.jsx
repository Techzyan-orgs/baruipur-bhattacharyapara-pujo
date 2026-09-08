import React from 'react';
import { Heart, Sparkles, Award, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-400 border-t border-festive-gold/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Committee Seal Logo"
                className="h-12 w-12 object-contain drop-shadow-[0_2px_8px_rgba(243,156,18,0.3)]"
              />
              <div>
                <h3 className="font-bengali text-lg font-bold text-festive-cream leading-snug">
                  বারুইপুর ভট্টাচার্য্যপাড়া সার্বজনীন দুর্গোৎসব সমিতি
                </h3>
                <span className="text-xs text-festive-gold font-semibold uppercase tracking-wider block">
                  Baruipur Bhattacharya Para Durgotsav
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              South 24 Parganas' premier festive cultural celebration & high-visibility corporate sponsorship venue. Bringing community and brands together.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-bengali">
                সবাইকে শারদীয়ার প্রীতি ও আন্তরিক শুভেচ্ছা 🌸
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-festive-gold/30 pb-2 w-max">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#overview" className="hover:text-festive-gold transition">Overview & Countdown</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Sponsorship Packages</a></li>
              <li><a href="#impact" className="hover:text-festive-gold transition font-semibold text-festive-yellow">Brand ROI & Reach</a></li>
              <li><a href="#gallery" className="hover:text-festive-gold transition">Pandal & Media Gallery</a></li>
              <li><a href="#location" className="hover:text-festive-gold transition">Venue & Google Map</a></li>
              <li><a href="#contact" className="hover:text-festive-gold transition">Sponsorship Inquiry</a></li>
            </ul>
          </div>

          {/* Sponsorship Tiers */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-festive-gold/30 pb-2 w-max">
              Sponsorship Tiers
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Title Sponsor (₹2,50,000+)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Powered By (₹1,50,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Platinum Partner (₹75,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Gold Partner (₹40,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Silver & Stall (₹20,000)</a></li>
            </ul>
          </div>

          {/* Official Email & Address */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-festive-gold/30 pb-2 w-max">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Email Inquiries</span>
                <a href="mailto:bhattacharyaparadurgapuja@gmail.com" className="text-festive-yellow hover:underline">
                  bhattacharyaparadurgapuja@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Location</span>
                <span className="text-slate-300">Bhattacharya Para Ground, beside Rabindra Bhaban, Baruipur, WB 700144</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Baruipur Bhattacharya Para Sarbojanin Durgotsav Samiti. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Crafted with devotion for Sharodotsav 2026</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-panel hover:bg-festive-gold hover:text-black transition border-festive-gold/30"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
