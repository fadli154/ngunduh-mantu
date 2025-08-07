import { Grey_Qo } from "next/font/google";
import clsx from "clsx";
import NavLinks from "@/app/components/navbar/NavbarLinks";
import MobileMenu from "@/app/components/navbar/MobileMenu";

const greGrey_Qo = Grey_Qo({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <nav className={clsx("sticky top-0 z-50 w-full px-8 md:px-18 py-6 flex justify-between items-center transition-all duration-300", "backdrop-blur-3xl bg-transparent shadow-sm dark:shadow-white/5 border-b border-zinc-100/10")}>
      <div className={clsx(greGrey_Qo.className, "text-3xl 2xl:text-5xl pb-1 -mt-1 tracking-widest bg-gradient-to-r from-[#d4af37] via-[#807955] to-[#b8860b] bg-clip-text text-transparent font-bold")}>Agung & Wenny</div>
      <NavLinks />
      <MobileMenu />
    </nav>
  );
}
