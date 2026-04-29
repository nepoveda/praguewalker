import React from 'react';

const Usps = () => {
  return (
    <section className="md:py-32 border-y bg-[#FBF9F6] border-[#EBE5DF] pt-16 pb-16 shadow-[inset_0_1px_0_0_#FFFFFF,inset_0_-1px_0_0_#FFFFFF]" id="usps">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <div className="reveal-up text-[#E8501C] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            The Prague Walker Difference
          </div>
          <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl font-semibold text-[#6B1524] tracking-tight">
            Why Choose Us
          </h2>
          <div className="reveal-up w-20 sm:w-24 h-[2px] bg-gradient-to-r from-[#E8501C] to-transparent mt-6 mb-8 md:mb-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* USP 1 */}
          <div className="reveal-up bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#FFF1E6] hover:to-[#FFE4D6] p-6 md:p-8 rounded-3xl shadow-sm border border-[#F2EAE1] flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FFF5F0] border border-[#FFEAE0] flex items-center justify-center mb-6 text-[#E8501C] group-hover:bg-[#E8501C] group-hover:border-[#E8501C] group-hover:text-white transition-all duration-300">
              <iconify-icon icon="solar:shield-check-linear" width="28" className="stroke-[1.5]"></iconify-icon>
            </div>
            <h4 className="text-xl font-semibold text-[#0A0A0A] tracking-tight mb-3 md:mb-4">Total Privacy &amp; Focus</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">Every tour is strictly private. Your guide’s attention is yours alone, allowing for a deeper conversation and a pace that suits you or your private group perfectly.</p>
          </div>
          {/* USP 2 */}
          <div className="reveal-up bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#FFF1E6] hover:to-[#FFE4D6] p-6 md:p-8 rounded-3xl shadow-sm border border-[#F2EAE1] flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FFF5F0] border border-[#FFEAE0] flex items-center justify-center mb-6 text-[#E8501C] group-hover:bg-[#E8501C] group-hover:border-[#E8501C] group-hover:text-white transition-all duration-300">
              <iconify-icon icon="solar:map-point-linear" width="28" className="stroke-[1.5]"></iconify-icon>
            </div>
            <h4 className="text-xl font-semibold text-[#0A0A0A] tracking-tight mb-3 md:mb-4">Door-to-Door Service</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">Your experience begins at your hotel lobby. We handle the logistics and the navigation, often using public transportation, so you can simply focus on the stories and the views.</p>
          </div>
          {/* USP 3 */}
          <div className="reveal-up bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#FFF1E6] hover:to-[#FFE4D6] p-6 md:p-8 rounded-3xl shadow-sm border border-[#F2EAE1] flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FFF5F0] border border-[#FFEAE0] flex items-center justify-center mb-6 text-[#E8501C] group-hover:bg-[#E8501C] group-hover:border-[#E8501C] group-hover:text-white transition-all duration-300">
              <iconify-icon icon="solar:cup-star-linear" width="28" className="stroke-[1.5]"></iconify-icon>
            </div>
            <h4 className="text-xl font-semibold text-[#0A0A0A] tracking-tight mb-3 md:mb-4">Expert Personalities</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">Our guides are more than just professionals; they are local intellectuals and storytellers who bring history to life with passion and wit.</p>
          </div>
          {/* USP 4 */}
          <div className="reveal-up bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#FFF1E6] hover:to-[#FFE4D6] p-6 md:p-8 rounded-3xl shadow-sm border border-[#F2EAE1] flex flex-col h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FFF5F0] border border-[#FFEAE0] flex items-center justify-center mb-6 text-[#E8501C] group-hover:bg-[#E8501C] group-hover:border-[#E8501C] group-hover:text-white transition-all duration-300">
              <iconify-icon icon="solar:hand-heart-linear" width="28" className="stroke-[1.5]"></iconify-icon>
            </div>
            <h4 className="text-xl font-semibold text-[#0A0A0A] tracking-tight mb-3 md:mb-4">Peace of Mind Policy</h4>
            <p className="leading-relaxed text-sm md:text-base font-normal text-gray-600">We value your trust. Should your plans change, we offer a full 100% refund for cancellations made up latest 3 days before your tour begins.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usps;