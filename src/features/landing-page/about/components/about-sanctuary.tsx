import Image from "next/image";
import about1Image from "@public/about/about-1.webp";

export function AboutSanctuary() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="space-y-6 lg:col-span-7">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          The Sanctuary
        </span>
        <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-4xl">
          A Quiet Haven in the Peaks
        </h2>
        <div className="space-y-4 text-base leading-relaxed font-light text-text-secondary">
          <p>
            Our philosophy is simple: authentic luxury does not compete with
            nature, it frames it. Built with locally harvested timber and native
            stone, every cabin is positioned for solitude, pristine mountain
            panoramas, and total tranquility.
          </p>
          <p>
            Whether you spend your afternoon wandering fragrant pine forests or
            relaxing in an open-air cedar hot tub under starlit skies, The Wild
            Oasis offers an environment where time gently slows down.
          </p>
        </div>
      </div>
      <div className="relative aspect-4/3 overflow-hidden bg-bg-surface lg:col-span-5">
        <Image
          src={about1Image}
          alt="Cozy cabin campfire gathering in the Dolomites"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </div>
  );
}
