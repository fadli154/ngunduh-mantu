"use client";

import dynamic from "next/dynamic";

// Hanya digunakan di client
const NavbarClient = dynamic(() => import("@/app/components/navbar/NavbarClient"), {
  ssr: false,
});

export default function NavbarClientWrapper() {
  return <NavbarClient />;
}
