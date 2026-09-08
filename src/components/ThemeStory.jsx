import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, Flame, Flower2, Heart, Award, ZoomIn, X, Palette, Users, ChevronRight, Eye } from 'lucide-react';

// ============================================================================
// EXPERIMENT TOGGLE: 2026 Puja Theme Poster ("অনুভূতি" - Anubhuti)
// Set this to `false` to easily roll back to the previous version.
// ============================================================================
export const SHOW_THEME_EXPERIMENT = true;

export default function ThemeStory() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // ============================================================================
  // PREVIOUS / ORIGINAL VERSION (Fallback for easy rollback)
  // ============================================================================
  if (!SHOW_THEME_EXPERIMENT) {
    return (
      <section id="theme" className="py-20 bg-festive-dark relative overflow-hidden">
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

  // ============================================================================
  // EXPERIMENT VERSION: Highlight 2026 Theme Poster "অন্তর্ধৃত"
  // ============================================================================
  return (
    <section id="theme" className="py-24 bg-festive-dark relative overflow-hidden">
      {/* Ambient Cosmic Celestial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-festive-gold/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-festive-gold/15 border border-festive-gold/40 text-festive-yellow text-xs font-semibold mb-4 shadow-glow-gold">
            <Sparkles className="w-4 h-4 text-festive-gold" />
            <span className="font-bengali">সুবর্ণ জয়ন্তী বর্ষ দুর্গোৎসব ২০২৬ • শারদীয় ভাবনা প্রকাশ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali text-festive-cream mb-4 leading-tight">
            ২০২৬ থিম ভাবনা: <span className="text-gold-gradient drop-shadow-md">"অনুভূতি"</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            বারুইপুর ভট্টাচার্য্যপাড়া সার্বজনীন দুর্গোৎসব সমিতির ঐতিহাসিক ৫০তম সুবর্ণ জয়ন্তী বর্ষে বিশেষ থিম ভাবনা ও প্রতিমা রূপায়ণ।
          </p>
        </div>

        {/* Highlight Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Theme Poster Showcase */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative group rounded-3xl overflow-hidden glass-panel border-festive-gold/40 shadow-2xl cursor-pointer transition-all duration-300 hover:border-festive-gold hover:shadow-festive-gold/20"
              title="Click to view full theme poster"
            >
              {/* Outer Cosmic Glow on Hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-festive-gold to-festive-crimson opacity-30 group-hover:opacity-75 blur-md transition duration-500 pointer-events-none"></div>

              {/* Poster Image */}
              <div className="relative overflow-hidden bg-black/60 aspect-[3/2] flex items-center justify-center">
                <img
                  src="/gallery/theme.jpeg"
                  alt="২০২৬ সুবর্ণ জয়ন্তী থিম: অনুভূতি (Baruipur Bhattacharya Para Durgotsav 2026 Theme Poster - Anubhuti)"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />

                {/* Top Corner Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-festive-gold/40 text-festive-yellow text-[11px] font-semibold flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-festive-gold" />
                  <span className="font-bengali">৫০তম বর্ষ থিম পোস্টার</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credits */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Concept Card */}
            <div className="p-6 rounded-3xl glass-panel border-festive-gold/30 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-semibold mb-3">
                <Compass className="w-3.5 h-3.5 text-festive-gold" />
                <span>Artistic Concept • শিল্প ভাবনা</span>
              </div>

              <h3 className="text-3xl font-bold font-bengali text-festive-cream mb-2">
                "অনুভূতি"
              </h3>
              <p className="text-xs text-festive-yellow font-bengali font-medium mb-4">
                মহাজাগতিক শক্তির অন্তর্গূঢ় রূপ ও সনাতনী মৃন্ময়ী মহামায়ার আবাহন
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                ৫০তম বর্ষের সুবর্ণ জয়ন্তী দুর্গোৎসবে আলোকসজ্জা, সাবেকি শিল্পকলা ও অন্তরের ভাবনার অপূর্ব সমন্বয়ে রচিত হচ্ছে ২০২৬-এর প্রধান আকর্ষণ <strong>"অনুভূতি"</strong>।
              </p>

              {/* Creator Badges */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-festive-gold/20">
                  <div className="w-9 h-9 rounded-xl bg-festive-gold/20 flex items-center justify-center text-festive-gold shrink-0">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">সৃজনে (Theme Concept & Creators)</span>
                    <span className="font-bengali text-sm font-bold text-festive-cream">পার্থ মাইতি ও অমল পাঁজা</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-festive-gold/20">
                  <div className="w-9 h-9 rounded-xl bg-festive-crimson/20 flex items-center justify-center text-festive-crimson shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">প্রতিমা শিল্পী (Idol Artist)</span>
                    <span className="font-bengali text-sm font-bold text-festive-cream">নব কুমার পাল</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-festive-gold/20">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">পরিচালনায় (Organized By)</span>
                    <span className="font-bengali text-sm font-bold text-festive-cream">বারুইপুর ভট্টাচার্য্য পাড়া অধিবাসী বৃন্দ</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-festive-gold/20 hover:bg-festive-gold/30 border border-festive-gold/40 text-festive-yellow text-xs font-bold flex items-center gap-2 transition"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Enlarge Theme Poster</span>
                </button>
                <a
                  href="#sponsorship"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <span>Sponsorship Slots</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* 50th Golden Jubilee Heritage Context & Sponsorship Impact */}
        <div className="p-8 rounded-3xl bg-black/40 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/20 border border-festive-gold/40 text-festive-yellow text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 text-festive-gold" />
                <span>50th Golden Jubilee Heritage (1977 - 2026)</span>
              </div>
              <h3 className="text-2xl font-bold font-bengali text-festive-cream leading-snug">
                ঐতিহ্যবাহী শারদোৎসব ও ব্র্যান্ডিংয়ের সুবর্ণ সুযোগ
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                ৫০তম বর্ষ উপলক্ষে এ বছরের থিম "অনুভূতি" এবং বিশেষ আলোকসজ্জা দেখতে দক্ষিণ ২৪ পরগনা ও কলকাতা থেকে লক্ষাধিক দর্শনার্থীর সমাগম ঘটবে। কর্পোরেট ব্র্যান্ডের সর্বোচ্চ প্রচার ও রিচ নিশ্চিত করতে এটি এক অনন্য মাধ্যম।
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-festive-card border border-festive-gold/20 flex items-start gap-3">
                <Award className="w-5 h-5 text-festive-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Award-Winning Artistry</h4>
                  <p className="text-[11px] text-slate-400">Pandal architecture, theme lighting & safety excellence recognized across South 24 Parganas.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-festive-card border border-festive-gold/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-festive-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Massive Festive Reach</h4>
                  <p className="text-[11px] text-slate-400">Over 1,50,000+ footfalls across 5 festive days with premium sponsor gate & banner placements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full-Screen Poster View */}
      {lightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition z-10"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
          >
            <img
              src="/gallery/theme.jpeg"
              alt="২০২৬ থিম পোস্টার - অনুভূতি"
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl border border-festive-gold/40 shadow-2xl"
            />
            
            <div className="mt-3 text-center px-4">
              <h4 className="font-bengali text-lg sm:text-xl font-bold text-festive-cream">
                বারুইপুর ভট্টাচার্য্য পাড়া সার্বজনীন দুর্গোৎসব ২০২৬ • থিম: "অনুভূতি"
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                সৃজনে: পার্থ মাইতি ও অমল পাঁজা • প্রতিমা শিল্পী: নব কুমার পাল
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
