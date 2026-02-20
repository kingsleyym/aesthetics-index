/**
 * Behandlungen — Kategorie-Section
 * Design 1:1 nach Vorlage (BusinessCategories / Orbiting Logos)
 * Eigener Content: Ästhetik-Behandlungskategorien
 */
export default function Behandlungen() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Orbiting category display */}
          <div className="relative flex h-[324px] items-center justify-center">
            {/* Small blue dots (decoration) */}
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 7)" fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 0)" fillOpacity="0.16" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 14)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 25)" fillOpacity="0.64" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 32)" fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 7)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 14)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 25)" fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 150 14)" fillOpacity="0.64" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 150 25)" fillOpacity="0.16" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 32)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 39)" />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width={432} height={160} viewBox="0 0 432 160" fill="none">
                <g opacity="0.6" filter="url(#filter0_f_behandlungen)">
                  <path
                    className="fill-blue-500"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter id="filter0_f_behandlungen" x={0} y={0} width={432} height={160} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation={32} result="effect1_foregroundBlur" />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply" />
            <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply" />
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-blue-500" />
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-blue-500" />
            {/* Diagonal lines */}
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply" />
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply" />
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply" />
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply" />

            {/* Center: spinning ring + main icon (Aesthetics Cross) */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  {/* Medical cross / aesthetics star */}
                  <svg className="relative fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <path d="M12 2a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V3a1 1 0 0 1 1-1Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Orbiting category icons */}
            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-300">
                {/* Left: Botox / Syringe */}
                <div className="absolute -translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <svg className="relative fill-blue-400" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
                        <path d="m19.7 6.3-2-2a1 1 0 0 0-1.4 0l-1.3 1.3-1.4-1.4a1 1 0 0 0-1.4 1.4l.7.7-6.9 6.9a1 1 0 0 0 0 1.4l3 3-2 2.7a1 1 0 1 0 1.6 1.2l2-2.7.4.4a1 1 0 0 0 1.4 0l6.9-6.9.7.7a1 1 0 1 0 1.4-1.4l-1.4-1.4 1.3-1.3a1 1 0 0 0 0-1.6Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Right: Filler / Drop */}
                <div className="absolute translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <svg className="relative fill-blue-400" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
                        <path d="M12 2C6 10 4 14 4 17a8 8 0 0 0 16 0c0-3-2-7-8-15Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Upper-left: Skin / Shield */}
                <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <svg className="relative fill-blue-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path d="M12 2 3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Upper-right: Lips / Beauty */}
                <div className="absolute -translate-y-[82px] translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <svg className="relative fill-pink-400" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                        <path d="M12 3C8 3 4 7 4 12c0 3 4 6 8 6s8-3 8-6c0-5-4-9-8-9Zm0 2c2.5 0 5 3 5 7 0 1.5-2.2 4-5 4s-5-2.5-5-4c0-4 2.5-7 5-7Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Lower-right: Verified Star */}
                <div className="absolute translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <svg className="relative fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Lower-left: Laser / Zap */}
                <div className="absolute -translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <svg className="relative fill-purple-400" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Far-left: faded (Massage) */}
                <div className="absolute -translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <svg className="relative fill-gray-400" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2Zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Far-right: faded (Permanent Makeup) */}
                <div className="absolute translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <svg className="relative fill-gray-400" xmlns="http://www.w3.org/2000/svg" width={21} height={13} viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Category pills below the display */}
          <div className="mt-6 flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay={200}>
            {[
              { label: 'Botox & Falten', href: '/kategorie/botox' },
              { label: 'Hyaluron & Filler', href: '/kategorie/hyaluron' },
              { label: 'Lippen', href: '/kategorie/lippen' },
              { label: 'Hautstraffung', href: '/kategorie/hautstraffung' },
              { label: 'Laser & IPL', href: '/kategorie/laser' },
              { label: 'Permanent Makeup', href: '/kategorie/permanent-makeup' },
            ].map((cat) => (
              <a
                key={cat.label}
                href={cat.href}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
