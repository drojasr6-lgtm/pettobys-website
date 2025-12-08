import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/home/hero-section';
import FeaturedProducts from '@/components/home/featured-products';
import BenefitsSection from '@/components/home/benefits-section';
import TechnologySection from '@/components/home/technology-section';
import CTASection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <BenefitsSection />
      <FeaturedProducts />
      <TechnologySection />
      <CTASection />
    </div>
  );
}
