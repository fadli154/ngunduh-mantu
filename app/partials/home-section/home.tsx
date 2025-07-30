"use client";

import { Sacramento } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { easeOut } from "framer-motion";
import { useRef } from "react";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: easeOut },
    },
  };

  return (
    <div
      key={"info-section"}
      ref={ref}
      className="relative min-h-screen container flex flex-col items-center justify-center text-secondary-500 dark:text-white2-500 font-sans bg-cover bg-center transition-all duration-300 px-4 pb-2"
      id="home"
    >
      <motion.div className="relative z-10 flex flex-col items-center text-center" initial="hidden" animate={isInView ? "show" : "hidden"} variants={fadeUp}>
        <h1
          className={`
            ${sacramento.className}
            text-[calc(2.5rem+1.5vw)] 
            font-bold 2xl:text-8xl
            bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b]
            bg-clip-text text-transparent 
          `}
        >
          Acara Pernikahan
        </h1>

        <motion.h3 className="text-dark2-600 dark:text-white2-500 text-[calc(.7rem+.7vw)] lg:text-lg 2xl:text-2xl 2xl:mt-2" variants={fadeUp} transition={{ delay: 0.2 }}>
          Diselenggarakan pada 7 September 2025 di Tangerang, Banten.
        </motion.h3>

        <motion.h4 className="text-dark2-600/70 dark:text-white2-500/50 lg:text-sm 2xl:text-lg w-full md:w-1/2 mt-2 2xl:mt-4 text-[calc(.6rem+.6vw)]" variants={fadeUp} transition={{ delay: 0.4 }}>
          Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, saudara, dan teman-teman untuk hadir pada acara pernikahan kami.
        </motion.h4>

        <div className="flex mt-10 2xl:mt-20 justify-center items-start md:items-center gap-4">
          {/* Mempelai Pria */}
          <motion.div className="flex justify-center items-center flex-col md:flex-row-reverse" variants={imageFade} transition={{ delay: 0.6 }}>
            <Image
              src="/img/agung.png"
              className="relative drop-shadow-md drop-shadow-text-500/60 dark:brightness-75 right-4 md:-right-5 h-25 w-25 md:h-45 md:w-45 2xl:h-60 2xl:w-60 rounded-full"
              alt="foto-mempelai-pria"
              width={180}
              height={180}
              priority
            />
            <div className="flex flex-col-reverse mt-3 justify-center items-center relative right-4">
              <p className="text-dark2-600/70 dark:text-white2-500 mt-0 md:mt-2 text-[calc(.6rem+.6vw)] 2xl:text-xl">Putra Dari Bapak Salim & Ibu Multahara</p>
              <h1 className={`${sacramento.className} text-text-500 text-[calc(1.5rem+1.5vw)]`}>Agung Afriansyah</h1>
            </div>
          </motion.div>

          {/* Icon Hati */}
          <motion.div className="z-10 mt-2 md:mt-0" variants={fadeUp} transition={{ delay: 0.8 }}>
            <Image src="/img/heart.png" className="min-h-20 min-w-20 2xl:min-h-25 2xl:min-w-25 drop-shadow-sm drop-shadow-text-500/60 dark:brightness-75" alt="foto-hati" width={80} height={80} priority />
          </motion.div>

          {/* Mempelai Wanita */}
          <motion.div className="flex justify-center items-center flex-col md:flex-row" variants={imageFade} transition={{ delay: 1 }}>
            <Image
              src="/img/wenny.png"
              className="relative drop-shadow-md drop-shadow-text-500/60 dark:brightness-75 left-4 h-25 w-25 md:h-45 md:w-45 2xl:h-60 2xl:w-60 md:-left-5 rounded-full"
              alt="foto-mempelai-wanita"
              width={180}
              height={180}
              priority
            />
            <div className="flex flex-col-reverse mt-3 justify-center items-center relative left-4">
              <p className="text-dark2-600/70 dark:text-white2-500 mt-0 md:mt-2 text-[calc(.6rem+.6vw)] 2xl:text-xl">Putri Dari Bapak Sukarlan & Ibu Darsini</p>
              <h1 className={`${sacramento.className} text-text-500 text-[calc(1.5rem+1.5vw)]`}>Wenny Tri Landari</h1>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
