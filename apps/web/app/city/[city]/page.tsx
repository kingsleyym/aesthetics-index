'use client';

import { Header, Footer, SearchBar, FilterPanel, ClinicGrid } from '@aesthetics-index/ui';
import { mockClinics, getClinicsByCity } from '@aesthetics-index/adapters-mock';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function CityPage({ params }: { params: { city: string } }) {
  const router = useRouter();
  const cityName = decodeURIComponent(params.city).replace('-', ' ');
  const cityNameCapitalized = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  // Filter state
  const [filters, setFilters] = useState({
    categories: [
      { name: 'Botox', count: 12, active: false },
      { name: 'Hyaluron', count: 10, active: false },
      { name: 'Lippen', count: 8, active: false },
      { name: 'Falten', count: 9, active: false },
      { name: 'Hautstraffung', count: 6, active: false },
    ],
    cities: [
      { name: 'München', count: mockClinics.length, active: true },
    ],
    minRating: 0,
    verifiedOnly: false
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Get clinics for this city
  const allClinics = useMemo(() => {
    return getClinicsByCity(cityNameCapitalized);
  }, [cityNameCapitalized]);

  // Apply filters
  const filteredClinics = useMemo(() => {
    let result = [...allClinics];

    // Category filter
    const activeCategories = filters.categories
      .filter(c => c.active)
      .map(c => c.name.toLowerCase());
    
    if (activeCategories.length > 0) {
      result = result.filter(clinic =>
        clinic.categories.some(cat =>
          activeCategories.some(active => cat.toLowerCase().includes(active))
        )
      );
    }

    // Rating filter
    if (filters.minRating > 0) {
      result = result.filter(clinic => clinic.rating >= filters.minRating);
    }

    // Verified filter
    if (filters.verifiedOnly) {
      result = result.filter(clinic => clinic.verified);
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(clinic =>
        clinic.name.toLowerCase().includes(query) ||
        clinic.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }

    return result;
  }, [allClinics, filters, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClinicClick = (clinic: any) => {
    router.push(`/praxis/${clinic.slug || clinic.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ästhetische Medizin in {cityNameCapitalized}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {allClinics.length} {allClinics.length === 1 ? 'Praxis' : 'Praxen'} gefunden
            </p>

            {/* Search */}
            <div className="max-w-2xl">
              <SearchBar
                placeholder="Behandlung oder Praxis suchen..."
                onSearch={handleSearch}
              />
            </div>
          </div>

          {/* Layout: Sidebar + Grid */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters (Sidebar) */}
            <aside className="lg:w-80 flex-shrink-0">
              <FilterPanel
                filters={filters}
                onChange={setFilters}
              />
            </aside>

            {/* Clinic Grid */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {filteredClinics.length} {filteredClinics.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
                </p>
                
                <select className="form-select text-sm">
                  <option>Beste Bewertung</option>
                  <option>Meiste Bewertungen</option>
                  <option>Alphabetisch</option>
                </select>
              </div>

              <ClinicGrid
                clinics={filteredClinics.map(c => ({
                  name: c.name,
                  city: c.city,
                  rating: c.rating,
                  reviewCount: c.reviewCount,
                  image: c.image,
                  categories: c.categories,
                  verified: c.verified
                }))}
                onClinicClick={handleClinicClick}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
