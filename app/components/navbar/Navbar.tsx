import { Suspense } from "react";
import NavLinkList from "@/app/components/navbar/NavLinkList";
import NavbarClientWrapper from "@/app/components/navbar/NavbarClientWrapper";

export default function Navbar() {
  return (
    <nav className="top-0 z-50 w-full px-4 py-3 bg-white/60 dark:bg-dark2-900/60 backdrop-blur border-b border-zinc-300 dark:border-dark2-600 flex justify-between items-center">
      <div className="text-lg font-bold tracking-widest text-dark2-700 dark:text-white">Fadli & Partner</div>
      <NavLinkList />
      <Suspense fallback={null}>
        <NavbarClientWrapper />
      </Suspense>
    </nav>
  );
}
