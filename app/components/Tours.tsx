import React from 'react';

const Tours = () => {
  return (
    <section className="py-16 md:py-32 bg-[#FFFFFF]" id="tours">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <div className="reveal-up text-[#E8501C] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Curated Itineraries
          </div>
          <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl font-semibold text-[#6B1524] tracking-tight">
            Our Signature Experiences
          </h2>
          <div className="reveal-up w-20 sm:w-24 h-[2px] bg-gradient-to-r from-[#E8501C] to-transparent mt-6 mb-8 md:mb-10 rounded-full"></div>
          <p className="reveal-up sm:text-lg leading-relaxed text-base font-normal text-gray-700 max-w-2xl">
            Hand-picked routes that capture the essence of Prague. While each tour follows a certain path, your guide is always happy to adjust the focus to match your personal interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tour 1 */}
          <div className="reveal-up bg-[#FBF9F6] p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <div className="overflow-hidden rounded-2xl mb-6 w-full aspect-[4/3]">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53689ad9-77ca-4099-b8a2-b707b0671bd5_1600w.png" 
                alt="Prague at a Glance" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#0A0A0A] tracking-tight mb-3 group-hover:text-[#E8501C] transition-colors">Prague at a Glance</h3>
            <p className="md:text-base leading-relaxed flex-grow text-sm font-normal text-gray-600 mb-8">An immersive journey through Prague’s most iconic landmarks, covering all five historical units in one half day.</p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mb-8">
              <div>
                <span className="block text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Duration</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">6 hours</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] md:text-xs uppercase font-semibold text-gray-400 tracking-widest mb-1">Price</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">€165</span>
              </div>
            </div>
            <a href="#tours" className="h-12 w-full bg-[#E8501C] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#c94315] transition-colors mt-auto shadow-lg shadow-[#E8501C]/20 hover:shadow-[#E8501C]/40">
              Explore Tour <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </a>
          </div>

          {/* Tour 2 (Highlight) */}
          <div className="reveal-up bg-[#FBF9F6] p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <div className="relative overflow-hidden rounded-2xl mb-6 w-full aspect-[4/3]">
              <div className="z-10 text-[10px] md:text-xs uppercase font-semibold text-white tracking-widest bg-[#6B1524] rounded-full py-2 px-6 absolute top-4 right-4 shadow-md">Special Offer</div>
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e7b2d9-b715-456e-bc87-b453786bb0d6_800w.png" 
                alt="Two Half Days" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#0A0A0A] tracking-tight mb-3 group-hover:text-[#E8501C] transition-colors">Prague in Two Half Days</h3>
            <p className="md:text-base leading-relaxed flex-grow text-sm font-normal text-gray-600 mb-8">Explore Prague’s most iconic landmarks in a bigger detail, focusing on the majestic Prague Castle complex and Lesser Town one day, and the historic Old Town and the profound heritage of the Jewish Quarter the other day.</p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mb-8">
              <div>
                <span className="block text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Duration</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">2 × 4 hours</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] md:text-xs uppercase font-semibold text-gray-400 tracking-widest mb-1">Special (Discounted) Price</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">€315</span>
              </div>
            </div>
            <a href="#tours" className="h-12 w-full bg-[#E8501C] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#c94315] transition-colors mt-auto shadow-lg shadow-[#E8501C]/20 hover:shadow-[#E8501C]/40">
              Explore Tour <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </a>
          </div>

          {/* Tour 3 */}
          <div className="reveal-up bg-[#FBF9F6] p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <div className="overflow-hidden aspect-[4/3] w-full rounded-2xl mb-6">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b3478ad-b1f0-4ef6-8994-db7941b8922c_800w.jpg" 
                alt="Architecture Tour" 
                className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#0A0A0A] tracking-tight mb-3 group-hover:text-[#E8501C] transition-colors">Ten Centuries of Architecture</h3>
            <p className="md:text-base leading-relaxed flex-grow text-sm font-normal text-gray-600 mb-8">This captivating architectural journey spans from the Romanesque foundations and Gothic spires of the medieval era to the ornate Baroque palaces, elegant Art Nouveau facades, and cutting-edge contemporary designs that define the city&apos;s unique urban landscape.</p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mb-8">
              <div>
                <span className="block text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Duration</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">4 hours</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] md:text-xs uppercase font-semibold text-gray-400 tracking-widest mb-1">Price</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">€165 (plus entry fees)</span>
              </div>
            </div>
            <a href="#tours" className="h-12 w-full bg-[#E8501C] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#c94315] transition-colors mt-auto shadow-lg shadow-[#E8501C]/20 hover:shadow-[#E8501C]/40">
              Explore Tour <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </a>
          </div>
        </div>

        <div className="reveal-up mt-12 md:mt-16 flex justify-center w-full">
          <a href="#tours" className="h-14 px-8 sm:px-10 border-2 border-[#E8501C] text-[#E8501C] bg-transparent text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#E8501C] hover:text-white transition-all">
            View All Tours <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tours;