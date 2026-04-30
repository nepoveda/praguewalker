"use client";
import React from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {CONTACT_EMAIL, CONTACT_NUMBER} from "@/app/constants";


const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailMessage = `
      This is simulation of sending contact form message.
      Here are some data: Name ${formData.get("name")} email address ${formData.get("email")}.
      For date ${formData.get("date")} with guest: ${formData.get("guests")}
      and message sent: ${formData.get("message")}
    `
    alert("Message sent: " + emailMessage);
  };
  return (
      <section className="md:py-32 overflow-hidden bg-dark pt-16 pb-16 relative" id="contact">
        {/* Decorative Ambient Blurs */}
        <div
            className="absolute top-0 right-0 w-100 md:w-200 h-100 md:h-200 bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div
            className="absolute bottom-0 left-0 w-75 md:w-150 h-75 md:h-150 bg-primary/10 rounded-full blur-[60px] md:blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

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

              <div className="reveal-up text-primary font-semibold text-xs tracking-widest-extra uppercase mb-4">
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
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                    <Icon icon="solar:letter-linear" width="20"
                          className="md:w-6 text-primary group-hover:text-white transition-colors"></Icon>
                  </div>
                  <div>
                                    <span
                                        className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1">Email Us Directly</span>
                    <a href={`mailto:${CONTACT_EMAIL}`}
                       className="hover:text-primary transition-colors text-sm sm:text-base font-medium">{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                    <Icon icon="solar:phone-calling-linear" width="20"
                          className="md:w-6 text-primary group-hover:text-white transition-colors"></Icon>
                  </div>
                  <div>
                                    <span
                                        className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1">Call or WhatsApp</span>
                    <a href={`tel:${CONTACT_NUMBER}`}
                       className="text-sm sm:text-base font-medium hover:text-primary transition-colors">{CONTACT_NUMBER}</a>
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
              <h3 className="md:text-2xl md:mb-8 text-xl font-semibold text-secondary tracking-tight mb-6">Request
                an Itinerary</h3>

              <form className="flex flex-col gap-4 md:gap-5" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="E.g. John Doe" required
                           className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-dark text-sm placeholder-gray-400"/>
                  </div>
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required
                           className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-dark text-sm placeholder-gray-400"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required
                           className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-dark"/>
                  </div>
                  <div className="flex flex-col">
                    <label
                        className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                        htmlFor="guests">Party Size</label>
                    <select id="guests" name="guests"
                            className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-dark appearance-none cursor-pointer">
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
                  <textarea id="message" name="message" rows={4} required
                            placeholder="Tell us what you'd love to see (e.g., Jewish Quarter, Architecture, Food, specific pace)..."
                            className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-dark placeholder-gray-400 resize-none"></textarea>
                </div>
                <button type="submit"
                        className="h-12 md:h-14 w-full bg-primary text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors mt-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 uppercase tracking-widest">
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