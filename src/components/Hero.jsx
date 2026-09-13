import React, { useState, useEffect } from 'react';
import { Sparkles, Award, MessageSquare, Calendar, Users, Eye, TrendingUp, ChevronDown, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero() {
  // Target date for Durga Puja 2026 (Maha Shasthi ~ Oct 16, 2026)
  const targetDate = new Date('2026-10-16T00:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerFestiveConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f39c12', '#d9272e', '#f1c40f', '#e67e22']
    });
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-festive-gradient">
      {/* Ambient Flame & Glow Overlay Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-festive-gold/15 rounded-full blur-[140px] pointer-events-none pulse-aura"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-festive-crimson/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Decorative Traditional Motif Graphic Elements */}
      <div className="absolute top-24 left-6 hidden lg:block opacity-20 pointer-events-none">
        <div className="w-48 h-48 border border-festive-gold/40 rounded-full flex items-center justify-center animate-spin-slow">
          <div className="w-36 h-36 border border-dashed border-festive-amber/50 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Pill - Clicking navigates to Sponsorship Section */}
        <a 
          href="#sponsorship"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-festive-gold/50 text-festive-yellow text-xs sm:text-sm font-semibold mb-6 shadow-glow-gold animate-bounce-slow hover:border-festive-gold hover:scale-105 transition-all duration-300 cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-festive-gold group-hover:rotate-12 transition-transform" />
          <span className="font-bengali text-base">🎉 Celebrating 50th Year Golden Jubilee Durgotsav • ৫০তম বর্ষ সুবর্ণ জয়ন্তী</span>
          <span className="bg-festive-crimson text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full group-hover:bg-red-600 transition-colors shadow-sm">Sponsorship Open</span>
        </a>

        {/* Committee Bengali Title & Semantic English H1 for SEO */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-bengali text-festive-cream tracking-tight mb-4 leading-tight">
          বারুইপুর ভট্টাচার্য্যপাড়া <br className="hidden sm:block"/>
          <span className="text-gold-gradient drop-shadow-md">সার্বজনীন দুর্গোৎসব সমিতি</span>
          <span className="sr-only"> - Baruipur Durga Puja 2026 | Bhattacharya Para Puja Committee</span>
        </h1>

        {/* English Subheading */}
        <p className="text-base sm:text-xl md:text-2xl font-light text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Celebrating <strong className="text-festive-yellow font-semibold">50 Glorious Years</strong> of Durgotsav Heritage in Baruipur. Elevate your brand in front of <strong className="text-festive-cream font-semibold">100,000+ Festive Visitors</strong> during this historic Golden Jubilee!
        </p>

        {/* Live Countdown Timer */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="text-xs uppercase font-bold tracking-widest text-festive-gold/80 mb-3 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Countdown to 50th Golden Jubilee Maha Shasthi</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 glass-panel p-4 rounded-2xl border-festive-gold/30 shadow-2xl">
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-4xl font-extrabold text-festive-cream font-mono">{timeLeft.days}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold mt-1">Days</span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-4xl font-extrabold text-festive-gold font-mono">{timeLeft.hours}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold mt-1">Hours</span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-4xl font-extrabold text-festive-yellow font-mono">{timeLeft.minutes}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold mt-1">Mins</span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-4xl font-extrabold text-festive-crimson font-mono">{timeLeft.seconds}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold mt-1">Secs</span>
            </div>
          </div>
        </div>

        {/* Action Call to Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#sponsorship"
            onClick={triggerFestiveConfetti}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white btn-shimmer shadow-lg shadow-festive-crimson/40 hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <Award className="w-5 h-5 text-festive-yellow" />
            <span>Explore Sponsorship Packages</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-200 glass-panel hover:bg-white/10 border-festive-gold/30 hover:border-festive-gold transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-festive-gold" />
            <span>Contact Sponsorship Desk</span>
          </a>
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-panel p-4 rounded-xl border-festive-gold/20 flex flex-col items-center">
            <Users className="w-6 h-6 text-festive-gold mb-1" />
            <span className="text-2xl font-black text-white">100,000+</span>
            <span className="text-xs text-slate-400 font-medium">Estimated Footfall</span>
          </div>

          <div className="glass-panel p-4 rounded-xl border-festive-gold/20 flex flex-col items-center">
            <Eye className="w-6 h-6 text-festive-yellow mb-1" />
            <span className="text-2xl font-black text-white">200,000+</span>
            <span className="text-xs text-slate-400 font-medium">Digital & Outdoor Reach</span>
          </div>

          <div className="glass-panel p-4 rounded-xl border-festive-gold/40 flex flex-col items-center shadow-glow-gold">
            <Award className="w-6 h-6 text-festive-crimson mb-1" />
            <span className="text-2xl font-black text-festive-cream">50th Year</span>
            <span className="text-xs text-festive-yellow font-semibold">Golden Jubilee (সুবর্ণ জয়ন্তী)</span>
          </div>

          <div className="glass-panel p-4 rounded-xl border-festive-gold/20 flex flex-col items-center">
            <TrendingUp className="w-6 h-6 text-emerald-400 mb-1" />
            <span className="text-2xl font-black text-white">40+ Brands</span>
            <span className="text-xs text-slate-400 font-medium">Corporate Partners</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#sponsorship" className="text-slate-400 hover:text-festive-gold transition animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
