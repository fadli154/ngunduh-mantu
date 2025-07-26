// app/page.tsx
import { Suspense } from "react";
import HeroWrapper from "@/app/partials/hero-section/HeroWrapper";

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroWrapper />
      </Suspense>
    </main>
  );
}
