import { AboutHero } from "@/features/landing-page/components/about-hero";
import { AboutSanctuary } from "@/features/landing-page/components/about-sanctuary";
import { AboutValues } from "@/features/landing-page/components/about-values";
import { AboutHeritage } from "@/features/landing-page/components/about-heritage";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <AboutHero />

      <section className="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-12">
        <AboutSanctuary />
        <AboutValues />
        <AboutHeritage />
      </section>
    </div>
  );
}
