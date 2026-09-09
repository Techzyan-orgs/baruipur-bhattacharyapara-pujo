import React from 'react';
import { MapPin, Navigation, Train, Car, Compass, ExternalLink, Clock } from 'lucide-react';

export default function LocationMap() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Ananda+Uddyan+Baruipur+West+Bengal";

  return (
    <section id="location" className="py-20 bg-festive-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-festive-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-semibold mb-3">
            <MapPin className="w-4 h-4 text-festive-gold" />
            <span>Venue Location • প্যান্ডেল অবস্থান ও যাতায়াত</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali text-festive-cream mb-4">
            How to Reach Bhattacharya Para Durgotsav
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Located in the cultural heart of Baruipur town, our venue is conveniently connected via rail, road, and suburban transit hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Google Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border-festive-gold/30 shadow-2xl relative min-h-[400px]">
            <iframe
              title="Baruipur Bhattacharya Para Durgotsav Location Map"
              src="https://maps.google.com/maps?q=Ananda+Uddyan,+Baruipur,+West+Bengal&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 glass-panel p-3 rounded-xl border-festive-gold/40 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-festive-crimson flex items-center justify-center text-white font-bold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Bhattacharya Para Durgotsav Ground</span>
                <span className="text-[10px] text-festive-yellow font-bengali">রবীন্দ্র ভবনের পাশে, বারুইপুর</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transit & Directions Guide */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card with Local SEO Microdata */}
            <div 
              className="glass-panel p-6 rounded-2xl border-festive-gold/30"
              itemScope 
              itemType="https://schema.org/Place"
            >
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Compass className="w-5 h-5 text-festive-gold" />
                <span itemProp="name">Official Venue Address</span>
              </h3>
              <p className="text-sm font-bengali text-festive-yellow mb-1 font-semibold">
                বারুইপুর ভট্টাচার্য্যপাড়া সার্বজনীন দুর্গোৎসব সমিতি
              </p>
              <div 
                itemProp="address" 
                itemScope 
                itemType="https://schema.org/PostalAddress" 
                className="text-sm text-slate-300 leading-relaxed"
              >
                <span itemProp="streetAddress">Bhattacharya Para Ground, beside Rabindra Bhaban & Ananda Uddyan</span>, 
                P.O. & P.S. <span itemProp="addressLocality">Baruipur</span>, 
                District <span itemProp="addressRegion">South 24 Parganas, West Bengal</span> <span itemProp="postalCode">700144</span>.
              </div>
            </div>

            {/* Transit Options */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-festive-card border border-white/10 flex items-start gap-3">
                <Train className="w-5 h-5 text-festive-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">By Eastern Railway (Sealdah South Line)</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Disembark at <strong>Baruipur Junction Station</strong>. Take a 5-7 minute auto/e-rickshaw (Toto) directly to Bhattacharya Para Durgotsav Pandal (beside Rabindra Bhaban).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-festive-card border border-white/10 flex items-start gap-3">
                <Car className="w-5 h-5 text-festive-crimson shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">By Road / EM Bypass Extension</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Drive via Garia / Rajpur / Kulpi Road towards Baruipur Flyover. Dedicated sponsor parking zones are marked near the venue approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Directions Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl btn-shimmer text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-festive-crimson/30 hover:scale-102 transition"
            >
              <Navigation className="w-4 h-4 text-festive-yellow" />
              <span>Open Directions in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
