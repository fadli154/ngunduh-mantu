import { Grey_Qo } from "next/font/google";
import clsx from "clsx";
import NavLinks from "@/app/components/navbar/NavbarLinks";
import MobileMenu from "@/app/components/navbar/MobileMenu";

const greGrey_Qo = Grey_Qo({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <nav className={clsx("sticky top-0 z-50 w-full px-8 py-6 flex justify-between items-center transition-all duration-300", "bg-white backdrop-blur-3xl dark:bg-transparent shadow-md dark:shadow-dark2-700/30 border-b border-zinc-100/10")}>
      <div className={clsx(greGrey_Qo.className, "text-3xl font-bold tracking-widest text-text-500")}>Agung & Wenny</div>
      <NavLinks />
      <MobileMenu />
    </nav>
  );
}
