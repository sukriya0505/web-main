import { FeaturedCategories } from "@/components/ui/featured-categories";
import { HeroSection } from "@/components/ui/hero-section";
import { TopProfiles } from "@/components/ui/top-profiles";

export default function Home() {
  return (
    <div className="min-h-screen pt-[72px]">
      <main className="flex flex-col items-center px-4">
        <HeroSection />
        <FeaturedCategories />
        <TopProfiles />
      </main>
    </div>
  );
}
