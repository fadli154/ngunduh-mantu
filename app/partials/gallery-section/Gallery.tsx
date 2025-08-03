"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sacramento } from "next/font/google";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

const categories = [
  { id: "family", label: "Keluarga" },
  { id: "moment", label: "Spesial" },
];

const galleryItems = [
  { id: 1, category: "moment", title: "Momen Bahagia", image: "/img/couple.jpg" },
  { id: 2, category: "moment", title: "Kebersamaan", image: "/img/couple2.jpg" },
  { id: 3, category: "family", title: "Keluarga Tercinta", image: "/img/hero3.jpg" },
  { id: 9, category: "family", title: "Keluarga Tercinta", image: "/img/hero2.jpg" },
  { id: 4, category: "moment", title: "Teman Sejati", image: "/img/sahabat.jpg" },
  { id: 5, category: "moment", title: "Teman Sejati", image: "/img/sahabat2.jpg" },
  { id: 6, category: "moment", title: "Saudara", image: "/img/saudara1.jpg" },
  { id: 7, category: "moment", title: "Saudara", image: "/img/saudara2.jpg" },
  { id: 8, category: "moment", title: "Saudara", image: "/img/saudara6.jpg" },
];

export default function WeddingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("family");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const filteredItems = galleryItems.filter((item) => item.category === selectedCategory);

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, [filteredItems.length, selectedImageIndex]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedImageIndex(0);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 transition-colors duration-300" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2 md:mb-4">
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

        {/* Image Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredItems[selectedImageIndex]?.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-10 lg:mb-12 aspect-[2/3] sm:aspect-[3/2] rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-md mx-auto max-w-4xl"
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={() =>
                    setModalImage({
                      src: filteredItems[selectedImageIndex]?.image,
                      title: filteredItems[selectedImageIndex]?.title,
                    })
                  }
                  className="w-full h-full"
                >
                  <Image src={filteredItems[selectedImageIndex]?.image} alt={filteredItems[selectedImageIndex]?.title} width={1000} height={700} className="w-full h-full object-cover" priority />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 bg-transparent border-none flex flex-col items-center gap-4">
                <DialogTitle className="text-lg font-semibold text-white2-500 dark:text-white">{modalImage?.title}</DialogTitle>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="rounded-xl overflow-hidden">
                  {modalImage && <Image src={modalImage.src} alt="Zoomed" width={1200} height={800} className="w-full h-full max-h-[80vh] object-contain rounded-xl" />}
                </motion.div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail Scrollable */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto justify-center scrollbar-hidden snap-x scroll-pl-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className={`border-2 rounded-md overflow-hidden snap-start transition-all duration-300 ${index === selectedImageIndex ? "border-[#c7a47a]" : "border-transparent hover:border-[#c7a47a]"}`}
            >
              <Image src={item.image} alt={item.title} width={100} height={70} className="w-20 h-16 sm:w-24 sm:h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
