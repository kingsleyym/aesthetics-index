/**
 * WieFunktionierts — Features Section (dunkel)
 * Design 1:1 nach Vorlage (FeaturesPlanet-Grid-Teil)
 * Eigener Content: Wie Aesthetics Index funktioniert
 */
export default function WieFunktionierts() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Den richtigen Experten finden war noch nie so einfach
            </h2>
          </div>

          {/* Visual: centered stats with glow */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-2xl before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <div className="relative rounded-2xl bg-gray-800 px-10 py-8 shadow-xl">
                  <div className="flex items-center justify-center gap-12">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">500+</div>
                      <div className="mt-1 text-sm text-gray-400">Geprüfte Praxen</div>
                    </div>
                    <div className="h-12 w-px bg-gray-700" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">12k+</div>
                      <div className="mt-1 text-sm text-gray-400">Echte Bewertungen</div>
                    </div>
                    <div className="h-12 w-px bg-gray-700" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">98%</div>
                      <div className="mt-1 text-sm text-gray-400">Zufriedene Patienten</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid — vorlage design (pseudo-element borders) */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2Zm0 2a7 7 0 1 1 0 14A7 7 0 0 1 11 4Zm6.3 11.3-1.4 1.4-5.3-5.3V7h2v3.6l4.7 4.7Z" />
                </svg>
                <span>Real-Time Verfügbarkeit</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Sieh sofort, welche Ärzte und Kliniken Termine haben — ohne Wartezeit und ohne Telefonanruf.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path d="M12 2 3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4Zm0 2.18 7 3.12V12c0 4.52-3.13 8.75-7 9.93C8.13 20.75 5 16.52 5 12V7.3l7-3.12Z" />
                </svg>
                <span>Verifizierte Praxen</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Jede Praxis wird von unserem Team geprüft. Nur real existierende, lizenzierte Ärzte sind gelistet.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>Echte Bewertungen</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Nur Patienten, die wirklich behandelt wurden, können eine Bewertung abgeben. Keine Fake-Reviews.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 14H4V8l8 5 8-5v10Zm-8-7L4 6h16l-8 5Z" />
                </svg>
                <span>Direktkontakt</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Nimm direkt Kontakt mit der Praxis auf oder buche deinen Termin bequem über die Plattform.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Z" />
                </svg>
                <span>Ortsbezogene Suche</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Finde Experten in deiner Stadt oder deinem Stadtteil — mit Filter nach Entfernung, Rating und Behandlung.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-7 14-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9Z" />
                </svg>
                <span>Transparente Preise</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Praxen können Preisrahmen veröffentlichen. Keine bösen Überraschungen beim Erstgespräch.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
