import {
  Behandlungen,
  WieFunktionierts,
  Testimonial,
  CtaSection,
} from '@aesthetics-index/ui';
import HeroSection from './components/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Behandlungen />
      <WieFunktionierts />
      <Testimonial />
      <CtaSection />
    </>
  );
}
