import Image from "next/image";
import Link from "next/link";
import about1Image from "@public/about/about-1.webp";
import logoImage from "@public/brand/logo.webp";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text lg:grid-cols-2">
      {/* Left Side: Full-Height Sanctuary Visual Panel (Desktop) */}
      <div className="relative hidden overflow-hidden border-r border-border-subtle bg-bg-surface lg:flex lg:flex-col lg:justify-between">
        <Image
          src={about1Image}
          alt="Secluded wooden chalet glowing by an alpine lake at twilight"
          fill
          priority
          placeholder="blur"
          sizes="50vw"
          className="object-cover object-center"
        />

        {/* Ambient dark gradient overlay for logo and caption contrast */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/50" />

        {/* Top Brand Anchor */}
        <div className="relative z-10 p-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
          >
            <Image
              src={logoImage}
              alt="The Wild Oasis Logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-xl font-semibold tracking-tight text-text-primary">
              The Wild Oasis
            </span>
          </Link>
        </div>

        {/* Bottom Editorial Caption */}
        <div className="relative z-10 max-w-lg space-y-3 p-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-accent-primary uppercase">
            The Dolomites &bull; Italy
          </span>
          <p className="text-2xl leading-snug font-light tracking-tight text-text-primary xl:text-3xl">
            Where raw alpine wilderness meets quiet heritage luxury.
          </p>
        </div>
      </div>

      {/* Right Side: Centered Authentication Form */}
      <div className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-10 lg:p-12">
        {/* Compact Brand Link on Mobile (when left panel is hidden) */}
        <Link
          href="/"
          className="mb-8 flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none lg:hidden"
        >
          <Image
            src={logoImage}
            alt="The Wild Oasis Logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight text-text-primary">
            The Wild Oasis
          </span>
        </Link>

        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
