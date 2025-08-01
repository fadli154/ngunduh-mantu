"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

const categories = [
  { id: "couple", label: "Pengantin" },
  { id: "family", label: "Keluarga" },
  { id: "moment", label: "Spesial" },
  { id: "saudara", label: "Saudara" },
  { id: "friends", label: "Teman" },
];

const galleryItems = [
  {
    id: 1,
    category: "couple",
    title: "Momen Bahagia",
    description: "Pengantin di hari sakral mereka.",
    image: "/img/couple.jpg",
  },
  {
    id: 2,
    category: "couple",
    title: "Kebersamaan",
    description: "Senyuman di tengah doa dan harapan.",
    image: "/img/couple2.jpg",
  },
  {
    id: 3,
    category: "family",
    title: "Keluarga Tercinta",
    description: "Doa restu dari keluarga yang menyentuh hati.",
    image: "/img/hero3.jpg",
  },
  {
    id: 9,
    category: "family",
    title: "Keluarga Tercinta",
    description: "Doa restu dari keluarga yang menyentuh hati.",
    image: "/img/hero2.jpg",
  },
  {
    id: 4,
    category: "moment",
    title: "Teman Sejati",
    description: "Tawa bersama teman di hari bahagia.",
    image: "/img/sahabat.jpg",
  },
  {
    id: 5,
    category: "friends",
    title: "Teman Sejati",
    description: "Tawa bersama teman di hari bahagia.",
    image: "/img/sahabat2.jpg",
  },
  {
    id: 6,
    category: "saudara",
    title: "Saudara",
    description: "Tawa bersama saudara di hari bahagia.",
    image: "/img/saudara1.jpg",
  },
  {
    id: 7,
    category: "saudara",
    title: "Saudara",
    description: "Tawa bersama saudara di hari bahagia.",
    image: "/img/saudara2.jpg",
  },
  {
    id: 8,
    category: "saudara",
    title: "Saudara",
    description: "Tawa bersama saudara di hari bahagia.",
    image: "/img/saudara6.jpg",
  },
];

export default function WeddingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("couple");
  const filteredItems = galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 transition-colors duration-300" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-md md:text-lg font-medium mb-4 text-[#c7a47a] tracking-wide uppercase">
            Galeri
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-[2.6rem] sm:text-7xl pb-2 font-bold leading-tight bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b] bg-clip-text text-transparent ${sacramento.className}`}
          >
            Kenangan Indah <span className="text-dark2-600/20 dark:text-white2-500">Pernikahan</span>
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="overflow-x-auto scrollbar-hidden flex gap-3 sm:justify-center border-b border-gray-200 dark:border-gray-600 pb-4 2xl:pb-6 2xl:border-b-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 2xl:pb-3 text-sm lg:text-md 2xl:text-lg font-medium transition-all border-b-2 2xl:border-b-4 ${
                selectedCategory === cat.id ? "text-[#c7a47a] border-[#c7a47a]" : "text-gray-500 dark:text-gray-400 border-transparent hover:text-[#c7a47a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                whileFocus={{ scale: 1.03 }} // 🔥 Fokus (klik/tap) juga trigger animasi
                transition={{ duration: 0.4 }}
                tabIndex={0} // 🔑 Supaya bisa difokuskan (penting untuk mobile)
                className="group bg-white dark:bg-[#0f172a] rounded-xl shadow hover:shadow-xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700 outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.title} width={500} height={300} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" loading="lazy" />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 group-focus:bg-black/50 transition-all duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 z-20">
                    <p className="text-white text-center text-lg 2xl:text-2xl font-semibold px-2">{item.title}</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg 2xl:text-2xl font-semibold text-[#6a7c92] dark:text-[#b9cbe0] group-hover:text-[#c7a47a] group-focus:text-[#c7a47a] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm lg:text-base 2xl:text-lg text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
