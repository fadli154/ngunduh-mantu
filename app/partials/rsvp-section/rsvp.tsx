"use client";

import { motion } from "framer-motion";
import { Sacramento } from "next/font/google";

const greSacramento = Sacramento({ subsets: ["latin"], weight: "400" });

export default function RSVPSection() {
  return (
    <section id="rsvp" className="py-20 px-4 sm:px-8 lg:px-24 text-foreground">
      <div className="max-w-2xl mx-auto text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`
                   ${greSacramento.className}
                   text-[calc(2.5rem+1.5vw)] 
                   font-bold 2xl:text-8xl
                   bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8870bb7]
                   bg-clip-text text-transparent 2xl:pb-9 2xl:pt-4
                 `}
        >
          RSVP
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="mb-8 text-muted-foreground dark:text-white2-500/80">
          Kami sangat berbahagia apabila Bapak/Ibu/Saudara/i berkenan untuk memberikan ucapan dan doa restu.
        </motion.p>
      </div>
    </section>
  );
}
