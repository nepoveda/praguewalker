import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Icon} from "@iconify/react";

const Hero = () => {
  return (
      <section
          className="relative h-[85vh] max-h-225 min-h-150 w-full flex items-center justify-center overflow-hidden">
        <div
            className="absolute inset-0 w-full h-full bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b3478ad-b1f0-4ef6-8994-db7941b8922c_3840w.jpg')] bg-cover bg-center">
          <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b3478ad-b1f0-4ef6-8994-db7941b8922c_3840w.jpg"
              alt="Prague View 1"
              // just some values the classes should handle that
              width={1920}
              height={1080}
              className="hero-slide"
              style={{animationDelay: '0s'}}
          />
          <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83db25e9-f79f-4a5b-9e4d-c71c02f11dfd_3840w.jpg"
              alt="Prague View 2"
              // just some values the classes should handle that
              width={1920}
              height={1080}
              className="hero-slide"
              style={{animationDelay: '-12s'}}
          />
          <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2ce33af-67c9-44cc-9d15-cf6fe5802ad0_3840w.jpg"
              alt="Prague View 3"
              // just some values the classes should handle that
              width={1920}
              height={1080}
              className="hero-slide"
              style={{animationDelay: '-6s'}}
          />
        </div>

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-dark/90"></div>
        <div
            className="bg-linear-to-tr from-dark/50 via-transparent to-dark/10 absolute top-0 right-0 bottom-0 left-0"></div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-6 text-center flex flex-col items-center">
          <div
              className="reveal-up inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl mb-6 sm:mb-8">
          <span
              className="uppercase text-[10px] sm:text-xs sm:tracking-widest-extreme font-light text-slate-50 tracking-widest-extra">
            Private &amp; Customized Walking Tours
          </span>
          </div>
          <h1 className="reveal-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] leading-[1.15]">
            Prague isn&apos;t a destination.<br/>
            <span className="italic bg-linear-to-r from-[#FFB394] to-primary bg-clip-text text-transparent">It&apos;s an invitation.</span>
          </h1>
          <p className="reveal-up text-base sm:text-lg md:text-xl font-normal text-white/90 max-w-2xl mx-auto mt-6 sm:mt-8 drop-shadow-md leading-relaxed">
            Experience the city&apos;s timeless beauty through private, expert-led tours designed for the curious
            traveler. No crowds, no scripts — just authentic stories and an intimate perspective on the City of a
            Hundred Spires.
          </p>
          <div
              className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 w-full sm:w-auto">
            <Link href="#tours"
                  className="w-full sm:w-auto h-14 px-8 sm:px-10 bg-primary text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 hover:shadow-primary/50">
              View Our Signature Tours <Icon icon="solar:arrow-right-linear" width="18"></Icon>
            </Link>
            <Link href="#contact"
                  className="sm:w-auto flex items-center justify-center gap-2 hover:bg-white/20 transition-all text-sm font-semibold text-white bg-white/10 w-full h-14 border-white/30 border rounded-full px-8 sm:px-10 backdrop-blur-md">
              Request a Customized Itinerary →
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Hero;