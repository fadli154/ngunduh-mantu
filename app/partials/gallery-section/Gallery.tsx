"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

const categories = [
  { id: "family", label: "Keluarga" },
  { id: "moment", label: "Spesial" },
];

const galleryItems = [
  { id: 1, category: "moment", title: "Momen Bahagia", description: "Pengantin di hari sakral mereka.", image: "/img/couple.jpg" },
  { id: 2, category: "moment", title: "Kebersamaan", description: "Senyuman di tengah doa dan harapan.", image: "/img/couple2.jpg" },
  { id: 3, category: "family", title: "Keluarga Tercinta", description: "Doa restu dari keluarga yang menyentuh hati.", image: "/img/hero3.jpg" },
  { id: 9, category: "family", title: "Keluarga Tercinta", description: "Doa restu dari keluarga yang menyentuh hati.", image: "/img/hero2.jpg" },
  { id: 4, category: "moment", title: "Teman Sejati", description: "Tawa bersama teman di hari bahagia.", image: "/img/sahabat.jpg" },
  { id: 5, category: "moment", title: "Teman Sejati", description: "Tawa bersama teman di hari bahagia.", image: "/img/sahabat2.jpg" },
  { id: 6, category: "moment", title: "Saudara", description: "Tawa bersama saudara di hari bahagia.", image: "/img/saudara1.jpg" },
  { id: 7, category: "moment", title: "Saudara", description: "Tawa bersama saudara di hari bahagia.", image: "/img/saudara2.jpg" },
  { id: 8, category: "moment", title: "Saudara", description: "Tawa bersama saudara di hari bahagia.", image: "/img/saudara6.jpg" },
];

export default function WeddingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("family");
  const filteredItems = galleryItems.filter((item) => item.category === selectedCategory);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedImageIndex(0); // reset ke foto pertama
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 transition-colors duration-300" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-md md:text-lg font-medium mb-3 text-[#c7a47a] tracking-wide uppercase">
            Galeri
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-[2.6rem] sm:text-7xl pb-2 font-bold leading-tight bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b] bg-clip-text text-transparent ${sacramento.className}`}
          >
            Kenangan <span className="text-dark2-600/20 dark:text-white2-500">Indah</span>
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="overflow-x-auto flex gap-3 justify-center border-b border-gray-200 dark:border-gray-600 pb-4 2xl:pb-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 text-sm lg:text-md 2xl:text-lg font-medium transition-all border-b-2 2xl:border-b-3 ${
                selectedCategory === cat.id ? "text-[#c7a47a] border-[#c7a47a]" : "text-gray-500 dark:text-gray-400 border-transparent hover:text-[#c7a47a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Selected Image Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredItems[selectedImageIndex]?.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-10 lg:mb-12 aspect-[2/3] sm:aspect-[3/2] rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-md mx-auto max-w-4xl"
          >
            <Image src={filteredItems[selectedImageIndex]?.image} alt={filteredItems[selectedImageIndex]?.title} width={1000} height={700} className="w-full h-full object-cover" priority />
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail Selector */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto justify-center">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`border-2 rounded-md overflow-hidden transition-all duration-300 ${index === selectedImageIndex ? "border-[#c7a47a]" : "border-transparent hover:border-[#c7a47a]"}`}
            >
              <Image src={item.image} alt={item.title} width={100} height={70} className="w-20 h-16 sm:w-24 sm:h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
