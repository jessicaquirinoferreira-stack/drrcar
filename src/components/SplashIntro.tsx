import React, { useEffect, useState } from 'react';
import { ASSETS } from '../assets';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface SplashIntroProps {
  onComplete: () => void;
  lang: Language;
}

export const SplashIntro: React.FC<SplashIntroProps> = ({ onComplete, lang }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const totalDuration = 5000; // 5 seconds
  const updateInterval = 50;

  // Preload all 6 photos + logo during the 5 seconds for instant site loading
  useEffect(() => {
    const imagesToPreload = [
      ASSETS.logo,
      ASSETS.hero,
      ASSETS.about,
      ASSETS.usa,
      ASSETS.space,
      ASSETS.presentation1,
      ASSETS.presentation2,
    ];

    let loaded = 0;
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        setImagesLoadedCount(loaded);
      };
      img.onerror = () => {
        loaded += 1;
        setImagesLoadedCount(loaded);
      };
    });
  }, []);

  // 5-second countdown & progress timer
  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        handleFinish();
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, []);

  const handleFinish = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  const secondsRemaining = Math.max(0, Math.ceil((totalDuration - (progress / 100) * totalDuration) / 1000));

  return (
    <div
      role="banner"
      aria-label="Introdução oficial Dra. Tatiane Vilela"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-10 transition-all duration-700 select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      } bg-[#FAF7F2] text-[#161B20] overflow-hidden`}
    >
      {/* Light Luxury Ambient Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EEDCB0]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF0D6]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3E8CE]/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle luxury pattern texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Top Header: Badge & Skip Button */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EDE6DC] shadow-xs text-xs font-semibold text-[#8C631A]">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>CRP 06/98605-SP · Psicologia & Sexologia</span>
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 hover:bg-white text-[#734F1B] hover:text-[#111417] border border-[#EDE6DC] shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <span>{lang === 'pt' ? 'Entrar no site' : 'Enter site'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center: Official Golden Logo (Larger, Clean, No Texts Below) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-4 animate-in fade-in zoom-in-95 duration-1000">
        {/* Logo Container with Subtle Floating Golden Aura */}
        <div className="relative group">
          <div className="absolute -inset-8 bg-gradient-to-tr from-[#C9A227]/25 via-[#DFB75A]/35 to-transparent rounded-full blur-2xl animate-pulse pointer-events-none" />

          <img
            src={ASSETS.logo}
            alt="Dra. Tatiane Vilela - Logo Dourado Oficial"
            className="w-64 sm:w-80 md:w-96 lg:w-[450px] max-w-[88vw] h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(201,162,39,0.3)] hover:scale-102 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Bottom: Luxury Progress Bar & Speed Preloader Indicator */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-3">
        {/* Sleek golden progress line */}
        <div className="w-full h-1.5 bg-[#EFE9DF] rounded-full overflow-hidden shadow-inner relative">
          <div
            className="h-full bg-gradient-to-r from-[#DFB75A] via-[#C9A227] to-[#8C631A] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(201,162,39,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-[11px] text-[#734F1B] font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {lang === 'pt'
                ? `Carregando todas as fotos (${imagesLoadedCount}/7)...`
                : `Preloading all photos (${imagesLoadedCount}/7)...`}
            </span>
          </span>
          <span className="font-mono text-xs">{secondsRemaining}s</span>
        </div>
      </div>
    </div>
  );
};
