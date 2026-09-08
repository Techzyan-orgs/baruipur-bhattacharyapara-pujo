import React from 'react';
import { Target, Megaphone, Smartphone, Tv, Sparkles, CheckCircle, BarChart3, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function SponsorMetrics() {
  const channels = [
    {
      icon: Megaphone,
      title: 'Grand Entrance & Gate Banners',
      desc: 'High-visibility arch gates and drop-downs at main Baruipur arterial access roads, capturing 100% of incoming vehicular and pedestrian traffic.',
      badge: 'Prime Visibility'
    },
    {
      icon: Tv,
      title: 'LED Display Screens & Digital Walls',
      desc: 'Dynamic video ad loops, brand logos, and promotional reels played 18 hours daily across giant LED displays in the main pandal arena.',
      badge: 'High Impact'
    },
    {
      icon: Smartphone,
      title: 'Digital & Social Media Coverage',
      desc: 'Feature posts, sponsor taglines, live broadcast mentions, and social media reels reaching over 2.5 Million online festive audiences.',
      badge: 'Multi-Platform'
    },
    {
      icon: HeartHandshake,
      title: 'VIP Lounge & Stage Backdrops',
      desc: 'Exclusive branding during inauguration, cultural evening performances, celebrity appearances, and award ceremony press meets.',
      badge: 'Exclusive Access'
    }
  ];

  const demographics = [
    { label: 'Youth & Young Professionals (18-35 yrs)', percentage: 45, color: 'bg-festive-gold' },
    { label: 'Families & Senior Citizens (35+ yrs)', percentage: 35, color: 'bg-festive-crimson' },
    { label: 'Festive Shoppers & Food Enthusiasts', percentage: 20, color: 'bg-amber-500' },
  ];

  return (
    <section id="impact" className="py-20 bg-festive-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-festive-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Why Sponsor Us? • High ROI Brand Positioning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali text-festive-cream mb-4">
            Maximize Brand Visibility & Audience Engagement
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Baruipur Bhattacharya Para Durgotsav offers brands unparalleled access to dense festive footfall, high digital engagement, and deep community goodwill across South 24 Parganas and Kolkata suburban corridors.
          </p>
        </div>

        {/* 4 Exposure Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-2xl border-festive-gold/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-festive-gold/10 border border-festive-gold/30 flex items-center justify-center text-festive-gold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-festive-crimson/20 text-festive-yellow border border-festive-crimson/30">
                      {ch.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{ch.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demographics & Reach Breakdown Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-8 rounded-3xl border-festive-gold/30 shadow-2xl">
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-white mb-3 font-bengali">
              দর্শকের ভৌগোলিক ও বয়সসীমা • Target Demographics
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Our venue attracts visitors from Baruipur city, Sonarpur, Garia, Narendrapur, Canning, and South 24 Parganas districts, offering sponsors a rich cross-section of high-spending festive consumers.
            </p>

            <div className="space-y-4">
              {demographics.map((demo, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
                    <span>{demo.label}</span>
                    <span className="text-festive-yellow font-bold">{demo.percentage}%</span>
                  </div>
                  <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div className={`${demo.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${demo.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Sponsor Advantages */}
          <div className="lg:col-span-6 bg-black/40 p-6 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold text-festive-yellow mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-festive-gold" />
              <span>Sponsor Privilege Guarantee</span>
            </h4>
            <ul className="space-y-3">
              {[
                'Category Exclusivity options available for Title & Platinum sponsors',
                'Dedicated stall space for direct product sampling & lead generation',
                'Official inclusion in printed Souvenir & Commemorative magazine',
                'Guaranteed HD video & photography coverage of brand activations',
                'Customized branding packages tailored to corporate budget guidelines'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
