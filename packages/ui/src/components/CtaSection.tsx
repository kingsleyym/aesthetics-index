/**
 * CtaSection — Call to Action für Praxen
 * Design 1:1 nach Vorlage (Cta)
 * Eigener Content: Praxis registrieren
 */
export default function CtaSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration (inline SVG, dark version) */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="736" height="300" fill="none">
              <path fill="url(#cta-a)" d="M0 0h64v420H0z" />
              <path fill="url(#cta-b)" d="M84 0h64v420H84z" />
              <path fill="url(#cta-c)" d="M168 0h64v420h-64z" />
              <path fill="url(#cta-d)" d="M252 0h64v420h-64z" />
              <path fill="url(#cta-e)" d="M336 0h64v420h-64z" />
              <path fill="url(#cta-f)" d="M420 0h64v420h-64z" />
              <path fill="url(#cta-g)" d="M504 0h64v420h-64z" />
              <path fill="url(#cta-h)" d="M588 0h64v420h-64z" />
              <path fill="url(#cta-i)" d="M672 0h64v420h-64z" />
              <defs>
                <linearGradient id="cta-a" x1="32" x2="32" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-b" x1="116" x2="116" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-c" x1="200" x2="200" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-d" x1="284" x2="284" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-e" x1="368" x2="368" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-f" x1="452" x2="452" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-g" x1="536" x2="536" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-h" x1="620" x2="620" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
                <linearGradient id="cta-i" x1="704" x2="704" y1="0" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="0" stopColor="#3B82F6" stopOpacity=".12" /><stop offset=".7" stopColor="#3B82F6" stopOpacity="0" /></linearGradient>
              </defs>
            </svg>
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.7),transparent)1] md:mb-12 md:text-4xl">
              Betreiben Sie eine Praxis für ästhetische Medizin?
            </h2>
            <p className="mb-8 text-gray-400 md:text-lg">
              Über 50.000 Patienten suchen jeden Monat auf Aesthetics Index nach einem Experten in ihrer Nähe.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="/app/register"
              >
                <span className="relative inline-flex items-center">
                  Praxis kostenlos eintragen{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <a
                className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto"
                href="/app/preise"
              >
                Preise ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
