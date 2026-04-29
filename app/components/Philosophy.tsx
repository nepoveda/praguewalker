import React from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";

const Philosophy = () => {
  return (
      <section className="md:py-32 bg-white pt-16 pb-16" id="about">
        <div className="w-full max-w-360 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col">
              <div className="reveal-up text-primary font-semibold text-xs tracking-widest-extra uppercase mb-4">
                The Prague Walker Philosophy
              </div>
              <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary tracking-tight">
                Private. Professional.<br/>Perfectly Paced.
              </h2>
              <div
                  className="reveal-up w-20 sm:w-24 h-0.5 bg-linear-to-r from-primary to-transparent mt-6 mb-8 sm:mb-10 rounded-full"></div>
              <p className="reveal-up sm:text-lg leading-relaxed text-base font-normal text-gray-700 mb-6">
                Prague is a masterpiece best enjoyed without the crowds. At Prague Walker, we believe your time in our
                city should be as seamless as it is inspiring. We don&apos;t just show you monuments; we offer context,
                local insight, and a genuine connection to Czech culture.
              </p>
              <p className="reveal-up text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
                Whether you are exploring the royal history of the Castle or the hidden corners of the Old Town, you are
                in the hands of a local expert who treats you like a guest, not a tourist.
              </p>

              <div className="reveal-up grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-8">
                <div className="flex items-start text-left bg-gray-50/50 border border-gray-100 p-5 rounded-2xl gap-4">
                  <Icon icon="solar:clock-circle-linear" width="36" height="36"
                        className="text-primary shrink-0 stroke-[1.5] mt-0.5"></Icon>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-dark mb-1.5">Tailored
                      Pace</h3>
                    <p className="text-xs text-gray-600 font-normal">
                      No rush. We move at your pace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-left bg-gray-50/50 border border-gray-100 p-5 rounded-2xl gap-4">
                  <Icon icon="solar:book-minimalistic-linear" width="36" height="36"
                        className="text-primary shrink-0 stroke-[1.5] mt-0.5"></Icon>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-dark mb-1.5">Academic
                      Insight</h3>
                    <p className="text-xs text-gray-600 font-normal">
                      Guides are local intellectuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-up w-full">
              <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0664275e-78ed-41e7-a7e7-5ef3844ee92d_1600w.png"
                  alt="Prague Architecture"
                  // just some values to make the image fit the screen
                  width={1200}
                  height={1200}
                  className="shadow-gray-200/50 sm:h-150 w-full h-100 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Philosophy;