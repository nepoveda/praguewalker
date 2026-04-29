"use client";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* 1. HEADER & TOP BAR */}
      <div className="hidden md:flex h-10 w-full bg-[#6B1524] items-center justify-center relative z-50">
        <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          <span 
            className="uppercase text-xs font-normal text-white tracking-widest opacity-90 cursor-pointer" 
            onClick={() => window.location.href = 'http://www.ricksteves.com/'} 
            role="button"
          >
            Recommended by Rick Steves
          </span>
          <span className="uppercase text-xs font-normal text-white tracking-widest opacity-90">
            25+ years of experience
          </span>
        </div>
      </div>

      <header className="sticky flex bg-white/90 w-full h-[80px] md:h-[106px] z-40 border-gray-100 border-b top-0 backdrop-blur-md items-center transition-all">
        <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aada8cd-4d16-4935-b338-93b905a1dc0c_800w.png" 
              alt="Prague Walker Logo" 
              className="h-[55px] md:h-[70px] w-auto" 
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">Home</a>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <a href="#about" className="text-sm font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">About</a>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <a href="#tours" className="text-sm font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">Tours</a>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <a href="#faq" className="text-sm font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">FAQ</a>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <a href="#contact" className="text-sm font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">Contact</a>
          </nav>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#contact" className="h-10 px-8 bg-[#E8501C] text-white text-xs font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-[#c94315] transition-colors shadow-lg shadow-[#E8501C]/20 hover:shadow-[#E8501C]/40">
              Book a Tour <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
            </a>
          </div>
          
          <button onClick={toggleMenu} className="lg:hidden text-[#0A0A0A] p-2 -mr-2 focus:outline-none">
            <iconify-icon icon="solar:hamburger-menu-linear" width="32" height="32" className="stroke-[1.5]"></iconify-icon>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[80px] border-b border-gray-100">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aada8cd-4d16-4935-b338-93b905a1dc0c_800w.png" 
            alt="Prague Walker Logo" 
            className="h-[55px] w-auto" 
          />
          <button onClick={closeMenu} className="text-[#0A0A0A] p-2 -mr-2 focus:outline-none hover:text-[#E8501C] transition-colors">
            <iconify-icon icon="solar:close-circle-linear" width="32" height="32" className="stroke-[1.5]"></iconify-icon>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow gap-8 px-6 pb-20">
          <a href="#" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">Home</a>
          <a href="#about" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">About</a>
          <a href="#tours" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">Tours</a>
          <a href="#faq" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">FAQ</a>
          <a href="#contact" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-[#0A0A0A] hover:text-[#E8501C] transition-colors">Contact</a>
          
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#E8501C] to-transparent my-2 rounded-full"></div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-widest">Call or WhatsApp</span>
            <a href="tel:+420603181300" className="text-xl font-semibold text-[#0A0A0A] hover:text-[#E8501C] transition-colors">+420 603 181 300</a>
          </div>
          
          <a href="#contact" onClick={closeMenu} className="mt-4 h-14 px-10 bg-[#E8501C] text-white text-sm font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-[#c94315] shadow-lg shadow-[#E8501C]/30 w-full max-w-xs transition-colors">
            Book a Tour <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;