import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, FileText, Sparkles, Building, User, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ selectedTier, setSelectedTier }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    tier: selectedTier || 'Platinum Partner (₹75,000)',
    message: ''
  });

  // Sync formData.tier whenever selectedTier prop changes
  React.useEffect(() => {
    if (selectedTier) {
      setFormData(prev => ({ ...prev, tier: selectedTier }));
    }
  }, [selectedTier]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f39c12', '#d9272e', '#27ae60']
    });
  };

  const handleDownloadDeck = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 }
    });
    alert("Official Sponsorship Proposal Deck (PDF) download initiated! You can also email bhattacharyaparadurgapuja@gmail.com for customized pitch decks.");
  };

  return (
    <section id="contact" className="py-24 bg-festive-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-semibold mb-3">
            <Mail className="w-4 h-4 text-festive-gold" />
            <span>Sponsorship Desk • যোগাযোগ ও চুক্তি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali text-festive-cream mb-4">
            Connect With Our Sponsorship Committee
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Submit your partnership inquiry below or get in touch directly with our committee executives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Contact Info & Deck Download */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl border-festive-gold/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-festive-gold/10 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6 font-bengali">
                ব্যবসা ও স্পনসরশিপ দপ্তর • Business Contact
              </h3>

              <div className="space-y-6">
                {/* Business Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-festive-gold/10 border border-festive-gold/30 flex items-center justify-center text-festive-gold shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Official Email</span>
                    <a href="mailto:bhattacharyaparadurgapuja@gmail.com" className="text-base font-semibold text-festive-yellow hover:underline block">
                      bhattacharyaparadurgapuja@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-festive-crimson/10 border border-festive-crimson/30 flex items-center justify-center text-festive-crimson shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Direct Hotline & WhatsApp</span>
                    <a href="tel:+919830012345" className="text-base font-bold text-white hover:text-festive-gold block">
                      +91 98300 12345 <span className="text-xs font-normal text-slate-400">(Sponsorship Convenor)</span>
                    </a>
                    <a href="tel:+919831167890" className="text-sm font-semibold text-slate-300 hover:text-festive-gold block mt-0.5">
                      +91 98311 67890 <span className="text-xs font-normal text-slate-400">(General Secretary)</span>
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Committee Office</span>
                    <p className="text-sm font-bengali text-festive-cream font-medium">
                      বারুইপুর ভট্টাচার্য্যপাড়া দুর্গোৎসব সমিতি ভবন
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Bhattacharya Para Ground, beside Rabindra Bhaban, Baruipur, Kolkata, South 24 Parganas, West Bengal 700144.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Brochure Box */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-black/40 border border-festive-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-festive-gold" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Official Sponsorship Deck 2026</h4>
                      <p className="text-[10px] text-slate-400">PDF • 12 Pages • Metrics & Floorplan</p>
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadDeck}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl btn-shimmer text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border-festive-gold/30 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-bengali">
                    ধন্যবাদ! Sponsorship Inquiry Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Our Sponsorship Convenor will contact you within 24 hours at <strong className="text-festive-yellow">{formData.email}</strong> with a detailed proposal and customized site layout.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request a Customized Sponsorship Proposal
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill out the brand details below to receive our complete media kit, stall booking slots, and priority gate allocation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-festive-gold" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Das"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-festive-gold focus:ring-1 focus:ring-festive-gold outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-festive-gold" />
                        <span>Brand / Company Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Tata Motors / Local Store"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-festive-gold focus:ring-1 focus:ring-festive-gold outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-festive-gold" />
                        <span>Business Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sponsorships@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-festive-gold focus:ring-1 focus:ring-festive-gold outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-festive-gold" />
                        <span>Phone / WhatsApp Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-festive-gold focus:ring-1 focus:ring-festive-gold outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Interested Sponsorship Package
                    </label>
                    <select
                      value={formData.tier}
                      onChange={(e) => {
                        setFormData({ ...formData, tier: e.target.value });
                        if (setSelectedTier) setSelectedTier(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white text-sm focus:border-festive-gold outline-none transition"
                    >
                      <option value="Title Sponsor (₹2,50,000+)">Title Sponsor (Exclusive - ₹2,50,000+)</option>
                      <option value="Powered By Sponsor (₹1,50,000)">Powered By Sponsor (₹1,50,000)</option>
                      <option value="Platinum Partner (₹75,000)">Platinum Partner (₹75,000)</option>
                      <option value="Gold Partner (₹40,000)">Gold Partner (₹40,000)</option>
                      <option value="Silver & Stall Partner (₹20,000)">Silver & Stall Partner (₹20,000)</option>
                      <option value="Custom Budget Proposal">Custom Budget / Banner Placement Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-festive-gold" />
                      <span>Additional Requirements / Questions</span>
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred gate locations, stall space dimensions, or media requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-festive-gold focus:ring-1 focus:ring-festive-gold outline-none transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl btn-shimmer text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-festive-crimson/40 hover:scale-102 transition"
                  >
                    <Send className="w-4 h-4 text-festive-yellow" />
                    <span>Submit Sponsorship Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
