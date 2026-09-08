import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const DhaakAudioContext = createContext(null);

export function DhaakAudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const audioRef = useRef(null);

  useEffect(() => {
    // Single shared audio instance for clean playback without collisions
    const audio = new Audio('/audio/dhaak.mp3');
    audio.loop = true; // Looping as requested
    audio.volume = volume;
    audioRef.current = audio;

    const handleEnded = () => {
      if (audio.loop) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        setIsPlaying(false);
      }
    };

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio playback was prevented by the browser:', err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <DhaakAudioContext.Provider value={{ isPlaying, togglePlay, isMuted, toggleMute, volume, setVolume }}>
      {children}
    </DhaakAudioContext.Provider>
  );
}

export function useDhaakAudio() {
  const context = useContext(DhaakAudioContext);
  if (!context) {
    throw new Error('useDhaakAudio must be used within DhaakAudioProvider');
  }
  return context;
}
