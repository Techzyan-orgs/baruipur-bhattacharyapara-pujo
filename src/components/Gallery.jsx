import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Eye, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'pandal',
      title: 'Grand Cloud & Pegasus Theme Pandal Architecture',
      bengaliTitle: 'মেঘ ও পক্ষীরাজ থিমে আলোকসজ্জিত প্রধান প্রবেশদ্বার ও মন্ডপ',
      image: '/gallery/img_2 (19).jpeg',
      tag: 'Pandal Architecture'
    },
    {
      id: 2,
      category: 'pratima',
      title: 'Sanctum Sanctorum & Golden Mandap Pratima',
      bengaliTitle: 'স্বর্ণমন্ডপে সপরিবারে মা দুর্গার দিব্য সাবেকি রূপ',
      image: '/gallery/img_2 (18).jpeg',
      tag: 'Pratima & Idol Art'
    },
    {
      id: 3,
      category: 'branding',
      title: 'Prime Main Road Sponsor Welcome Gate',
      bengaliTitle: 'বারুইপুর প্রধান প্রবেশপথে স্পনসর তোরণ (Style Baazar)',
      image: '/gallery/img (1).jpeg',
      tag: 'Sponsor Branding'
    },
    {
      id: 4,
      category: 'pratima',
      title: 'Traditional Folk Art Pratima with Kulo Chalchitra',
      bengaliTitle: 'কুলোর চালচিত্রে লোকশিল্প ও মা দুর্গার সনাতন মৃন্ময়ী রূপ',
      image: '/gallery/img_2 (7).jpeg',
      tag: 'Pratima & Idol Art'
    },
    {
      id: 5,
      category: 'traditions',
      title: 'Shondhi Pujo & Devotee Gathering',
      bengaliTitle: 'সন্ধিপূজো ও প্রাঙ্গণজুড়ে ভক্ত সমাবেশ',
      image: '/gallery/img_2 (20).jpeg',
      tag: 'Festive Devotion'
    },
    {
      id: 6,
      category: 'pratima',
      title: 'Complete Folk Art Pratima & Divine Family',
      bengaliTitle: 'লোকশিল্প ও কুলোর চালচিত্রে সপরিবারে মা দুর্গা',
      image: '/gallery/img_2 (4).jpeg',
      tag: 'Pratima & Idol Art'
    },
    {
      id: 7,
      category: 'pandal',
      title: 'Thematic Origami Art & Meditative Sculptures',
      bengaliTitle: 'মন্ডপ অভ্যন্তরে শিল্পকলা ও ভাস্কর্য প্রদর্শনী',
      image: '/gallery/img_2 (14).jpeg',
      tag: 'Pandal Architecture'
    },
    {
      id: 8,
      category: 'branding',
      title: 'Illuminated Brand Billboard (P.C. Chandra Jewellers)',
      bengaliTitle: 'আলোকিত স্পনসর বিলবোর্ড (P.C. Chandra Jewellers)',
      image: '/gallery/img_1 (8).jpeg',
      tag: 'Sponsor Branding'
    },
    {
      id: 9,
      category: 'pratima',
      title: 'Maa Durga in Traditional Gold Ornamentation (Daker Saaj)',
      bengaliTitle: 'ডাকের সাজে মা দুর্গার মহিষাসুরমর্দিনী রূপ',
      image: '/gallery/img_2 (22).jpeg',
      tag: 'Pratima & Idol Art'
    },
    {
      id: 10,
      category: 'branding',
      title: 'Corporate Building Facade Branding (State Bank of India)',
      bengaliTitle: 'আলোকসজ্জিত ভবনে কর্পোরেট ব্র্যান্ডিং (SBI YONO & Loans)',
      image: '/gallery/img (3).jpeg',
      tag: 'Sponsor Branding'
    },
    {
      id: 11,
      category: 'traditions',
      title: 'Bijoya Dashami Sindoor Khela & Devi Baran',
      bengaliTitle: 'বিজয়া দশমীর দেবী বরণ ও ঐতিহ্যবাহী সিঁদুর খেলা',
      image: '/gallery/img_2 (21).jpeg',
      tag: 'Festive Devotion'
    },
    {
      id: 12,
      category: 'pandal',
      title: 'Celestial Sun Deity & Cloud Canopy Entrance',
      bengaliTitle: 'প্রবেশদ্বারের তোরণে ভাস্কর্য ও শিল্পমন্ডিত চাঁদোয়া',
      image: '/gallery/img_2 (15).jpeg',
      tag: 'Pandal Architecture'
    },
    {
      id: 13,
      category: 'branding',
      title: 'Illuminated Night Boulevard & Sponsor Zone (Vevey & AccuHealth)',
      bengaliTitle: 'সান্ধ্য আলোকসজ্জা ও ব্র্যান্ড জোন (Vevey & AccuHealth)',
      image: '/gallery/img_1 (6).jpeg',
      tag: 'Sponsor Branding'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-festive-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-festive-gold/10 border border-festive-gold/30 text-festive-yellow text-xs font-semibold mb-3">
            <ImageIcon className="w-4 h-4 text-festive-gold" />
            <span>Festive Showcase • গ্যালারি ও চিত্রশালা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali text-festive-cream mb-4">
            Highlights of Past Durgotsav Celebrations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore our award-winning pandal architecture, divine Pratima, sacred festive moments, and prime sponsor branding touchpoints.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'all', label: 'All Highlights' },
            { id: 'pandal', label: 'Pandal Architecture' },
            { id: 'pratima', label: 'Maa Durga Pratima' },
            { id: 'branding', label: 'Sponsor Branding & Gates' },
            { id: 'traditions', label: 'Festive Devotion & Rituals' },
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-festive-gold text-black shadow-lg shadow-festive-gold/20 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-festive-gold/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative glass-panel rounded-2xl overflow-hidden cursor-pointer border-festive-gold/20 hover:border-festive-gold/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-festive-gold/10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold text-festive-yellow tracking-wider mb-1">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-festive-cream transition">
                  {item.title}
                </h3>
                <span className="text-xs font-bengali text-slate-300">
                  {item.bengaliTitle}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-festive-yellow" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border-festive-gold/40 shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 text-white hover:text-festive-yellow border border-white/20 flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] w-full bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-festive-card border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-festive-gold">{selectedImage.tag}</span>
                  <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                  <span className="text-sm font-bengali text-slate-300 block">{selectedImage.bengaliTitle}</span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-2.5 rounded-full btn-shimmer text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
