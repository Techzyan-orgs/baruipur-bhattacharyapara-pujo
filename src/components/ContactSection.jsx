import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, Sparkles, Building, User, MessageSquare, MessageCircle, Instagram, Facebook } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ selectedTier, setSelectedTier }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    tier: selectedTier || 'Platinum Partner (₹50,000)',
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

    const inquiryMessage = `*New Sponsorship Inquiry - Baruipur Bhattacharya Para Durgotsav 2026*
👤 *Name:* ${formData.name}
🏢 *Company/Brand:* ${formData.company}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🏆 *Package:* ${formData.tier}
📝 *Requirements/Notes:* ${formData.message ? formData.message : 'N/A'}`;

    const whatsappUrl = `https://wa.me/916901264300?text=${encodeURIComponent(inquiryMessage)}`;
    window.open(whatsappUrl, '_blank');
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
          
          {/* Left Column: Direct Business Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-5 sm:p-8 rounded-3xl border-festive-gold/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-festive-gold/10 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-bengali">
                ব্যবসা ও স্পনসরশিপ দপ্তর • Business Contact
              </h3>

              <div className="space-y-6">
                {/* Business Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-festive-gold/10 border border-festive-gold/30 flex items-center justify-center text-festive-gold shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 block tracking-wider">Official Email</span>
                    <a 
                      href="mailto:bhattacharyaparadurgapuja@gmail.com" 
                      className="text-xs xs:text-sm sm:text-base font-semibold text-festive-yellow hover:underline block leading-snug [overflow-wrap:anywhere]"
                    >
                      bhattacharyaparadurgapuja<wbr />@gmail.com
                    </a>
                  </div>
                </div>

                {/* Direct WhatsApp */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-lg shadow-emerald-500/10">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 block tracking-wider">Direct WhatsApp</span>
                    
                    <div className="space-y-2 mt-1.5">
                      {/* Number 1: 69012 64300 */}
                      <div className="flex flex-wrap items-center gap-2">
                        <a 
                          href="https://wa.me/916901264300"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          +91 69012 64300
                        </a>
                        <a 
                          href="https://wa.me/916901264300" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold hover:bg-emerald-500 hover:text-black transition flex items-center gap-1"
                        >
                          WhatsApp 💬
                        </a>
                      </div>

                      {/* Number 2: 86975 55684 */}
                      <div className="flex flex-wrap items-center gap-2">
                        <a 
                          href="https://wa.me/918697555684"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          +91 86975 55684
                        </a>
                        <a 
                          href="https://wa.me/918697555684" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold hover:bg-emerald-500 hover:text-black transition flex items-center gap-1"
                        >
                          WhatsApp 💬
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 block tracking-wider">Committee Office</span>
                    <p className="text-sm font-bengali text-festive-cream font-medium">
                      বারুইপুর ভট্টাচার্য্যপাড়া দুর্গোৎসব সমিতি ভবন
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Bhattacharya Para Ground, beside Rabindra Bhaban, Baruipur, Kolkata, South 24 Parganas, West Bengal 700144.
                    </p>
                  </div>
                </div>

                {/* Official Social Media Channels - High Visibility Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-festive-gold/30 shadow-xl">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500/30 via-pink-500/30 to-blue-500/30 border border-festive-gold/40 flex items-center justify-center text-festive-yellow shrink-0 shadow-sm">
                      <Sparkles className="w-5 h-5 text-festive-gold" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-festive-gold tracking-wider block">
                        Official Social Media • যুক্ত থাকুন
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        Follow Pujo Live Updates & Videos
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    Catch idol sculpting, pandal construction progress, cultural events & community announcements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href="https://www.facebook.com/share/17dEsSNs8Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2] border border-[#1877F2]/40 hover:border-[#1877F2] text-white flex items-center gap-2.5 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1877F2]/30 hover:scale-[1.02]"
                      title="Follow on Facebook"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shrink-0 shadow">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold block group-hover:text-white text-slate-100">Facebook Page</span>
                        <span className="text-[10px] text-blue-300/80 group-hover:text-white/90 block truncate">Official Community</span>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/baruipurbhattacharyaparapuja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-gradient-to-r from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-pink-500/40 hover:border-transparent text-white flex items-center gap-2.5 transition-all duration-300 group hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02]"
                      title="Follow on Instagram"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold block group-hover:text-white text-slate-100">Instagram Profile</span>
                        <span className="text-[10px] text-pink-300/80 group-hover:text-white/90 block truncate">@baruipurbhattacharya...</span>
                      </div>
                    </a>
                  </div>
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
                    WhatsApp has opened with your inquiry details. Our Sponsorship Convenor will also reach out at <strong className="text-festive-yellow">{formData.email}</strong> or phone.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/916901264300?text=${encodeURIComponent(
                        `*New Sponsorship Inquiry - Baruipur Bhattacharya Para Durgotsav 2026*\n👤 *Name:* ${formData.name}\n🏢 *Company/Brand:* ${formData.company}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone}\n🏆 *Package:* ${formData.tier}\n📝 *Requirements/Notes:* ${formData.message || 'N/A'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-2 shadow-md hover:scale-105 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
                    >
                      Submit Another Response
                    </button>
                  </div>
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
                      <option value="Title Sponsor (₹2,00,000)">Title Sponsor (Exclusive - ₹2,00,000)</option>
                      <option value="Powered By Sponsor (₹1,00,000)">Powered By Sponsor (₹1,00,000)</option>
                      <option value="Platinum Partner (₹50,000)">Platinum Partner (₹50,000)</option>
                      <option value="Gold Partner (₹30,000)">Gold Partner (₹30,000)</option>
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
                    className="w-full py-4 rounded-xl btn-shimmer text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-festive-crimson/40 hover:scale-102 transition cursor-pointer"
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
