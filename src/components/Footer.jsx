import React from 'react';
import { Heart, Sparkles, Award, MapPin, Mail, ArrowUp, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-400 border-t border-festive-gold/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
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

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-bengali mb-3">
                সবাইকে শারদীয়ার প্রীতি ও আন্তরিক শুভেচ্ছা 🌸
              </span>

              <div className="pt-1">
                <span className="text-[11px] uppercase font-bold text-festive-gold tracking-wider block mb-2.5">
                  Official Social Channels • যুক্ত থাকুন
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://www.facebook.com/share/17dEsSNs8Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2] border border-[#1877F2]/50 hover:border-[#1877F2] text-white text-xs font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md shadow-[#1877F2]/10 group"
                    title="Baruipur Bhattacharya Para Durgotsav on Facebook"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/baruipurbhattacharyaparapuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 border border-pink-500/50 hover:border-transparent text-white text-xs font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md shadow-pink-500/10 group"
                    title="Baruipur Bhattacharya Para Durgotsav on Instagram"
                  >
                    <Instagram className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-festive-gold/30 pb-2 w-max">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#overview" className="hover:text-festive-gold transition">Overview & Countdown</a></li>
              <li><a href="#theme" className="hover:text-festive-gold transition text-festive-yellow font-semibold">2026 Puja Theme ("অনুভূতি")</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Sponsorship Packages</a></li>
              <li><a href="#impact" className="hover:text-festive-gold transition">Brand ROI & Reach</a></li>
              <li><a href="#gallery" className="hover:text-festive-gold transition">Pandal & Media Gallery</a></li>
              <li><a href="#location" className="hover:text-festive-gold transition">Venue & Google Map</a></li>
              <li><a href="#contact" className="hover:text-festive-gold transition">Sponsorship Inquiry</a></li>
            </ul>
          </div>

          {/* Sponsorship Tiers (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-festive-gold/30 pb-2 w-max">
              Sponsorship Tiers
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Title Sponsor (₹2,00,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Powered By (₹1,00,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Platinum Partner (₹50,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Gold Partner (₹30,000)</a></li>
              <li><a href="#sponsorship" className="hover:text-festive-gold transition">Silver & Stall (₹20,000)</a></li>
            </ul>
          </div>

          {/* Official Email & Address (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-festive-gold/30 pb-2 w-max">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Email Inquiries</span>
                <a 
                  href="mailto:bhattacharyaparadurgapuja@gmail.com" 
                  className="text-festive-yellow hover:underline text-[12px] sm:text-xs block leading-relaxed [overflow-wrap:anywhere]"
                >
                  bhattacharyaparadurgapuja<wbr />@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Official WhatsApp</span>
                <div className="flex flex-col gap-1 text-slate-300">
                  <a href="https://wa.me/916901264300" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1.5">+91 69012 64300 <span className="text-[10px] text-emerald-400 font-semibold">(WhatsApp)</span></a>
                  <a href="https://wa.me/918697555684" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1.5">+91 86975 55684 <span className="text-[10px] text-emerald-400 font-semibold">(WhatsApp)</span></a>
                </div>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Location</span>
                <span className="text-slate-300 block leading-relaxed">Bhattacharya Para Ground, beside Rabindra Bhaban, Baruipur, WB 700144</span>
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
