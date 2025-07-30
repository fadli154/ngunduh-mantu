"use client";

import { motion } from "framer-motion";
import { Sacramento } from "next/font/google";
import AnimatedCard from "@/app/elements/card/AnimatedCard";

const greSacramento = Sacramento({ subsets: ["latin"], weight: "400" });

export default function EventInfo() {
  return (
    <section className="w-full bg-primary-500/10 dark:bg-dark2-600 text-white dark:text-white2-500 px-6 py-20 transition-colors duration-500 flex flex-col justify-center items-center" id="info">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center mb-2">
          {/* Hiasan garis di atas */}
          <div className="w-18 h-1 bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b] rounded-full mb-2"></div>

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
            bg-clip-text text-transparent 
          `}
          >
            Informasi <span className="text-dark2-600/20 dark:text-white2-500">Acara</span>
          </motion.h2>
        </div>

        <div className="flex justify-center items-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-md mb-6 text-center text-dark2-600/60 dark:text-white2-500/90 max-w-[80%] lg:max-w-[70%] text-[calc(.7rem+.7vw)]"
          >
            <strong>Alamat:</strong> Perumahan Total Persada, Jl. Maos Blok H9 No. 34 RT 003/ RW 008 Kel. Gembor, Kec. Periuk, Kota Tangerang
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="w-full h-64 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7296014977655!2d106.58470369999999!3d-6.166953099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff96b061f43f%3A0xce1ff0f52e3a9398!2sWarung%20Sayur%20SUKARLAN!5e0!3m2!1sid!2sid!4v1753885056358!5m2!1sid!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-xl shadow-lg dark:shadow-primary-500/15"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <AnimatedCard title="Akad Nikah" date="Minggu, 07 September 2025" time="11.00 WIB" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
            <AnimatedCard title="Resepsi Nikah" date="Minggu, 07 September 2025" time="12.00 WIB" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm mt-5 bg-text-500/10 dark:bg-text-500/40 shadow-lg dark:shadow-primary-500/15 p-8 rounded-md text-dark2-600/40 dark:text-white2-500/80"
        >
          <strong className="text-secondary-500 dark:text-primary-500 text-[calc(.6rem+.6vw)]">Informasi Penting:</strong> Diharapkan untuk tidak salah alamat dan tanggal. Jika tiba di tempat tanpa tanda-tanda pernikahan, cek ulang jadwal
          dan lokasi.
        </motion.p>
      </div>
    </section>
  );
}
