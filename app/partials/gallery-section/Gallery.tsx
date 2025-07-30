"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  { id: "couple", label: "Pengantin" },
  { id: "family", label: "Keluarga" },
  { id: "moment", label: "Spesial" },
  { id: "friends", label: "Sahabat" },
];

const galleryItems = [
  {
    id: 1,
    category: "couple",
    title: "Momen Bahagia",
    description: "Pengantin di hari sakral mereka.",
    image: "https://picsum.photos/id/1011/500/375",
  },
  {
    id: 2,
    category: "couple",
    title: "Kebersamaan",
    description: "Senyuman di tengah doa dan harapan.",
    image: "https://picsum.photos/id/1012/500/375",
  },
  {
    id: 3,
    category: "family",
    title: "Keluarga Tercinta",
    description: "Doa restu dari keluarga yang menyentuh hati.",
    image: "https://picsum.photos/id/1015/500/375",
  },
  {
    id: 4,
    category: "moment",
    title: "Lempar Bunga",
    description: "Tradisi yang penuh tawa dan harapan.",
    image: "https://picsum.photos/id/1024/500/375",
  },
  {
    id: 5,
    category: "friends",
    title: "Sahabat Sejati",
    description: "Tawa bersama teman di hari bahagia.",
    image: "https://picsum.photos/id/1025/500/375",
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
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm font-medium mb-2 text-[#c7a47a] tracking-wide uppercase">
            Galeri
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-[#6a7c92] dark:text-[#b9cbe0] leading-tight">
            Kenangan Indah Pernikahan
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="overflow-x-auto scrollbar-hidden flex gap-3 sm:justify-center border-b border-gray-200 dark:border-gray-600 pb-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${selectedCategory === cat.id ? "text-[#c7a47a] border-[#c7a47a]" : "text-gray-500 dark:text-gray-400 border-transparent hover:text-[#c7a47a]"}`}
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
                transition={{ duration: 0.4 }}
                className="group bg-white dark:bg-[#0f172a] rounded-xl shadow hover:shadow-xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image} // pastikan ini adalah URL absolut atau file public, atau sudah dikonfigurasi di next.config.js
                    alt={item.title}
                    width={500} // wajib jika layout="intrinsic" atau tidak pakai fill
                    height={300}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <p className="text-white text-center text-lg font-semibold px-2">{item.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#6a7c92] dark:text-[#b9cbe0] group-hover:text-[#c7a47a] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
