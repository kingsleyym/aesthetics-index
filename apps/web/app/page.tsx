'use client';

import { Header, Footer, HeroHome, CategoryCard, ClinicGrid } from '@aesthetics-index/ui';
import { mockClinics } from '@aesthetics-index/adapters-mock';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push(`/suche?q=${encodeURIComponent(query)}`);
  };

  const handleClinicClick = (clinic: any) => {
    router.push(`/praxis/${clinic.slug || clinic.id}`);
  };

  // Mock categories
  const categories = [
    { name: 'Botox', icon: '💉', count: 45, slug: 'botox' },
    { name: 'Hyaluron & Filler', icon: '✨', count: 38, slug: 'hyaluron' },
    { name: 'Lippen', icon: '💋', count: 32, slug: 'lippen' },
    { name: 'Faltenbehandlung', icon: '🌟', count: 28, slug: 'falten' },
    { name: 'Hautstraffung', icon: '🎯', count: 22, slug: 'hautstraffung' },
    { name: 'Mesotherapie', icon: '💆', count: 18, slug: 'mesotherapie' },
  ];

  // Featured clinics (top 3)
  const featuredClinics = mockClinics
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map(clinic => ({
      name: clinic.name,
      city: clinic.city,
      rating: clinic.rating,
      reviewCount: clinic.reviewCount,
      image: clinic.image,
      categories: clinic.categories,
      verified: clinic.verified
    }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroHome onSearch={handleSearch} />

        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Beliebte Behandlungen
              </h2>
              <p className="text-gray-600">
                Finde Experten für deine gewünschte Behandlung
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((cat, idx) => (
                <CategoryCard
                  key={idx}
                  category={cat}
                  onClick={() => router.push(`/kategorie/${cat.slug}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Clinics */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Top-bewertete Praxen in München
              </h2>
              <p className="text-gray-600">
                Unsere am besten bewerteten Ärzte
              </p>
            </div>

            <ClinicGrid
              clinics={featuredClinics}
              onClinicClick={handleClinicClick}
            />

            <div className="text-center mt-8">
              <button
                onClick={() => router.push('/city/muenchen')}
                className="btn bg-linear-to-t from-blue-600 to-blue-500 text-white"
              >
                Alle Praxen in München
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Betreiben Sie eine Praxis?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Präsentieren Sie Ihre Leistungen und erreichen Sie neue Patienten
            </p>
            <button
              onClick={() => router.push('/app/register')}
              className="btn bg-linear-to-t from-blue-600 to-blue-500 text-white"
            >
              Kostenlos registrieren
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
