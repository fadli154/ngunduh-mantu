// app/components/HeroWrapper.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Hero from "@/app/partials/hero-section/Hero";

export default function HeroWrapper() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");

  return <Hero guestName={guestName} />;
}
