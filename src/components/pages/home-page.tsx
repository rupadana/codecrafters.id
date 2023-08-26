import CallUsSection from '../organism/call-us-section';
import HeroSection from '../organism/hero-section';
import ServiceSection from '../organism/service-section';
import TestimonySection from '../organism/testimony-section';

export default function HomePage() {
  return (
    <>
      {/* Hero Sections */}
      <HeroSection />

      {/* Service Sections  */}
      <ServiceSection />

      {/* Testimony Sections */}
      <TestimonySection />

      {/* Call Us Sections */}
      <CallUsSection />
    </>
  );
}
