"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ModeToggle } from "@/app/elements/mode-toggle/ModeToggle";
import clsx from "clsx";
import { Grey_Qo } from "next/font/google";

const greGrey_Qo = Grey_Qo({ subsets: ["latin"], weight: "400" });

const navItems = [
  { label: "Info", to: "info" },
  { label: "RSVP", to: "rsvp" },
  { label: "Gift", to: "gift" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-[60]">
      {/* Hamburger Button */}
      <button className="w-8 h-8 flex flex-col justify-center items-center group z-[60] relative" onClick={() => setIsOpen(!isOpen)}>
        <span className={clsx("absolute w-8 h-1 bg-text-500 rounded transition-all duration-300 origin-center", isOpen ? "rotate-45" : "-translate-y-2")} />
        <span className={clsx("absolute w-8 h-1 right-1 bg-text-500 rounded transition-all duration-300", isOpen ? "opacity-0" : "translate-y-0")} />
        <span className={clsx("absolute w-8 h-1 bg-text-500 rounded transition-all duration-300 origin-center", isOpen ? "-rotate-45" : "translate-y-2")} />
      </button>

      {/* Slide Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full bg-white2-500 dark:bg-dark2-600 w-64 min-h-screen shadow-lg transition-transform duration-300 ease-in-out flex flex-col p-6 space-y-6 z-50 items-center",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className={clsx(greGrey_Qo.className, "text-3xl py-5  2xl:text-5xl font-bold tracking-widest text-text-500")}>Agung & Wenny</div>

        {navItems.map((item) => (
          <ScrollLink
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsOpen(false)}
            activeClass="text-yellow-600 dark:text-yellow-400 font-bold"
            className={`cursor-pointer text-lg text-zinc-600 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors text-center m-0 py-6 border-b w-full border-zinc-400/20 ${item.to === "info" ? "border-t" : ""} `}
          >
            {item.label}
          </ScrollLink>
        ))}
        <div className="py-6">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
