"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Icon } from "@iconify/react";

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
      <div className="hidden md:flex h-10 w-full bg-secondary items-center justify-center relative z-50">
        <div className="w-full max-w-360 mx-auto px-6 flex items-center justify-between">
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

      <header className="sticky flex bg-white/90 w-full h-20 md:h-26.5 z-40 border-gray-100 border-b top-0 backdrop-blur-md items-center transition-all">
        <div className="w-full max-w-360 mx-auto px-6 flex items-center justify-between">
          <Link href="#" className="shrink-0 flex items-center" onClick={closeMenu}>
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aada8cd-4d16-4935-b338-93b905a1dc0c_800w.png"
              alt="Prague Walker Logo"
              // just some values the classes should handle that
              width={150}
              height={150}
              className="h-13.75 md:h-17.5 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#" className="text-sm font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">Home</Link>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <Link href="#about" className="text-sm font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">About</Link>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <Link href="#tours" className="text-sm font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">Tours</Link>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <Link href="#faq" className="text-sm font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">FAQ</Link>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            <Link href="#contact" className="text-sm font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#contact" className="h-10 px-8 bg-primary text-white text-xs font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Book a Tour <Icon icon="solar:arrow-right-linear" width="16"></Icon>
            </Link>
          </div>

          <button onClick={toggleMenu} aria-label="toggle menu" className="lg:hidden text-dark p-2 -mr-2 focus:outline-none">
            <Icon icon="solar:hamburger-menu-linear" width="32" height="32" className="stroke-[1.5]"></Icon>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aada8cd-4d16-4935-b338-93b905a1dc0c_800w.png"
            alt="Prague Walker Logo"
            // just some values the classes should handle that
            width={150}
            height={150}
            className="h-13.75 w-auto"
          />
          <button onClick={closeMenu} aria-label="close menu" className="text-dark p-2 -mr-2 focus:outline-none hover:text-primary transition-colors">
            <Icon icon="solar:close-circle-linear" width="32" height="32" className="stroke-[1.5]"></Icon>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center grow gap-8 px-6 pb-20">
          <Link href="#" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">Home</Link>
          <Link href="#about" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">About</Link>
          <Link href="#tours" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">Tours</Link>
          <Link href="#faq" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">FAQ</Link>
          <Link href="#contact" onClick={closeMenu} className="text-xl font-semibold uppercase tracking-widest text-dark hover:text-primary transition-colors">Contact</Link>

          <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent my-2 rounded-full"></div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-widest">Call or WhatsApp</span>
            <a href="tel:+420603181300" className="text-xl font-semibold text-dark hover:text-primary transition-colors">+420 603 181 300</a>
          </div>

          <Link href="#contact" onClick={closeMenu} className="mt-4 h-14 px-10 bg-primary text-white text-sm font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-primary-dark shadow-lg shadow-primary/30 w-full max-w-xs transition-colors">
            Book a Tour <Icon icon="solar:arrow-right-linear" width="18"></Icon>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;