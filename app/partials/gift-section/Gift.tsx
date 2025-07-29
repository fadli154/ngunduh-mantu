"use client";

import { motion } from "framer-motion";
import CardQris from "@/app/elements/card/CardQris";

export default function GiftSection() {
  return (
    <section id="gift" className="px-6 py-20 md:py-28  flex justify-center items-center">
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold tracking-widest text-text-500">
          Wedding Gift
        </motion.h2>
        <p className="text-base md:text-lg text-secondary-500 max-w-xl">Tanpa mengurangi rasa hormat, bagi keluarga dan sahabat yang ingin mengirimkan tanda kasih, dapat melalui:</p>

        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Kartu BCA */}
          <motion.div whileHover={{ scale: 1.03 }} className="relative w-full md:w-1/2 bg-gradient-to-tr from-[#b9cbe0] to-[#6a7c92] rounded-2xl shadow-xl p-6 overflow-hidden text-white">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl opacity-20" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm tracking-wide">Bank BCA</p>
                <p className="text-xl sm:text-2xl font-semibold tracking-widest mt-2">1234 5678 9012</p>
                <p className="text-sm mt-1">a.n. Agung & Wenny</p>
              </div>
              <div className="flex justify-between items-end mt-6">
                <p className="text-xs text-white/60">Wedding Gift</p>
                <div className="w-12 h-8 bg-white/30 rounded" />
              </div>
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center">
            <CardQris />
          </div>
        </div>
      </div>
    </section>
  );
}
