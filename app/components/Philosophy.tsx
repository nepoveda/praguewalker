import React from 'react';

const Philosophy = () => {
  return (
    <section className="md:py-32 bg-[#FFFFFF] pt-16 pb-16" id="about">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col">
            <div className="reveal-up text-[#E8501C] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              The Prague Walker Philosophy
            </div>
            <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl font-semibold text-[#6B1524] tracking-tight">
              Private. Professional.<br/>Perfectly Paced.
            </h2>
            <div className="reveal-up w-20 sm:w-24 h-[2px] bg-gradient-to-r from-[#E8501C] to-transparent mt-6 mb-8 sm:mb-10 rounded-full"></div>
            <p className="reveal-up sm:text-lg leading-relaxed text-base font-normal text-gray-700 mb-6">
              Prague is a masterpiece best enjoyed without the crowds. At Prague Walker, we believe your time in our city should be as seamless as it is inspiring. We don&apos;t just show you monuments; we offer context, local insight, and a genuine connection to Czech culture.
            </p>
            <p className="reveal-up text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
              Whether you are exploring the royal history of the Castle or the hidden corners of the Old Town, you are in the hands of a local expert who treats you like a guest, not a tourist.
            </p>
            
            <div className="reveal-up grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-8">
              <div className="flex items-start text-left bg-gray-50/50 border border-gray-100 p-5 rounded-2xl gap-4">
                <iconify-icon icon="solar:clock-circle-linear" width="36" height="36" className="text-[#E8501C] flex-shrink-0 stroke-[1.5] mt-0.5"></iconify-icon>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-[#0A0A0A] mb-1.5">Tailored Pace</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    No rush. We move at your pace.
                  </p>
                </div>
              </div>
              <div className="flex items-start text-left bg-gray-50/50 border border-gray-100 p-5 rounded-2xl gap-4">
                <iconify-icon icon="solar:book-minimalistic-linear" width="36" height="36" className="text-[#E8501C] flex-shrink-0 stroke-[1.5] mt-0.5"></iconify-icon>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-[#0A0A0A] mb-1.5">Academic Insight</h3>
                  <p className="text-xs text-gray-600 font-normal">
                    Guides are local intellectuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal-up w-full">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0664275e-78ed-41e7-a7e7-5ef3844ee92d_1600w.png" 
              alt="Prague Architecture" 
              className="shadow-gray-200/50 sm:h-[600px] w-full h-[400px] object-cover rounded-2xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;