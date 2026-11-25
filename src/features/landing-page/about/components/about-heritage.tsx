import Image from "next/image";
import about2Image from "@public/about/about-2.webp";
import { LinkButton } from "@/components/ui/link-button";

export function AboutHeritage() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="relative order-2 aspect-4/3 overflow-hidden bg-bg-surface lg:order-1 lg:col-span-5">
        <Image
          src={about2Image}
          alt="The family team of The Wild Oasis"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Family Guided
        </span>
        <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-4xl">
          Three Generations of Care
        </h2>
        <div className="space-y-4 text-base leading-relaxed font-light text-text-secondary">
          <p>
            Since 1962, our family has personally welcomed guests from across
            the globe. We treat every visitor as an extended guest of our home,
            sharing secret trails, local sourdough loaves, and personalized
            itineraries.
          </p>
          <p>
            We invite you to experience the harmony of the Dolomites with us.
          </p>
        </div>
        <div className="pt-2">
          <LinkButton href="/cabins-overview" size="md">
            Explore Our Cabins
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
