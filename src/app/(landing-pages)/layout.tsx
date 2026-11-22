import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar sticky={true} />
      {children}
      <Footer />
    </>
  );
}
