"use client";

import { motion } from "framer-motion";
import FlipCard from "@/app/elements/card/FlipCard";
import { Sacramento } from "next/font/google";

const greSacramento = Sacramento({ subsets: ["latin"], weight: "400" });

export default function GiftSection() {
  return (
    <section id="gift" className="px-6 py-20 md:py-28 bg-primary-500/10 dark:bg-dark2-600 flex justify-center items-center ">
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-10">
        <div className="flex justify-center items-center flex-col">
          {/* Hiasan garis di atas */}
          <div className="w-18 h-1 bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b] rounded-full mb-2 2xl:mb-8"></div>

          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
            ${greSacramento.className}
            text-[calc(2.5rem+1.5vw)] 
            font-bold 2xl:text-8xl
            bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b]
            bg-clip-text text-transparent 2xl:pb-9
          `}
          >
            Wedding <span className="text-dark2-600/20 dark:text-white2-500">Gift</span>
          </motion.h2>
          <p className="text-sm md:text-md mt-1 text-center text-dark2-600/60 dark:text-white2-500/50 max-w-[90%] lg:max-w-[70%] text-[calc(.7rem+.7vw)]">
            Tanpa mengurangi rasa hormat, bagi keluarga dan sahabat yang ingin mengirimkan tanda kasih, dapat tekan kartu ini
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
          <FlipCard bankName="BCA" rek="6275 1231 81" name="Wenny Tri Landari" />
          <FlipCard bankName="Mandiri" rek="1760 0055 413 52" name="Agung Afrimansyah" />
        </div>
      </div>
    </section>
  );
}
