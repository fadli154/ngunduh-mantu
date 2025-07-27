// app/components/navbar/NavbarClient.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const sections = ["info", "gallery", "gift", "rsvp"];

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="relative w-8 h-8 flex flex-col justify-center items-center group" aria-label="Toggle Navigation">
        <span
          className={`w-8 h-1 bg-dark2-600 dark:bg-white rounded transition-all duration-300 
            ${isOpen ? "rotate-45 translate-y-2 origin-top-right" : ""}`}
        />
        <span
          className={`w-8 h-1 bg-dark2-600 dark:bg-white rounded transition-all duration-300 my-[2px] 
            ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-8 h-1 bg-dark2-600 dark:bg-white rounded transition-all duration-300 
            ${isOpen ? "-rotate-45 -translate-y-2 origin-bottom-right" : ""}`}
        />
      </button>

      {isOpen && (
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute top-16 right-0 bg-white dark:bg-dark2-800 rounded shadow-lg p-4">
          <ul className="space-y-4 text-right">
            {sections.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer uppercase tracking-widest font-medium text-sm ${activeSection === section ? "text-primary-500 dark:text-primary-300" : "text-gray-700 dark:text-gray-200"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
