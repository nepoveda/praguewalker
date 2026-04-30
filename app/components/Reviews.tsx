"use client";

import React, {useEffect, useRef, useState} from 'react';
import {Icon} from "@iconify/react";

type Review = {
  name: string;
  loc: string;
  text: string;
};

type ScrollDirection = "prev" | "next";

const reviewsData: Review[] = [
  {
    name: "Eleanor & James",
    loc: "London, UK",
    text: "\"An absolute revelation. We thought we knew Prague, but our guide unlocked a completely different city. The historical depth combined with such a relaxed, friendly pace made this the highlight of our European trip.\""
  },
  {
    name: "The Mitchell Family",
    loc: "Toronto, Canada",
    text: "\"Having a private academic guide meant we could ask highly specific questions about the Velvet Revolution. It felt less like a tour and more like walking through history with an extremely knowledgeable friend.\""
  },
  {
    name: "Marcus & Sophia",
    loc: "Sydney, Australia",
    text: "\"From the seamless hotel pick-up to the magnificent hidden cafes they showed us, every detail was perfect. If you value your time and want a truly premium experience, this is the only way to see Prague.\""
  },
  {
    name: "David & Sarah",
    loc: "New York, USA",
    text: "\"We wanted to see the hidden gems of Prague, and Prague Walker delivered beyond expectations. The pace was perfect, and the knowledge of our guide was simply astounding.\""
  },
  {
    name: "Clara & Tom",
    loc: "Berlin, Germany",
    text: "\"A truly bespoke experience. The guide knew exactly when to share historical facts and when to let us simply absorb the breathtaking beauty of the Charles Bridge.\""
  },
  {
    name: "The Chen Family",
    loc: "Singapore",
    text: "\"We bypassed all the typical tourist traps. Our guide felt like a local friend showing us their favorite hidden courtyards, secret gardens, and authentic cafes.\""
  },
  {
    name: "Julia M.",
    loc: "Chicago, USA",
    text: "\"Impeccable pacing. Traveling with older parents can be tough, but Prague Walker tailored the route perfectly. They ensured everyone was comfortable without missing anything.\""
  },
  {
    name: "Robert & Elaine",
    loc: "Edinburgh, UK",
    text: "\"Fascinating insights into the Velvet Revolution. Standing in Wenceslas Square hearing the firsthand accounts gave us absolute chills. Unforgettable.\""
  },
  {
    name: "Akira & Mei",
    loc: "Tokyo, Japan",
    text: "\"The architecture tour was phenomenal. We saw details in the Cubist and Art Nouveau buildings we would have definitely walked right past on our own.\""
  },
  {
    name: "The Dubois Family",
    loc: "Paris, France",
    text: "\"Worth every penny. The privacy and exclusivity transformed our short stay in Prague into an unforgettable cultural deep-dive. Highly recommended.\""
  }
];

const ReviewCard = ({review}: { review: Review }) => {
  return (
      <div
          className="w-[85vw] sm:w-95 md:w-105 shrink-0 bg-light p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group/card hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        <Icon icon="solar:quote-right-bold" width="100"
              className="text-secondary opacity-[0.03] absolute -top-4 -right-4 group-hover/card:scale-110 transition-transform duration-500"></Icon>
        <div className="flex text-primary gap-1 mb-6 sm:mb-8 relative z-10">
          {[1, 2, 3, 4, 5].map((star) => (
              <Icon key={star} icon="solar:star-bold" width="18"></Icon>
          ))}
        </div>
        <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed mb-8 grow relative z-10 italic">
          {review.text}
        </p>
        <div className="mt-auto relative z-10">
          <h4 className="font-semibold text-dark text-base sm:text-lg">{review.name}</h4>
          <span className="text-xs sm:text-sm text-gray-500">{review.loc}</span>
        </div>
      </div>
  );
};

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const track1Ref = useRef<HTMLDivElement | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    const track1 = track1Ref.current;
    if (!slider || !track1) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let animationFrameId = 0;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (isAutoScrolling && !isDown) {
        slider.scrollLeft += scrollSpeed;
        const track1Width = track1.offsetWidth;
        const gap = window.innerWidth <= 639 ? 16 : 24;

        if (slider.scrollLeft >= track1Width + gap) {
          slider.scrollLeft -= (track1Width + gap);
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    // Mouse events
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      if (isDown) {
        isDown = false;
        slider.classList.remove('cursor-grabbing');
        slider.classList.add('cursor-grab');
      }
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      let newScroll = scrollLeft - walk;

      const track1Width = track1.offsetWidth;
      const gap = window.innerWidth <= 639 ? 16 : 24;

      if (newScroll <= 0) {
        newScroll += (track1Width + gap);
        scrollLeft += (track1Width + gap);
      } else if (newScroll >= track1Width + gap) {
        newScroll -= (track1Width + gap);
        scrollLeft -= (track1Width + gap);
      }

      slider.scrollLeft = newScroll;
    };

    const handleScroll = () => {
      if (isDown) return;
      const track1Width = track1.offsetWidth;
      const gap = window.innerWidth <= 639 ? 16 : 24;

      if (slider.scrollLeft <= 0) {
        slider.scrollLeft += (track1Width + gap);
      } else if (slider.scrollLeft >= (track1Width + gap)) {
        slider.scrollLeft -= (track1Width + gap);
      }
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [isAutoScrolling]);

  const scrollByAmount = (direction: ScrollDirection) => {
    const slider = sliderRef.current;
    const track1 = track1Ref.current;
    if (!slider || !track1) return;

    const card = track1.firstElementChild as HTMLElement | null;
    const gap = window.innerWidth <= 639 ? 16 : 24;
    const amount = card ? card.offsetWidth + gap : 350;
    const track1Width = track1.offsetWidth;

    if (direction === 'prev') {
      if (slider.scrollLeft < amount) {
        slider.scrollLeft += (track1Width + gap);
      }
      slider.scrollBy({left: -amount, behavior: 'smooth'});
    } else {
      if (slider.scrollLeft >= track1Width + gap) {
        slider.scrollLeft -= (track1Width + gap);
      }
      slider.scrollBy({left: amount, behavior: 'smooth'});
    }
  };

  return (
      <section className="py-16 md:py-32 bg-white" id="reviews">
        <div className="w-full max-w-360 mx-auto overflow-hidden relative group/section">
          <div className="text-center mb-12 md:mb-16 px-6">
            <div className="reveal-up text-primary font-semibold text-xs tracking-widest-extra uppercase mb-4">
              Guest Stories
            </div>
            <h2 className="reveal-up sm:text-4xl md:text-5xl text-3xl font-semibold text-secondary tracking-tight">
              A Highlight of the Journey
            </h2>
            <div
                className="reveal-up h-0.5 w-20 sm:w-24 mx-auto bg-linear-to-r from-transparent via-primary to-transparent mt-6 rounded-full"></div>
          </div>

          <div className="reveal-up w-full pt-4 pb-4 relative">
            {/* Navigation Arrows */}
            <button
                aria-label="previous reviews"
                onClick={() => scrollByAmount('prev')}
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
                className="hidden sm:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full items-center justify-center text-dark hover:text-white hover:bg-primary hover:border-primary shadow-lg transition-all opacity-0 group-hover/section:opacity-100 focus:opacity-100 duration-300"
            >
              <Icon icon="solar:alt-arrow-left-linear" width="24"></Icon>
            </button>
            <button
                aria-label="next reviews"
                onClick={() => scrollByAmount('next')}
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
                className="hidden sm:flex absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full items-center justify-center text-dark hover:text-white hover:bg-primary hover:border-primary shadow-lg transition-all opacity-0 group-hover/section:opacity-100 focus:opacity-100 duration-300"
            >
              <Icon icon="solar:alt-arrow-right-linear" width="24"></Icon>
            </button>

            {/* Track Wrapper with Edge Mask */}
            <div className="mask-edges w-full px-2 sm:px-4">
              <div
                  ref={sliderRef}
                  onMouseEnter={() => setIsAutoScrolling(false)}
                  onMouseLeave={() => setIsAutoScrolling(true)}
                  className="flex gap-4 sm:gap-6 w-full overflow-x-auto hide-scrollbar cursor-grab py-4 select-none"
              >
                <div ref={track1Ref} className="flex gap-4 sm:gap-6 shrink-0 min-w-max justify-around">
                  {reviewsData.map((review, i) => <ReviewCard key={`r1-${i}`} review={review}/>)}
                </div>
                <div className="flex gap-4 sm:gap-6 shrink-0 min-w-max justify-around" aria-hidden="true">
                  {reviewsData.map((review, i) => <ReviewCard key={`r2-${i}`} review={review}/>)}
                </div>
              </div>
            </div>
          </div>

          {/* TripAdvisor & Google Badge Section */}
          <div
              className="reveal-up mt-12 md:mt-16 flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 px-6">
            {/* TripAdvisor Badge */}
            <div
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 bg-white border border-gray-200 rounded-3xl md:rounded-full shadow-sm w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
                <div className="flex items-center gap-2 text-accent-green">
                  <Icon icon="simple-icons:tripadvisor" height="28" className="sm:h-8"></Icon>
                  <span className="font-bold text-lg sm:text-xl text-dark tracking-tight">Tripadvisor</span>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-1 text-accent-green">
                    {[1, 2, 3, 4, 5].map((dot) => (
                        <Icon key={dot} icon="solar:record-circle-bold" width="14"
                              className="sm:w-4"></Icon>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-dark mt-0.5">5.0 Excellent</span>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="w-full sm:w-auto mt-2 sm:mt-0 h-10 px-6 border border-primary text-primary bg-transparent text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors whitespace-nowrap">
                Write a Review <Icon icon="solar:pen-new-square-linear" width="16"></Icon>
              </a>
            </div>

            {/* Google Badge */}
            <div
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 bg-white border border-gray-200 rounded-3xl md:rounded-full shadow-sm w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
                <div className="flex items-center gap-2 text-accent-blue">
                  <Icon icon="simple-icons:google" height="28" className="sm:h-8"></Icon>
                  <span className="font-bold text-lg sm:text-xl text-dark tracking-tight">Google</span>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-1 text-accent-yellow">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} icon="solar:star-bold" width="16" className="sm:w-5"></Icon>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-dark mt-0.5">5.0 Excellent</span>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="w-full sm:w-auto mt-2 sm:mt-0 h-10 px-6 border border-primary text-primary bg-transparent text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors whitespace-nowrap">
                Write a Review <Icon icon="solar:pen-new-square-linear" width="16"></Icon>
              </a>
            </div>
          </div>

        </div>
      </section>
  );
};

export default Reviews;