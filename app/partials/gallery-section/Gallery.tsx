"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sacramento } from "next/font/google";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaTimes, FaSearchPlus, FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DialogTitle } from "@radix-ui/react-dialog";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

const categories = [
  { id: "family", label: "Keluarga" },
  { id: "moment", label: "Spesial" },
];

const galleryItems = [
  { id: 1, category: "moment", title: "Momen Bahagia", image: "/img/moment.jpg" },
  { id: 2, category: "moment", title: "Kebersamaan", image: "/img/moment1.jpg" },
  { id: 4, category: "moment", title: "Kebersamaan", image: "/img/moment2.jpg" },
  { id: 3, category: "family", title: "Keluarga Tercinta", image: "/img/hero3.jpg" },
  { id: 9, category: "family", title: "Keluarga Tercinta", image: "/img/hero2.jpg" },
];

export default function WeddingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("family");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; title: string; category: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = galleryItems.filter((item) => item.category === selectedCategory);

  // Auto Scroll
  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(() => {
        setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [filteredItems.length, selectedImageIndex, isModalOpen]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedImageIndex(0);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
    if (isModalOpen) {
      const item = filteredItems[index];
      setModalImage({ src: item.image, title: item.title, category: item.category });
    }
  };

  // Navigasi manual
  const goPrev = () => {
    const newIndex = (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImageIndex(newIndex);
    if (isModalOpen) {
      const item = filteredItems[newIndex];
      setModalImage({ src: item.image, title: item.title, category: item.category });
    }
  };

  const goNext = () => {
    const newIndex = (selectedImageIndex + 1) % filteredItems.length;
    setSelectedImageIndex(newIndex);
    if (isModalOpen) {
      const item = filteredItems[newIndex];
      setModalImage({ src: item.image, title: item.title, category: item.category });
    }
  };

  // Swipe gesture
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;
    if (distance > 50) goNext(); // Swipe left
    else if (distance < -50) goPrev(); // Swipe right
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
                selectedCategory === cat.id ? "text-[#c7a47a] border-[#c7a47a]" : "text-gray-500 dark:text-gray-400 border-transparent hover:text-[#c7a47a] focus:text-[#c7a47a]"
              }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredItems[selectedImageIndex]?.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-10 lg:mb-12 aspect-[2/3] sm:aspect-[3/2] rounded-md overflow-hidden mx-auto max-w-4xl bg-transparent"
          >
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={() =>
                    setModalImage({
                      src: filteredItems[selectedImageIndex]?.image,
                      title: filteredItems[selectedImageIndex]?.title,
                      category: filteredItems[selectedImageIndex]?.category,
                    })
                  }
                  className="w-full h-full"
                >
                  <Image src={filteredItems[selectedImageIndex]?.image} alt={filteredItems[selectedImageIndex]?.title} width={1000} height={700} className="w-full h-full object-cover" priority />
                </button>
              </DialogTrigger>
              a
              <DialogContent showCloseButton={false} className="fixed z-[999] flex items-center justify-center bg-black/35 border-none min-w-full min-h-screen rounded-none" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                {/* Kiri Atas: Judul & Kategori */}
                <div className="absolute top-4 left-6 text-white text-sm md:text-base font-semibold">
                  {modalImage?.category.toUpperCase()} - <DialogTitle className="inline">{modalImage?.title}</DialogTitle>
                </div>

                {/* Kanan Atas: Action */}
                <div className="absolute top-4 right-6 flex gap-6">
                  <button className="text-white hover:scale-110 active:scale-90 transition" onClick={() => window.open(modalImage?.src, "_blank")}>
                    <FaSearchPlus className="text-xl md:text-2xl" />
                  </button>
                  <a href={modalImage?.src} download className="text-white hover:scale-110 active:scale-90 transition">
                    <FaDownload className="text-xl md:text-2xl" />
                  </a>
                  <button onClick={() => setIsModalOpen(false)} className="text-red-500 hover:rotate-90 active:scale-90 transition-all">
                    <FaTimes className="text-xl md:text-2xl" />
                  </button>
                </div>

                {/* Navigasi Kiri & Kanan */}
                <button onClick={goPrev} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:scale-125 transition">
                  <FaChevronLeft className="text-2xl sm:text-3xl" />
                </button>
                <button onClick={goNext} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:scale-125 transition">
                  <FaChevronRight className="text-2xl sm:text-3xl" />
                </button>

                {/* Gambar */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="rounded-xl overflow-hidden px-2 w-[500px] h-[500px] flex items-center justify-center">
                  {modalImage && <Image src={modalImage.src} alt="Zoomed" width={1200} height={800} className="max-w-full max-h-full object-contain rounded-xl" />}
                </motion.div>

                {/* Bawah Tengah */}
                <div className="absolute bottom-4 text-center w-full text-white text-sm md:text-base">
                  {selectedImageIndex + 1} dari {filteredItems.length} Foto
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto justify-center scrollbar-hidden snap-x scroll-pl-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className={`border-2 rounded-md overflow-hidden snap-start transition-all duration-300 ${index === selectedImageIndex ? "border-[#c7a47a]" : "border-transparent hover:border-[#c7a47a] focus:border-[#c7a47a]"}`}
            >
              <Image src={item.image} alt={item.title} width={100} height={70} className="w-20 h-16 sm:w-24 sm:h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
