import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-14 sm:pt-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
