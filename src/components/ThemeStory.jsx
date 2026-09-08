import React from 'react';
import { Sparkles, Compass, Flame, Flower2, Heart, Award } from 'lucide-react';

export default function ThemeStory() {
  return (
    <section className="py-20 bg-festive-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-festive-crimson/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Theme Graphic Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-festive-gold via-festive-crimson to-festive-amber opacity-60 blur-lg group-hover:opacity-90 transition duration-500"></div>
              
              <div className="relative glass-panel rounded-3xl p-8 border-festive-gold/30 text-center">
                <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Committee Seal Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_4px_20px_rgba(243,156,18,0.3)] hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                <span className="text-xs uppercase tracking-widest font-bold text-festive-gold block mb-2">
                  শারদীয় ভাবনা • Theme Highlight 2026
                </span>
                
                <h3 className="text-2xl font-bold font-bengali text-festive-cream mb-4">
                  "ঐতিহ্যে অন্বেষণ, আলোক উদ্ভাসনে মা দুর্গার আবাহন"
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                  "Honoring timeless Bengali art forms, eco-conscious traditional clay idols, and radiant light architecture that inspires unity."
                </p>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center text-[10px] font-semibold text-festive-yellow">
                  <div className="p-2 rounded-lg bg-black/40">
                    <Flame className="w-4 h-4 mx-auto text-festive-gold mb-1" />
                    <span>Dhunuchi Naach</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40">
                    <Flower2 className="w-4 h-4 mx-auto text-festive-crimson mb-1" />
                    <span>Shiuli & Alpona</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40">
                    <Heart className="w-4 h-4 mx-auto text-pink-400 mb-1" />
                    <span>Community Bhog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/20 border border-festive-gold/40 text-festive-yellow text-xs font-semibold shadow-glow-gold">
              <Compass className="w-3.5 h-3.5 text-festive-gold" />
              <span>50th Golden Jubilee Celebration • ৫০তম বর্ষ সুবর্ণ জয়ন্তী (1977 - 2026)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-bengali text-festive-cream leading-snug">
              বারুইপুর ভট্টাচার্য্যপাড়ার ৫০তম সার্বজনীন শারদোৎসব
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Celebrating half a century of grand cultural tradition, <strong className="text-festive-yellow font-semibold">বারুইপুর ভট্টাচার্য্যপাড়া সার্বজনীন দুর্গোৎসব সমিতি</strong> marks its historic <strong className="text-festive-cream font-semibold">50th Golden Jubilee Durgotsav (৫০তম বর্ষ সুবর্ণ জয়ন্তী)</strong>.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Every year, our pandal artwork showcases eco-friendly craftsmanship and mesmerizing illumination that draws footfalls from across Kolkata and South 24 Parganas. For sponsors, this represents a unique bridge connecting corporate identity with authentic Bengali festive devotion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-festive-card border border-festive-gold/20 flex items-start gap-3">
                <Award className="w-5 h-5 text-festive-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Award-Winning Artistry</h4>
                  <p className="text-xs text-slate-400">Recognized for artistic pandal themes, traditional lighting displays, and safety standards.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-festive-card border border-festive-gold/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-festive-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Social Community Programs</h4>
                  <p className="text-xs text-slate-400">Includes free clothes distribution, blood donation camps, and senior citizen festive honors.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
