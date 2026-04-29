"use client";

import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const faqData = [
  {
    question: "What is included in a private tour?",
    answer: "Our private tours include the dedicated services of an expert local guide, a customized itinerary tailored to your pace and interests, and convenient hotel meet-up. Entrance fees and meals are typically not included unless specifically requested."
  },
  {
    question: "Do you accommodate large groups?",
    answer: "Yes, while we specialize in intimate experiences for couples and families, we can accommodate larger private groups by arranging additional expert guides to maintain our high standard of personalized service."
  },
  {
    question: "What happens if it rains?",
    answer: "Prague is beautiful in all weather. Our tours proceed rain or shine. In case of heavy rain, our expert guides seamlessly adapt the route to include more indoor historical sites and hidden arcades."
  },
  {
    question: "Can the itinerary be adjusted on the go?",
    answer: "Absolutely. The beauty of a private tour is its flexibility. Your guide is there exclusively for you and will happily adjust the pace, focus, or route based on your real-time preferences."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <section
          className="py-16 md:py-32 border-y bg-light border-border-light shadow-[inset_0_1px_0_0_#FFFFFF,inset_0_-1px_0_0_#FFFFFF]"
          id="faq">
        <div className="w-full max-w-360 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* FAQ Accordion */}
            <div>
              <div className="reveal-up text-primary font-semibold text-xs tracking-widest-extra uppercase mb-4">
                Good to know
              </div>
              <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary tracking-tight">
                Frequently Asked Questions
              </h2>
              <div
                  className="reveal-up w-20 sm:w-24 h-0.5 bg-linear-to-r from-primary to-transparent mt-6 mb-8 md:mb-10 rounded-full"></div>

              <div className="flex flex-col reveal-up">
                {faqData.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                      <div key={index} className="border-b border-gray-200">
                        <button
                            className="w-full py-5 md:py-6 text-left flex justify-between items-center bg-transparent group"
                            onClick={() => toggleFaq(index)}
                        >
                      <span
                          className="text-base md:text-lg font-semibold text-dark group-hover:text-primary transition-colors pr-4">
                        {faq.question}
                      </span>
                          <Icon
                              icon="solar:alt-arrow-down-linear"
                              width="24"
                              height="24"
                              className={`text-primary transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                          ></Icon>
                        </button>
                        <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                          <div className="faq-inner text-sm md:text-base text-gray-600 font-normal leading-relaxed">
                            <div className="pb-6">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>

            {/* Banner */}
            <div
                className="reveal-up relative w-full h-full min-h-75 md:min-h-100 rounded-4xl md:rounded-[2.5rem] overflow-hidden bg-dark shadow-2xl mt-4 lg:mt-0 group">
              <Image
                  src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1000&auto=format&fit=crop"
                  alt="Prague details"
                  // just some values the classes should handle that
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div
                  className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b3478ad-b1f0-4ef6-8994-db7941b8922c_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
              <div
                  className="absolute bottom-0 left-0 p-8 md:p-10 w-full bg-linear-to-t from-black/80 to-transparent">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3 md:mb-4 drop-shadow-lg">
                  Explore More.<br/>Ask Anything.
                </h3>
                <Link href="#contact"
                   className="inline-flex items-center gap-2 text-white font-semibold text-[10px] md:text-sm uppercase tracking-widest hover:text-primary transition-colors mt-2">
                  Contact our team <Icon icon="solar:arrow-right-linear" width="20"></Icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Faq;