import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, X, ZoomIn, Eye, Sparkles, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    // --- 12 Best Curated Highlights (Featured) ---
    {
      id: 1,
      category: 'pandal',
      title: 'Grand Cloud & Pegasus Theme Pandal Architecture',
      bengaliTitle: 'মেঘ ও পক্ষীরাজ থিমে আলোকসজ্জিত প্রধান প্রবেশদ্বার ও মন্ডপ',
      image: '/gallery/img_2 (19).jpeg',
      tag: 'Pandal Architecture',
      featured: true
    },
    {
      id: 2,
      category: 'pratima',
      title: 'Sanctum Sanctorum & Golden Mandap Pratima',
      bengaliTitle: 'স্বর্ণমন্ডপে সপরিবারে মা দুর্গার দিব্য সাবেকি রূপ',
      image: '/gallery/img_2 (18).jpeg',
      tag: 'Pratima & Idol Art',
      featured: true
    },
    {
      id: 3,
      category: 'branding',
      title: 'Prime Main Road Sponsor Welcome Gate',
      bengaliTitle: 'বারুইপুর প্রধান প্রবেশপথে স্পনসর তোরণ (Style Baazar)',
      image: '/gallery/img (1).jpeg',
      tag: 'Sponsor Branding',
      featured: true
    },
    {
      id: 4,
      category: 'pratima',
      title: 'Traditional Folk Art Pratima with Kulo Chalchitra',
      bengaliTitle: 'কুলোর চালচিত্রে লোকশিল্প ও মা দুর্গার সনাতন মৃন্ময়ী রূপ',
      image: '/gallery/img_2 (7).jpeg',
      tag: 'Pratima & Idol Art',
      featured: true
    },
    {
      id: 5,
      category: 'traditions',
      title: 'Shondhi Pujo & Devotee Gathering',
      bengaliTitle: 'সন্ধিপূজো ও প্রাঙ্গণজুড়ে ভক্ত সমাবেশ',
      image: '/gallery/img_2 (20).jpeg',
      tag: 'Festive Devotion',
      featured: true
    },
    {
      id: 6,
      category: 'pratima',
      title: 'Complete Folk Art Pratima & Divine Family',
      bengaliTitle: 'লোকশিল্প ও কুলোর চালচিত্রে সপরিবারে মা দুর্গা',
      image: '/gallery/img_2 (4).jpeg',
      tag: 'Pratima & Idol Art',
      featured: true
    },
    {
      id: 7,
      category: 'pandal',
      title: 'Thematic Origami Art & Meditative Sculptures',
      bengaliTitle: 'মন্ডপ অভ্যন্তরে শিল্পকলা ও ভাস্কর্য প্রদর্শনী',
      image: '/gallery/img_2 (14).jpeg',
      tag: 'Pandal Architecture',
      featured: true
    },
    {
      id: 8,
      category: 'branding',
      title: 'Illuminated Brand Billboard (P.C. Chandra Jewellers)',
      bengaliTitle: 'আলোকিত স্পনসর বিলবোর্ড (P.C. Chandra Jewellers)',
      image: '/gallery/img_1 (8).jpeg',
      tag: 'Sponsor Branding',
      featured: true
    },
    {
      id: 9,
      category: 'pratima',
      title: 'Maa Durga in Traditional Gold Ornamentation (Daker Saaj)',
      bengaliTitle: 'ডাকের সাজে মা দুর্গার মহিষাসুরমর্দিনী রূপ',
      image: '/gallery/img_2 (22).jpeg',
      tag: 'Pratima & Idol Art',
      featured: true
    },
    {
      id: 10,
      category: 'branding',
      title: 'Corporate Building Facade Branding (State Bank of India)',
      bengaliTitle: 'আলোকসজ্জিত ভবনে কর্পোরেট ব্র্যান্ডিং (SBI YONO & Loans)',
      image: '/gallery/img (3).jpeg',
      tag: 'Sponsor Branding',
      featured: true
    },
    {
      id: 11,
      category: 'traditions',
      title: 'Bijoya Dashami Sindoor Khela & Devi Baran',
      bengaliTitle: 'বিজয়া দশমীর দেবী বরণ ও ঐতিহ্যবাহী সিঁদুর খেলা',
      image: '/gallery/img_2 (21).jpeg',
      tag: 'Festive Devotion',
      featured: true
    },
    {
      id: 12,
      category: 'pandal',
      title: 'Celestial Sun Deity & Cloud Canopy Entrance',
      bengaliTitle: 'প্রবেশদ্বারের তোরণে ভাস্কর্য ও শিল্পমন্ডিত চাঁদোয়া',
      image: '/gallery/img_2 (15).jpeg',
      tag: 'Pandal Architecture',
      featured: true
    },

    // --- Complete Gallery Archive (All Other 33 Photos) ---
    {
      id: 13,
      category: 'branding',
      title: 'Illuminated Night Boulevard & Sponsor Zone (Vevey & AccuHealth)',
      bengaliTitle: 'সান্ধ্য আলোকসজ্জা ও ব্র্যান্ড জোন (Vevey & AccuHealth)',
      image: '/gallery/img_1 (6).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 14,
      category: 'branding',
      title: 'Highway Sponsor Overhead Display (Vevey & Teamax)',
      bengaliTitle: 'প্রধান সংযোগস্থলে ব্যানার ও ব্র্যান্ডিং ডিসপ্লে',
      image: '/gallery/img (2).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 15,
      category: 'branding',
      title: 'Prominent Banking Partner Banner (SBI Gold Loan)',
      bengaliTitle: 'উৎসব প্রাঙ্গণে স্টেট ব্যাঙ্ক অফ ইন্ডিয়ার ব্র্যান্ডিং',
      image: '/gallery/img (4).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 16,
      category: 'branding',
      title: 'Grand Retail Partner Entrance Gate (Style Baazar)',
      bengaliTitle: 'প্রধান পথজুড়ে স্টাইল বাজার সুসজ্জিত প্রবেশ তোরণ',
      image: '/gallery/img (5).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 17,
      category: 'branding',
      title: 'Illuminated Highway Billboard (Fortune Foods)',
      bengaliTitle: 'ফরচুন ফুডসের সুবিশাল আলোকিত বিলবোর্ড',
      image: '/gallery/img_1 (1).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 18,
      category: 'branding',
      title: 'FMCG Partner Night Glow Billboard (Fortune Sunflower Oil)',
      bengaliTitle: 'রাত্রিকালীন আলোকিত ব্র্যান্ড কিয়স্ক ও বিলবোর্ড',
      image: '/gallery/img_1 (2).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 19,
      category: 'branding',
      title: 'Consumer Brand Pavilion (Milton Home Appliances)',
      bengaliTitle: 'মিল্টন হোম অ্যাপ্লায়েন্সেস পার্টনারশিপ ব্যানার',
      image: '/gallery/img_1 (3).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 20,
      category: 'branding',
      title: 'Healthcare Partner Illuminated Display (HHP Hospital)',
      bengaliTitle: 'হেলথকেয়ার পার্টনার এইচএইচপি হসপিটাল ডিসপ্লে',
      image: '/gallery/img_1 (4).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 21,
      category: 'branding',
      title: 'Multi-Speciality Hospital Sponsor Board',
      bengaliTitle: 'চিকিৎসা পরিষেবা সহযোগীদের প্রদর্শনী ফলক',
      image: '/gallery/img_1 (5).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 22,
      category: 'branding',
      title: 'Festival Approach Road Sponsor Archway',
      bengaliTitle: 'মণ্ডপ সংযোগকারী সড়কে স্পনসর তোরণ ও আলোকসজ্জা',
      image: '/gallery/img_1 (7).jpeg',
      tag: 'Sponsor Branding',
      featured: false
    },
    {
      id: 23,
      category: 'pratima',
      title: 'Mahishasurmardini Divine Face & Radiant Countenance',
      bengaliTitle: 'মহিষাসুরমর্দিনী মা দুর্গার করুণাময়ী মুখচ্ছবি',
      image: '/gallery/img_2 (1).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 24,
      category: 'pratima',
      title: 'Artisanal Clay Sculpture with Golden Accents',
      bengaliTitle: 'সাবেকি মৃন্ময়ী প্রতিমায় স্বর্ণালী কারুকাজ',
      image: '/gallery/img_2 (2).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 25,
      category: 'pratima',
      title: 'Side Profile of Maa Durga in Traditional Ornaments',
      bengaliTitle: 'অলংকারে ভূষিত দুর্গা প্রতিমার পার্শ্বচিত্র',
      image: '/gallery/img_2 (3).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 26,
      category: 'pratima',
      title: 'Divine Saraswati and Kartikeya with Folk Ornaments',
      bengaliTitle: 'কুলো ও লোকশিল্পের কারুকাজে দেবী সরস্বতী ও কার্তিক',
      image: '/gallery/img_2 (5).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 27,
      category: 'pratima',
      title: 'Goddess Lakshmi & Lord Ganesha in Traditional Attire',
      bengaliTitle: 'মা লক্ষ্মী ও সিদ্ধিদাতা গণেশের ভক্তিপূর্ণ রূপ',
      image: '/gallery/img_2 (6).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 28,
      category: 'pratima',
      title: 'Intricate Clay Craftsmanship & Chalchitra Detailing',
      bengaliTitle: 'চালচিত্র ও মাটির নিখুঁত কারুকার্যের অনন্য নিদর্শন',
      image: '/gallery/img_2 (8).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 29,
      category: 'pandal',
      title: 'Illuminated Thematic Ceiling & Kinetic Lights',
      bengaliTitle: 'মণ্ডপের অভ্যন্তরীণ কারুকার্য ও মায়াবী আলোকবিন্যাস',
      image: '/gallery/img_2 (9).jpeg',
      tag: 'Pandal Architecture',
      featured: false
    },
    {
      id: 30,
      category: 'pratima',
      title: 'Sacred Evening Aarti & Divine Ambience',
      bengaliTitle: 'সান্ধ্য আরতির আলোকচ্ছটায় উদ্ভাসিত প্রতিমা প্রাঙ্গণ',
      image: '/gallery/img_2 (10).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 31,
      category: 'pratima',
      title: 'Serene Facial Expression of the Divine Mother',
      bengaliTitle: 'মা দুর্গার সৌম্য ও শান্ত অপলক দৃষ্টি',
      image: '/gallery/img_2 (11).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 32,
      category: 'pratima',
      title: 'Earthen Splendor of Traditional Sabeki Pratima',
      bengaliTitle: 'বাংলার ঐতিহ্যবাহী সাবেকি প্রতিমার নয়নাভিরাম শোভা',
      image: '/gallery/img_2 (12).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 33,
      category: 'pandal',
      title: 'Eco-friendly Thematic Wooden Craftwork & Decor',
      bengaliTitle: 'পরিবেশবান্ধব কাঠ ও বাঁশের সৃজনশীল শিল্পকর্ম',
      image: '/gallery/img_2 (13).jpeg',
      tag: 'Pandal Architecture',
      featured: false
    },
    {
      id: 34,
      category: 'pratima',
      title: 'Devotees Offering Pushpanjali at the Holy Sanctum',
      bengaliTitle: 'মায়ের চরণে অঞ্জলি নিবেদনের পুণ্য মুহূর্ত',
      image: '/gallery/img_2 (16).jpeg',
      tag: 'Pratima & Idol Art',
      featured: false
    },
    {
      id: 35,
      category: 'pandal',
      title: 'Majestic Illuminated Pandal Dome & Night Vista',
      bengaliTitle: 'রাত্রিকালীন আলোয় উজ্জ্বল মণ্ডপের সুউচ্চ চূড়া',
      image: '/gallery/img_2 (17).jpeg',
      tag: 'Pandal Architecture',
      featured: false
    },
    {
      id: 36,
      category: 'traditions',
      title: 'Sindoor Khela Joyous Moments on Bijoya Dashami',
      bengaliTitle: 'বিজয়া দশমীর আনন্দঘন সিঁদুর খেলার রঙিন মুহূর্ত',
      image: '/gallery/img_2 (23).jpeg',
      tag: 'Festive Devotion',
      featured: false
    },
    {
      id: 37,
      category: 'traditions',
      title: 'Devotees Gathering for Sacred Devi Baran Ritual',
      bengaliTitle: 'মাকে বিদায় জানানোর ঐতিহ্যবাহী বরণ আচার',
      image: '/gallery/img_2 (24).jpeg',
      tag: 'Festive Devotion',
      featured: false
    },
    {
      id: 38,
      category: 'traditions',
      title: 'Offerings of Sweets and Betel Leaves to the Goddess',
      bengaliTitle: 'দেবী বরণে মিষ্টিমুখ ও পানপাতার সাবেকি প্রথা',
      image: '/gallery/img_2 (25).jpeg',
      tag: 'Festive Devotion',
      featured: false
    },
    {
      id: 39,
      category: 'traditions',
      title: 'Emotional Farewell: Devi Baran Ceremony',
      bengaliTitle: 'মায়ের বিদায়লগ্নে আবেগাপ্লুত বরণ মুহূর্ত',
      image: '/gallery/img_2 (26).jpeg',
      tag: 'Festive Devotion',
      featured: false
    },
    {
      id: 40,
      category: 'traditions',
      title: 'Red Vermilion Celebration & Festive Camaraderie',
      bengaliTitle: 'রক্তিম সিঁদুরের আবিরে উৎসবমুখর প্রাঙ্গণ',
      image: '/gallery/img_2 (27).jpeg',
      tag: 'Festive Devotion',
      featured: false
    },
    {
      id: 41,
      category: 'traditions',
      title: 'Devotees Bidding Farewell: Visarjan Procession Preparation',
      bengaliTitle: 'বিসর্জনের প্রস্তুতি ও ভক্তদের চোখের জলে বিদায়',
      image: '/gallery/img_2 (28).jpeg',
      tag: 'Festive Devotion',
      featured: false
    },
    {
      id: 42,
      category: 'traditions',
      title: 'Annual Cloth Distribution Drive (বস্ত্রবিতরণ)',
      bengaliTitle: 'প্রতি বছরের মতো সমাজের দুস্থ মানুষের মাঝে বস্ত্রবিতরণ কর্মসূচি',
      image: '/gallery/img_3 (1).png',
      tag: 'Social Initiative',
      featured: false
    },
    {
      id: 43,
      category: 'traditions',
      title: 'Khuti Puja Auspicious Inauguration Ceremony',
      bengaliTitle: 'ভট্টাচার্য্যপাড়ার পবিত্র খুঁটিপূজা ও উৎসবের শুভ সূচনা',
      image: '/gallery/img_3 (2).png',
      tag: 'Sacred Ritual',
      featured: false
    },
    {
      id: 44,
      category: 'traditions',
      title: 'Free Mega Health Check-up Camp & Eye Care Drive',
      bengaliTitle: 'বিনামূল্যে স্বাস্থ্য ও চক্ষু পরীক্ষা শিবির ও সমাজসেবা',
      image: '/gallery/img_3.jpeg',
      tag: 'Community Service',
      featured: false
    },
    {
      id: 45,
      category: 'pandal',
      title: 'Puja 2026 Theme Poster "Anubhuti" (অনুভূতি)',
      bengaliTitle: '২০২৬ সালের শারদোৎসবের বিশেষ ভাবনা ও থিম "অনুভূতি"',
      image: '/gallery/theme.jpeg',
      tag: 'Theme Concept',
      featured: false
    }
  ];

  // If in 'all' view and showAll is false, show only featured items (the best ones).
  // If showAll is true or viewing a specific category, show all matching photos.
  const displayedItems = activeFilter === 'all'
    ? (showAll ? galleryItems : galleryItems.filter(item => item.featured))
    : galleryItems.filter(item => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') {
        const currentIndex = displayedItems.findIndex(item => item.id === selectedImage.id);
        if (currentIndex > 0) {
          setSelectedImage(displayedItems[currentIndex - 1]);
        } else {
          setSelectedImage(displayedItems[displayedItems.length - 1]);
        }
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = displayedItems.findIndex(item => item.id === selectedImage.id);
        if (currentIndex < displayedItems.length - 1) {
          setSelectedImage(displayedItems[currentIndex + 1]);
        } else {
          setSelectedImage(displayedItems[0]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, displayedItems]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const currentIndex = displayedItems.findIndex(item => item.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(displayedItems[currentIndex - 1]);
    } else {
      setSelectedImage(displayedItems[displayedItems.length - 1]);
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const currentIndex = displayedItems.findIndex(item => item.id === selectedImage.id);
    if (currentIndex < displayedItems.length - 1) {
      setSelectedImage(displayedItems[currentIndex + 1]);
    } else {
      setSelectedImage(displayedItems[0]);
    }
  };

  const filterCategories = [
    { id: 'all', label: 'All Photos', count: galleryItems.length },
    { id: 'pandal', label: 'Pandal Architecture', count: galleryItems.filter(i => i.category === 'pandal').length },
    { id: 'pratima', label: 'Maa Durga Pratima', count: galleryItems.filter(i => i.category === 'pratima').length },
    { id: 'branding', label: 'Sponsor Branding & Gates', count: galleryItems.filter(i => i.category === 'branding').length },
    { id: 'traditions', label: 'Festive Devotion & Rituals', count: galleryItems.filter(i => i.category === 'traditions').length },
  ];

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
          {filterCategories.map(filter => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-festive-gold text-black shadow-lg shadow-festive-gold/20 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-festive-gold/50'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeFilter === filter.id
                  ? 'bg-black/20 text-black'
                  : 'bg-white/10 text-festive-yellow'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map(item => (
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
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold text-festive-yellow tracking-wider">
                    {item.tag}
                  </span>
                  {item.featured && activeFilter === 'all' && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-festive-gold bg-black/50 px-2 py-0.5 rounded-full border border-festive-gold/30 backdrop-blur-sm">
                      <Sparkles className="w-2.5 h-2.5" /> Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-festive-cream transition line-clamp-1">
                  {item.title}
                </h3>
                <span className="text-xs font-bengali text-slate-300 line-clamp-1">
                  {item.bengaliTitle}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <ZoomIn className="w-4 h-4 text-festive-yellow" />
              </div>
            </div>
          ))}
        </div>

        {/* "See More" / "Show Less" Expand Toggle (Only on 'all' filter) */}
        {activeFilter === 'all' && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-festive-gold via-yellow-500 to-festive-gold text-black font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-festive-gold/25 hover:shadow-festive-gold/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-black animate-spin" style={{ animationDuration: '4s' }} />
              <span>
                {showAll
                  ? 'Show Best Highlights • সংক্ষেপ করুন'
                  : `See More Photos (${galleryItems.length - 12} More) • সমস্ত ছবি দেখুন`}
              </span>
              {showAll ? (
                <ChevronUp className="w-5 h-5 text-black" />
              ) : (
                <ChevronDown className="w-5 h-5 text-black" />
              )}
            </button>
            <p className="text-xs text-slate-400 mt-3 font-medium">
              {showAll
                ? `Showing all ${galleryItems.length} photos across all celebrations and events.`
                : `Showing top 12 curated highlights. Click "See More" to view all ${galleryItems.length} photos.`}
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border-festive-gold/40 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:text-festive-yellow border border-white/20 flex items-center justify-center transition shadow-lg"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-festive-gold hover:text-black text-white border border-white/20 flex items-center justify-center transition-all shadow-xl"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-festive-gold hover:text-black text-white border border-white/20 flex items-center justify-center transition-all shadow-xl"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Display */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center p-2">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[68vh] w-full object-contain rounded-lg"
                />
              </div>

              {/* Image Info Bar */}
              <div className="p-5 sm:p-6 bg-festive-card border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase font-bold text-festive-gold">{selectedImage.tag}</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">
                      Photo {displayedItems.findIndex(i => i.id === selectedImage.id) + 1} of {displayedItems.length}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{selectedImage.title}</h3>
                  <span className="text-sm font-bengali text-slate-300 block mt-0.5">{selectedImage.bengaliTitle}</span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-2.5 rounded-full btn-shimmer text-white text-xs font-bold uppercase tracking-wider shrink-0"
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
