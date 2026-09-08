import React from 'react';
import confetti from 'canvas-confetti';
import { useDhaakAudio } from '../context/DhaakAudioContext';

export default function DhaakFloatingWidget() {
  const { isPlaying, togglePlay } = useDhaakAudio();

  const handleDhaakClick = () => {
    if (!isPlaying) {
      try {
        confetti({
          particleCount: 45,
          spread: 55,
          origin: { x: 0.92, y: 0.88 },
          colors: ['#f39c12', '#d9272e', '#f1c40f', '#fff8e7']
        });
      } catch {
        // ignore
      }
    }
    togglePlay();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 select-none">
      
      {/* Main Frameless Floating Dhaak (No Circular Frame, No Feathers) */}
      <div className="relative group">
        
        {/* Floating Musical Notes when Playing */}
        {isPlaying && (
          <div className="absolute -top-10 -left-6 right-0 bottom-0 pointer-events-none z-30">
            <span className="absolute -top-2 left-4 text-festive-yellow text-lg font-bold animate-note-float-1 drop-shadow-[0_0_6px_rgba(241,196,15,0.9)]">
              ♪
            </span>
            <span className="absolute -top-5 right-6 text-festive-gold text-xl font-bold animate-note-float-2 drop-shadow-[0_0_6px_rgba(243,156,18,0.9)]">
              ♫
            </span>
            <span className="absolute -top-1 right-12 text-festive-cream text-sm font-bold animate-note-float-3 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
              ♩
            </span>
          </div>
        )}

        {/* The Dhaak Drum Trigger Button - Completely Frameless */}
        <button
          onClick={handleDhaakClick}
          className="relative bg-transparent border-0 p-0 shadow-none cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label={isPlaying ? 'Pause Durga Puja Dhaak' : 'Play Durga Puja Dhaak'}
          title={isPlaying ? 'Click to pause Dhaak beats' : 'Click to play Durga Puja Dhaak'}
        >
          {/* Authentic Traditional Bengali Dhaak SVG (Without Feathers & Without Circular Frame) */}
          <svg 
            viewBox="0 0 240 140" 
            className={`w-28 h-20 sm:w-36 sm:h-24 filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)] transition-all duration-300 ${
              isPlaying ? 'drop-shadow-[0_8px_22px_rgba(243,156,18,0.6)]' : 'hover:drop-shadow-[0_8px_20px_rgba(243,156,18,0.4)]'
            }`}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Wooden Drum Shell Gradient */}
              <linearGradient id="framelessWood" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#962d0e" />
                <stop offset="25%" stopColor="#c03f16" />
                <stop offset="55%" stopColor="#6e210b" />
                <stop offset="85%" stopColor="#451406" />
                <stop offset="100%" stopColor="#250a03" />
              </linearGradient>

              {/* Red Brocade Festive Fabric Wrap */}
              <linearGradient id="framelessCloth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="35%" stopColor="#d9272e" />
                <stop offset="70%" stopColor="#961118" />
                <stop offset="100%" stopColor="#55080c" />
              </linearGradient>

              {/* Parchment Leather Drumhead Face */}
              <radialGradient id="framelessHead" cx="45%" cy="48%" r="52%">
                <stop offset="0%" stopColor="#fdf6ea" />
                <stop offset="55%" stopColor="#e8cca0" />
                <stop offset="85%" stopColor="#ba8d53" />
                <stop offset="100%" stopColor="#6e461b" />
              </radialGradient>

              {/* Cane Kathi (Drumsticks) */}
              <linearGradient id="framelessKathi" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff4df" />
                <stop offset="40%" stopColor="#e5b061" />
                <stop offset="100%" stopColor="#9e6616" />
              </linearGradient>

              {/* Brass Hoops */}
              <linearGradient id="framelessBrass" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e67e22" />
                <stop offset="35%" stopColor="#f1c40f" />
                <stop offset="75%" stopColor="#f39c12" />
                <stop offset="100%" stopColor="#a85202" />
              </linearGradient>
            </defs>

            {/* Acoustic Ripples Radiating from Drumhead when Playing */}
            {isPlaying && (
              <g transform="translate(178, 70)">
                <ellipse cx="0" cy="0" rx="22" ry="38" fill="none" stroke="#f1c40f" strokeWidth="2.5" className="animate-sound-ring-1" />
                <ellipse cx="0" cy="0" rx="36" ry="54" fill="none" stroke="#f39c12" strokeWidth="2" className="animate-sound-ring-2" />
                <ellipse cx="0" cy="0" rx="50" ry="70" fill="none" stroke="#d9272e" strokeWidth="1.5" className="animate-sound-ring-3" />
              </g>
            )}

            {/* Dhaak Drum Body Group (Vibrates in rhythm when playing) */}
            <g className={isPlaying ? 'animate-dhaak-beat origin-[115px_70px]' : ''}>
              
              {/* Left Drumhead (Leather Face & Rim - No Feathers) */}
              <ellipse cx="48" cy="70" rx="14" ry="38" fill="#421a08" stroke="url(#framelessBrass)" strokeWidth="2" />
              <ellipse cx="50" cy="70" rx="11" ry="34" fill="url(#framelessHead)" stroke="#2b1104" strokeWidth="1" />
              <ellipse cx="50" cy="70" rx="5" ry="16" fill="#caa066" opacity="0.6" />

              {/* Wooden Drum Body Shell */}
              <path 
                d="M 48,36 C 95,20 135,20 178,36 L 178,104 C 135,120 95,120 48,104 Z" 
                fill="url(#framelessWood)" 
                stroke="#3e1204" 
                strokeWidth="1.5"
              />

              {/* Brass Reinforcement Metal Bands */}
              <path d="M 60,33 C 65,58 65,82 60,107" stroke="url(#framelessBrass)" strokeWidth="2.5" fill="none" />
              <path d="M 166,33 C 171,58 171,82 166,107" stroke="url(#framelessBrass)" strokeWidth="2.5" fill="none" />

              {/* Red Brocade Festive Cloth Wrap in Center */}
              <path 
                d="M 88,26 C 114,23 128,23 150,27 L 150,113 C 128,117 114,117 88,114 Z" 
                fill="url(#framelessCloth)" 
                stroke="#f1c40f" 
                strokeWidth="1.2"
              />

              {/* Brocade Gold Borders */}
              <path d="M 90,26 L 90,114" stroke="#f1c40f" strokeWidth="2" strokeDasharray="3 1.5" />
              <path d="M 148,27 L 148,113" stroke="#f1c40f" strokeWidth="2" strokeDasharray="3 1.5" />

              {/* Central Golden Festive Medallion Motif */}
              <circle cx="119" cy="70" r="10" fill="#961118" stroke="#f1c40f" strokeWidth="1.5" />
              <circle cx="119" cy="70" r="5" fill="#f1c40f" />
              <path d="M 119,56 L 119,84 M 105,70 L 133,70" stroke="#f39c12" strokeWidth="1.2" />

              {/* Criss-Cross Leather Tuning Cords with Brass Tuning Rings */}
              <g stroke="#f39c12" strokeWidth="1.4" opacity="0.9" fill="none">
                <line x1="60" y1="35" x2="105" y2="114" />
                <line x1="105" y1="24" x2="150" y2="114" />
                <line x1="150" y1="27" x2="178" y2="104" />
                
                <line x1="60" y1="105" x2="105" y2="24" />
                <line x1="105" y1="114" x2="150" y2="27" />
                <line x1="150" y1="113" x2="178" y2="36" />

                {/* Golden Tension Rings (কন্দল) */}
                <circle cx="82" cy="73" r="2.8" fill="#f1c40f" stroke="#78350f" strokeWidth="0.8" />
                <circle cx="127" cy="67" r="2.8" fill="#f1c40f" stroke="#78350f" strokeWidth="0.8" />
                <circle cx="164" cy="71" r="2.8" fill="#f1c40f" stroke="#78350f" strokeWidth="0.8" />
              </g>

              {/* Right Drumhead Face (Beaten Face) */}
              <ellipse cx="178" cy="70" rx="14" ry="38" fill="#421a08" stroke="url(#framelessBrass)" strokeWidth="2" />
              <ellipse cx="176" cy="70" rx="11" ry="34" fill="url(#framelessHead)" stroke="#2b1104" strokeWidth="1" />
              <ellipse cx="176" cy="70" rx="5.5" ry="16" fill="#caa066" opacity="0.6" />

              {/* Acoustic Strike Flash when Playing */}
              {isPlaying && (
                <ellipse cx="177" cy="68" rx="8" ry="18" fill="#ffffff" opacity="0.5" className="animate-pulse" />
              )}
            </g>

            {/* Cane Drumsticks (Kathi) with Rapid Percussive Strike Animations */}
            {/* Primary Striking Stick */}
            <g className={`origin-[218px_26px] ${isPlaying ? 'animate-kathi-primary' : ''}`}>
              <path 
                d="M 226,16 C 210,36 195,56 177,66" 
                stroke="url(#framelessKathi)" 
                strokeWidth="3.4" 
                strokeLinecap="round" 
                fill="none" 
                filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.7))"
              />
              <circle cx="177" cy="66" r="2.8" fill="#5c3807" stroke="#fff" strokeWidth="0.6" />
              <line x1="223" y1="20" x2="218" y2="28" stroke="#d9272e" strokeWidth="3.8" />
            </g>

            {/* Secondary Alternating Stick */}
            <g className={`origin-[225px_42px] ${isPlaying ? 'animate-kathi-secondary' : ''}`}>
              <path 
                d="M 232,32 C 216,50 200,66 179,76" 
                stroke="url(#framelessKathi)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                fill="none" 
                filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.7))"
              />
              <circle cx="179" cy="76" r="2.6" fill="#5c3807" stroke="#fff" strokeWidth="0.6" />
              <line x1="229" y1="36" x2="224" y2="43" stroke="#d9272e" strokeWidth="3.4" />
            </g>
          </svg>
        </button>
      </div>

    </div>
  );
}
