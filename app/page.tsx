import { Suspense } from "react";
import HeroWrapper from "@/app/partials/hero-section/HeroWrapper";
import SkeletonHero from "@/app/partials/hero-section/SkeletonHero";
import Info from "./partials/info-section/info";
import Navbar from "./components/navbar/Navbar";

export default function HomePage() {
  return (
    <main className="overflow-x-clip">
      <Suspense fallback={<SkeletonHero />}>
        <HeroWrapper />
      </Suspense>
      <div className="relative">
        <Navbar />
        <Info />
      </div>
    </main>
  );
}
