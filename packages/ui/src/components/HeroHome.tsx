'use client';

import React from 'react';
import Image from 'next/image';
import PageIllustration from './PageIllustration';
import { SearchBar } from './SearchBar';
import Avatar01 from '../../public/images/avatar-01.jpg';
import Avatar02 from '../../public/images/avatar-02.jpg';
import Avatar03 from '../../public/images/avatar-03.jpg';
import Avatar04 from '../../public/images/avatar-04.jpg';
import Avatar05 from '../../public/images/avatar-05.jpg';
import Avatar06 from '../../public/images/avatar-06.jpg';

export interface HeroHomeProps {
  onSearch: (query: string) => void;
}

/**
 * HeroHome Component - Cruip Template Design
 * Mit PageIllustration, Avatar-Reihe, Gradient borders, AOS
 */
export const HeroHome: React.FC<HeroHomeProps> = ({ onSearch }) => {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 06"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Finde den richtigen Experten für <br className="max-lg:hidden" />
              ästhetische Medizin
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Geprüfte Ärzte, echte Bewertungen, transparente Preise in München
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-2xl"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <SearchBar
                    placeholder="Botox, Lippen, Hautarzt..."
                    onSearch={onSearch}
                  />
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <span className="text-sm text-gray-600">Beliebt:</span>
                    {['Botox', 'Hyaluron', 'Lippen', 'Faltenbehandlung'].map((cat) => (
                      <button
                        key={cat}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,var(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,var(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  aesthetics-index
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  search doctor
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --location=München --treatment=Botox
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --verified=true
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Found 24 matching doctors.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  book appointment
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Appointment confirmed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
