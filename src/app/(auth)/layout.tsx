import Image from "next/image";
import Link from "next/link";
import logoImage from "@public/brand/logo.webp";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-bg-primary p-6 text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <Link
        href="/"
        className="mb-8 flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
      >
        <Image
          src={logoImage}
          alt="The Wild Oasis Logo"
          width={44}
          height={44}
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-semibold tracking-tight text-text-primary">
          The Wild Oasis
        </span>
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
