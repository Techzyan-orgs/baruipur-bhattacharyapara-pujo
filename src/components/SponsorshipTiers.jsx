import React, { useState } from 'react';
import { Award, Check, Sparkles, Star, ChevronRight, HelpCircle, Calculator, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SponsorshipTiers({ onSelectTier }) {
  const [selectedBudget, setSelectedBudget] = useState(75000);
  const [selectedTierName, setSelectedTierName] = useState(null);

  const tiers = [
    {
      id: 'title',
      name: 'Title Sponsor',
      formValue: 'Title Sponsor (₹2,50,000+)',
      bengaliTitle: 'প্রধান পৃষ্ঠপোষক',
      price: '₹2,50,000+',
      rawPrice: 250000,
      popular: true,
      badge: 'Maximum Exclusivity',
      description: 'Complete brand takeover across pandal entrance, main stage, LED displays, and media releases.',
      perks: [
        'Exclusive Title Prefix: "[Your Brand] Baruipur Bhattacharya Para Durgotsav"',
        'Prime Main Entrance Arch Gate branding (25ft x 15ft)',
        '30-Sec Video Ad played every 20 mins on LED screens (18 hrs/day)',
        'Exclusive 10ft x 10ft Product Exhibition / Sampling Stall space',
        'Back Cover Full-Color Ad in Official Commemorative Souvenir Book',
        'VIP Access passes & Chief Guest honor at Opening Ceremony',
        'Social Media Campaign with dedicated brand promo video'
      ],
      cta: 'Claim Title Sponsorship'
    },
    {
      id: 'poweredBy',
      name: 'Powered By Sponsor',
      formValue: 'Powered By Sponsor (₹1,50,000)',
      bengaliTitle: 'সহ-পৃষ্ঠপোষক',
      price: '₹1,50,000',
      rawPrice: 150000,
      popular: false,
      badge: 'High Impact',
      description: 'Co-branding prominence on main stage backdrop, arch gates, and digital channels.',
      perks: [
        'Co-branding Tagline on main pandal gates & publicity flexes',
        'Secondary Entrance Arch Gate branding (20ft x 12ft)',
        '15-Sec Video Ad loop on arena LED screens',
        '8ft x 8ft Commercial Stall spot in venue courtyard',
        'Inside Front Cover Full-Page Ad in Souvenir Book',
        'Featured inclusion in all media press releases & reels'
      ],
      cta: 'Select Powered By'
    },
    {
      id: 'platinum',
      name: 'Platinum Partner',
      formValue: 'Platinum Partner (₹75,000)',
      bengaliTitle: 'প্লাটিনাম পার্টনার',
      price: '₹75,000',
      rawPrice: 75000,
      popular: false,
      badge: 'Popular Choice',
      description: 'Extensive banner coverage and prominent souvenir feature for growing brands.',
      perks: [
        '10 Custom Flex Banners placed at high-traffic zones inside & outside',
        'Logo placement on Stage Side Panels & VIP backdrop',
        'Full-Page Color Ad in Official Souvenir Book',
        'Promotional Stall spot (6ft x 6ft)',
        'Dedicated Social Media appreciation post & logo placement'
      ],
      cta: 'Select Platinum'
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      formValue: 'Gold Partner (₹40,000)',
      bengaliTitle: 'গোল্ড পার্টনার',
      price: '₹40,000',
      rawPrice: 40000,
      popular: false,
      badge: 'Essential Brand',
      description: 'Solid brand visibility for regional businesses and retail chains.',
      perks: [
        '6 Custom Flex Banners around pandal exterior & road approach',
        'Half-Page Ad in Official Souvenir Book',
        'Brand Logo on all official committee posters & banners',
        'Social Media Thank-you campaign mention'
      ],
      cta: 'Select Gold'
    },
    {
      id: 'silver',
      name: 'Silver / Stall Partner',
      formValue: 'Silver & Stall Partner (₹20,000)',
      bengaliTitle: 'সিলভার পার্টনার',
      price: '₹20,000',
      rawPrice: 20000,
      popular: false,
      badge: 'Local Business Focus',
      description: 'Ideal for local vendors, restaurants, and retail stall displays.',
      perks: [
        '3 Banner placements in pandal perimeter',
        'Quarter-Page Ad in Souvenir Book',
        'Stall Space option (charge extra based on size)',
        'Official certificate of festive partnership'
      ],
      cta: 'Select Silver'
    }
  ];

  const handleSelectTier = (tierValue, tierDisplayName) => {
    setSelectedTierName(tierDisplayName);
    if (onSelectTier) {
      onSelectTier(tierValue);
    }
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate estimated reach based on budget slider
  const getEstimatedReach = (budget) => {
    const footfall = Math.round((budget / 250000) * 150000 + 20000);
    const banners = Math.max(2, Math.round(budget / 7500));
    const impressions = Math.round(footfall * 3.5);
    return { footfall: Math.min(150000, footfall), banners, impressions };
  };

  const calculatedMetrics = getEstimatedReach(selectedBudget);

  return (
    <section id="sponsorship" className="py-24 bg-festive-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-semibold mb-3">
            <Award className="w-4 h-4 text-festive-gold" />
            <span>Sponsorship Packages • শারদীয় স্পনসরশিপ প্যাকেজ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali text-festive-cream mb-4">
            Partner With Us For Durgotsav 2026
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose from tailored sponsorship tiers designed to provide maximum brand exposure, customer engagement, and community presence.
          </p>
        </div>

        {/* Interactive Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between relative border transition-all duration-300 ${
                tier.popular 
                  ? 'border-festive-gold shadow-glow-gold bg-festive-card/90 ring-1 ring-festive-gold/50 scale-102' 
                  : 'border-festive-gold/20 hover:border-festive-gold/40'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-shimmer text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current text-festive-yellow" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div>
                {/* Tier Title */}
                <div className="mb-4">
                  <span className="text-xs font-bengali font-bold text-festive-gold tracking-wide block mb-1">
                    {tier.bengaliTitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{tier.description}</p>
                </div>

                {/* Price Tag */}
                <div className="my-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-festive-cream font-mono">{tier.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">/ Festival Season</span>
                </div>

                {/* Perks Checklist */}
                <ul className="space-y-3 mb-8">
                  {tier.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-festive-yellow shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select Button */}
              <button
                onClick={() => handleSelectTier(tier.formValue, tier.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'btn-shimmer text-white shadow-lg shadow-festive-crimson/30 hover:scale-105'
                    : 'bg-white/10 hover:bg-festive-gold hover:text-black text-white border border-festive-gold/30'
                }`}
              >
                <span>{tier.cta}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Custom Budget ROI Estimator */}
        <div className="glass-panel p-8 rounded-3xl border-festive-gold/30 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-festive-gold/20 border border-festive-gold/40 flex items-center justify-center text-festive-gold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instant Custom Sponsorship Estimator</h3>
              <p className="text-xs text-slate-400">Slide to select your intended budget and view estimated brand reach</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Slider Column */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-300">Selected Budget:</span>
                  <span className="text-2xl font-black text-festive-yellow font-mono">
                    ₹{selectedBudget.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="250000"
                  step="5000"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(Number(e.target.value))}
                  className="w-full h-3 bg-black/60 rounded-lg appearance-none cursor-pointer accent-festive-gold border border-white/10"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>₹20,000</span>
                  <span>₹1,000,00</span>
                  <span>₹2,50,000+</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 leading-relaxed">
                <Zap className="w-4 h-4 text-festive-gold inline mr-1" />
                Custom packages can be tailored to include specific gate positions, stall sizes, or digital video ad slots according to your corporate requirements.
              </div>
            </div>

            {/* Calculated Metrics */}
            <div className="md:col-span-5 bg-festive-card p-6 rounded-2xl border border-festive-gold/30 text-center space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Est. Venue Footfall</span>
                <span className="text-3xl font-black text-white font-mono">{calculatedMetrics.footfall.toLocaleString('en-IN')}+</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Est. Digital & Print Views</span>
                <span className="text-2xl font-bold text-festive-yellow font-mono">{calculatedMetrics.impressions.toLocaleString('en-IN')}+</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Brand Banners Included</span>
                <span className="text-xl font-bold text-festive-cream font-mono">{calculatedMetrics.banners} Dedicated Spots</span>
              </div>

              <button
                onClick={() => handleSelectTier('Custom Budget Proposal', `Custom Proposal (₹${selectedBudget.toLocaleString('en-IN')})`)}
                className="w-full py-2.5 rounded-lg btn-shimmer text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition"
              >
                Request Custom Proposal
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
