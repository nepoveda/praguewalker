import React from 'react';
import {Icon} from "@iconify/react";

const Usps = () => {
  return (
    <section className="md:py-32 border-y bg-light border-border-light pt-16 pb-16 shadow-[inset_0_1px_0_0_#FFFFFF,inset_0_-1px_0_0_#FFFFFF]" id="usps">
      <div className="w-full max-w-360 mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <div className="reveal-up text-primary font-semibold text-xs tracking-widest-extra uppercase mb-4">
            The Prague Walker Difference
          </div>
          <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary tracking-tight">
            Why Choose Us
          </h2>
          <div className="reveal-up w-20 sm:w-24 h-0.5 bg-linear-to-r from-primary to-transparent mt-6 mb-8 md:mb-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* USP 1 */}
          <div className="reveal-up bg-linear-to-br from-white via-white to-light-beige hover:to-light-beige-dark p-6 md:p-8 rounded-3xl shadow-sm border border-border-lighter flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-light-orange border border-border-orange-light flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
              <Icon icon="solar:shield-check-linear" width="28" className="stroke-[1.5]"></Icon>
            </div>
            <h4 className="text-xl font-semibold text-dark tracking-tight mb-3 md:mb-4">Total Privacy &amp; Focus</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">Every tour is strictly private. Your guide’s attention is yours alone, allowing for a deeper conversation and a pace that suits you or your private group perfectly.</p>
          </div>
          {/* USP 2 */}
          <div className="reveal-up bg-linear-to-br from-white via-white to-light-beige hover:to-light-beige-dark p-6 md:p-8 rounded-3xl shadow-sm border border-border-lighter flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-light-orange border border-border-orange-light flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
              <Icon icon="solar:map-point-linear" width="28" className="stroke-[1.5]"></Icon>
            </div>
            <h4 className="text-xl font-semibold text-dark tracking-tight mb-3 md:mb-4">Door-to-Door Service</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">Your experience begins at your hotel lobby. We handle the logistics and the navigation, often using public transportation, so you can simply focus on the stories and the views.</p>
          </div>
          {/* USP 3 */}
          <div className="reveal-up bg-linear-to-br from-white via-white to-light-beige hover:to-light-beige-dark p-6 md:p-8 rounded-3xl shadow-sm border border-border-lighter flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-light-orange border border-border-orange-light flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
              <Icon icon="solar:cup-star-linear" width="28" className="stroke-[1.5]"></Icon>
            </div>
            <h4 className="text-xl font-semibold text-dark tracking-tight mb-3 md:mb-4">Expert Personalities</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">Our guides are more than just professionals; they are local intellectuals and storytellers who bring history to life with passion and wit.</p>
          </div>
          {/* USP 4 */}
          <div className="reveal-up bg-linear-to-br from-white via-white to-light-beige hover:to-light-beige-dark p-6 md:p-8 rounded-3xl shadow-sm border border-border-lighter flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-light-orange border border-border-orange-light flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
              <Icon icon="solar:hand-heart-linear" width="28" className="stroke-[1.5]"></Icon>
            </div>
            <h4 className="text-xl font-semibold text-dark tracking-tight mb-3 md:mb-4">Peace of Mind Policy</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">We value your trust. Should your plans change, we offer a full 100% refund for cancellations made up latest 3 days before your tour begins.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usps;