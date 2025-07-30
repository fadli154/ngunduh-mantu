"use client";

import { motion } from "framer-motion";
import CardQris from "@/app/elements/card/CardQris";
import FlipCard from "@/app/elements/card/FlipCard";

export default function GiftSection() {
  return (
    <section id="gift" className="px-6 py-20 md:py-28 bg-primary-500/10 dark:bg-dark2-600 flex justify-center items-center ">
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold tracking-widest text-text-500">
          Wedding Gift
        </motion.h2>
        <p className="text-base md:text-lg text-secondary-500 max-w-xl">Tanpa mengurangi rasa hormat, bagi keluarga dan sahabat yang ingin mengirimkan tanda kasih, dapat melalui:</p>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <FlipCard bankName="BCA" rek="6275123181" name="Wenny Tri Landari" />
          <FlipCard bankName="Mandiri" rek="1760005541352" name="Agung Afrimansyah" />
          <div className="w-full md:w-1/2 flex justify-center">
            <CardQris />
          </div>
        </div>
      </div>
    </section>
  );
}
