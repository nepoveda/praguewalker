"use client";
import React from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";

const Contact = () => {
  return (
      <section className="md:py-32 overflow-hidden bg-[#0A0A0A] pt-16 pb-16 relative" id="contact">
        {/* Decorative Ambient Blurs */}
        <div
            className="absolute top-0 right-0 w-100 md:w-200 h-100 md:h-200 bg-[#6B1524]/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div
            className="absolute bottom-0 left-0 w-75 md:w-150 h-75 md:h-150 bg-[#E8501C]/10 rounded-full blur-[60px] md:blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="w-full max-w-360 mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-24 gap-x-12 gap-y-12 items-center">
            {/* Text Content (LEFT SIDE) */}
            <div className="flex flex-col text-white relative z-10">
              {/* Atmospheric Watermark */}
              <div
                  className="absolute bottom-0 right-0 pointer-events-none select-none -z-10 translate-y-4 md:translate-x-8">
                <Image
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07788b40-f9a1-40b4-943f-db47d279d93b_1600w.png"
                    alt=""
                    // just some values to make the image fit the screen
                    width={100}
                    height={100}
                    className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain opacity-10 mix-blend-screen"
                />
              </div>

              <div className="reveal-up text-[#E8501C] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                Begin Your Journey
              </div>
              <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Your
                Private Prague Awaits.</h2>
              <p className="reveal-up leading-relaxed sm:text-lg md:mb-10 text-base font-normal text-white/70 max-w-xl mb-8">
                Ready to experience the city on your terms? Choose one of our signature walks or let us know
                if you have a specific interest in mind. We are here to make your stay exceptional.
              </p>

              <div className="reveal-up flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E8501C] group-hover:border-[#E8501C] transition-all">
                    <Icon icon="solar:letter-linear" width="20"
                          className="md:w-6 text-[#E8501C] group-hover:text-white transition-colors"></Icon>
                  </div>
                  <div>
                                    <span
                                        className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1">Email Us Directly</span>
                    <a href="mailto:experiences@praguewalker.com"
                       className="hover:text-[#E8501C] transition-colors text-sm sm:text-base font-medium">experiences@praguewalker.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E8501C] group-hover:border-[#E8501C] transition-all">
                    <Icon icon="solar:phone-calling-linear" width="20"
                          className="md:w-6 text-[#E8501C] group-hover:text-white transition-colors"></Icon>
                  </div>
                  <div>
                                    <span
                                        className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1">Call or WhatsApp</span>
                    <a href="tel:+420603181300"
                       className="text-sm sm:text-base font-medium hover:text-[#E8501C] transition-colors">+420
                      603 181 300</a>
                  </div>
                </div>

                {/* Secondary Ghost Button */}
                <Link href="#contact"
                   className="mt-4 inline-flex items-center justify-center gap-2 h-12 md:h-14 px-6 md:px-8 bg-transparent text-white border border-white/30 text-sm font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-fit backdrop-blur-sm">
                  Contact Us for Customized Request →
                </Link>
              </div>
            </div>

            {/* Booking Form (RIGHT SIDE) */}
            <div
                className="reveal-up bg-white p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-4xl shadow-2xl relative">
              <div
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none rounded-full"></div>
              <h3 className="md:text-2xl md:mb-8 text-xl font-semibold text-[#6B1524] tracking-tight mb-6">Request
                an Itinerary</h3>

              <form className="flex flex-col gap-4 md:gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="E.g. John Doe"
                           className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#E8501C] focus:ring-1 focus:ring-[#E8501C] transition-all text-[#0A0A0A] text-sm placeholder-gray-400"/>
                  </div>
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com"
                           className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#E8501C] focus:ring-1 focus:ring-[#E8501C] transition-all text-[#0A0A0A] text-sm placeholder-gray-400"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="date">Preferred Date</label>
                    <input type="date" id="date"
                           className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#E8501C] focus:ring-1 focus:ring-[#E8501C] transition-all text-sm text-[#0A0A0A]"/>
                  </div>
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="guests">Party Size</label>
                    <select id="guests"
                            className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#E8501C] focus:ring-1 focus:ring-[#E8501C] transition-all text-sm text-[#0A0A0A] appearance-none cursor-pointer">
                      <option>1-2 Guests</option>
                      <option>3-4 Guests</option>
                      <option>5-6 Guests</option>
                      <option>7+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                      className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                      htmlFor="message">Your Interests</label>
                  <textarea id="message" rows={4}
                            placeholder="Tell us what you'd love to see (e.g., Jewish Quarter, Architecture, Food, specific pace)..."
                            className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#E8501C] focus:ring-1 focus:ring-[#E8501C] transition-all text-sm text-[#0A0A0A] placeholder-gray-400 resize-none"></textarea>
                </div>
                <button type="submit"
                        className="h-12 md:h-14 w-full bg-[#E8501C] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#c94315] transition-colors mt-2 shadow-lg shadow-[#E8501C]/20 hover:shadow-[#E8501C]/40 uppercase tracking-widest">
                  Book Your Private Tour <Icon icon="solar:plain-2-linear"
                                                       width="18"></Icon>
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-1 uppercase tracking-wider">No
                  commitment required. 100% private.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;