/**
 * Testimonial — Patienten-Zitat Section
 * Design 1:1 nach Vorlage (LargeTestimonial)
 * Eigener Content: Patienten-Bewertung
 */
export default function Testimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              {/* Decorative quote marks */}
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              {/* Avatar initials badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                S
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              "Aesthetics Index hat mir geholfen, endlich{" "}
              <em className="italic text-gray-500">den richtigen Arzt zu finden</em>{" "}
              — transparent, ohne Risiko, mit echten Bewertungen von echten Patientinnen."
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Sandra K.</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-blue-500">Patientin aus München</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
