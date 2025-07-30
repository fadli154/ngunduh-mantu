"use client";

import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Grey_Qo } from "next/font/google";
import clsx from "clsx";

const greGrey_Qo = Grey_Qo({ subsets: ["latin"], weight: "400" });

export default function EventInfo() {
  return (
    <section className="w-full bg-primary-500/10 dark:bg-dark2-600 text-white dark:text-white2-500 px-6 py-20 transition-colors duration-500" id="info">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={clsx(greGrey_Qo.className, "text-text-500 text-6xl mb-4")}>
          Informasi Acara
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-sm md:text-md mb-6 text-dark2-600/60 dark:text-white2-500/90">
          <strong>Alamat:</strong> Perumahan Total Persada, Jl. Maos Blok H9 No. 34 RT 003/ RW 008 <br /> Kel. Gembor, Kec. Periuk, Kota Tangerang
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="w-full h-64 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7296014977655!2d106.58470369999999!3d-6.166953099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff96b061f43f%3A0xce1ff0f52e3a9398!2sWarung%20Sayur%20SUKARLAN!5e0!3m2!1sid!2sid!4v1753885056358!5m2!1sid!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-xl shadow-lg dark:shadow-primary-500/15 border-2 border-white/80"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-sm mb-10 text-dark2-600/40 dark:text-white2-500/80">
          Diharapkan untuk tidak salah alamat dan tanggal. Jika tiba di tempat tanpa tanda-tanda pernikahan, cek ulang jadwal dan lokasi.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-secondary-500/10 dark:bg-white2-500/10 p-6 backdrop-blur-xl rounded-xl shadow-lg dark:shadow-primary-500/15 py-8"
          >
            <h3 className="text-2xl font-bold mb-2 text-text-500/80">Akad Nikah</h3>
            <div className="flex items-center gap-2 justify-center text-dark2-600/50 dark:text-white2-500 mb-1">
              <FaClock /> <span className="text-center text-dark2-600/50 dark:text-white2-500">08.00 - 10.00</span>
            </div>
            <p className="text-dark2-600/50 dark:text-white2-500 mb-2">Minggu, 20 November 2023</p>
            <p className="text-sm text-dark2-600/50 dark:text-white2-500/70">Saat acara akad diharapkan untuk menjaga kekhidmatan dan hadir tepat waktu.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-secondary-500/10 dark:bg-white2-500/10 p-6 backdrop-blur-xl rounded-xl shadow-lg dark:shadow-primary-500/15 py-8"
          >
            <h3 className="text-2xl font-bold mb-2 text-text-500/80">Resepsi</h3>
            <div className="flex items-center gap-2 justify-center text-dark2-600/50 dark:text-white2-500 mb-1">
              <FaClock /> <span className="text-center">11.00 - selesai</span>
            </div>
            <p className="text-dark2-600/50 dark:text-white2-500 mb-2">Minggu, 20 November 2023</p>
            <p className="text-sm text-dark2-600/50 dark:text-white2-500/70">Saat acara resepsi diharapkan untuk tetap tertib dan mengikuti alur yang telah ditentukan.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
