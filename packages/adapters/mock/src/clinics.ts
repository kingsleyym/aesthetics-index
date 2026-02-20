export interface Clinic {
  id: string;
  slug: string;
  name: string;
  city: string;
  rating: number;
  reviewCount: number;
  image: string;
  categories: string[];
  verified: boolean;
  address: string;
  phone?: string;
  website?: string;
  description: string;
}

export const mockClinics: Clinic[] = [
  {
    id: "1",
    slug: "hautarztpraxis-dr-mueller-muenchen",
    name: "Hautarztpraxis Dr. Müller",
    city: "München",
    rating: 4.8,
    reviewCount: 234,
    image: "/images/clinic-placeholder.jpg",
    categories: ["Botox", "Hyaluron", "Faltenbehandlung"],
    verified: true,
    address: "Maximilianstraße 15, 80539 München",
    phone: "+49 89 12345678",
    website: "https://example.com",
    description: "Spezialisiert auf ästhetische Dermatologie mit 15 Jahren Erfahrung."
  },
  {
    id: "2",
    slug: "aesthetik-klinik-schwabing",
    name: "Ästhetik Klinik Schwabing",
    city: "München",
    rating: 4.5,
    reviewCount: 189,
    image: "/images/clinic-placeholder.jpg",
    categories: ["Lippen", "Hyaluron", "Hautstraffung"],
    verified: true,
    address: "Leopoldstraße 42, 80802 München",
    description: "Moderne Klinik für ästhetische Medizin im Herzen von Schwabing."
  },
  {
    id: "3",
    slug: "beauty-doc-muenchen",
    name: "Beauty Doc München",
    city: "München",
    rating: 4.2,
    reviewCount: 156,
    image: "/images/clinic-placeholder.jpg",
    categories: ["Botox", "Filler", "Mesotherapie"],
    verified: false,
    address: "Sendlinger Straße 78, 80331 München",
    description: "Ihr Experte für minimalinvasive Schönheitsbehandlungen."
  }
];

export function getClinicsByCity(city: string): Clinic[] {
  return mockClinics.filter(c => c.city === city);
}

export function getClinicBySlug(slug: string): Clinic | undefined {
  return mockClinics.find(c => c.slug === slug);
}
