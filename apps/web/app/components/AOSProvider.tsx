'use client';

import { useEffect } from 'react';
import AOS from 'aos';

/**
 * AOS Provider - Initialisiert AOS animations
 * Must be client component
 */
export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return <>{children}</>;
}
