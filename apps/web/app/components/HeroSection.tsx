'use client';

import { useRouter } from 'next/navigation';
import { HeroHome } from '@aesthetics-index/ui';

/**
 * Client-Wrapper für HeroHome — handelt Routing
 */
export default function HeroSection() {
  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push(`/suche?q=${encodeURIComponent(query)}`);
  };

  return <HeroHome onSearch={handleSearch} />;
}
