import { AboutSection } from "@/features/landing-page/home/components/about-section";
import { HeroSection } from "@/features/landing-page/home/components/hero-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
