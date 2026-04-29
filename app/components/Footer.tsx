import React from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="bg-[#050505] border-white/5 border-t pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="w-full max-w-360 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            {/* Brand Info */}
            <div className="flex flex-col lg:col-span-2">
              <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aada8cd-4d16-4935-b338-93b905a1dc0c_800w.png"
                  alt="Prague Walker Logo"
                  // just some values to make the image fit the screen
                  width={120}
                  height={120}
                  className="h-12 md:h-16 w-auto mb-6 object-contain self-start brightness-0 invert"
              />
              <p className="text-xs md:text-sm text-white/50 font-normal leading-relaxed max-w-sm mb-4">
                Premium private walking tours in Prague. Discover the true essence of the city with our intellectual,
                bespoke, and perfectly paced itineraries.
              </p>
              <div className="flex flex-col gap-2 mb-6 md:mb-8">
                <span
                    className="text-xs md:text-sm text-white/70 font-medium">✓ 24-hour full refund policy on all tours</span>
                <span
                    className="text-xs md:text-sm text-white/70 font-medium">✓ Free cancellation up to 48 hours before</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="#"
                   className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Icon icon="ri:instagram-line" width="18"></Icon>
                </Link>
                <Link href="#"
                   className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Icon icon="ri:facebook-fill" width="18"></Icon>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col">
              <h4 className="text-white text-xs md:text-sm font-semibold tracking-wide mb-4 md:mb-6 uppercase">Explore</h4>
              <nav className="flex flex-col gap-3 md:gap-4">
                <Link href="#"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> Home
                </Link>
                <Link href="#about"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> About
                </Link>
                <Link href="#tours"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> Tours
                </Link>
                <Link href="#faq"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> FAQ
                </Link>
                <Link href="#contact"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> Contact
                </Link>
              </nav>
            </div>

            {/* Legal */}
            <div className="flex flex-col">
              <h4 className="text-white text-xs md:text-sm font-semibold tracking-wide mb-4 md:mb-6 uppercase">Legal</h4>
              <nav className="flex flex-col gap-3 md:gap-4">
                <Link href="#"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> Terms &amp; Conditions
                </Link>
                <Link href="#"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> Privacy
                  Policy
                </Link>
                <Link href="#"
                   className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors w-fit">
                  <span
                      className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span> Cancellation
                  Policy
                </Link>
              </nav>
            </div>
          </div>

          <div
              className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] uppercase text-white/40 tracking-widest text-center md:text-left">© 2026 Prague
              Walker. All rights reserved.</p>
            <p className="text-[10px] text-white/40 tracking-widest uppercase text-center md:text-right">Designed with
              precision for curious minds.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;