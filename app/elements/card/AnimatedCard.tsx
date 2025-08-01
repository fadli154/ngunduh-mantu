"use client";

import { motion } from "framer-motion";
import { Sacramento } from "next/font/google";

const greSacramento = Sacramento({ subsets: ["latin"], weight: "400" });

type CardProps = {
  title: string;
  date: string;
  time: string;
  icon: React.ReactNode;
};

export default function AnimatedCard({ title, date, time, icon }: CardProps) {
  return (
    <div className="e-card playing relative backdrop-blur-3xl w-full h-65 rounded-2xl overflow-hidden shadow-lg dark:shadow-white2-500/10 bg-transparent mx-auto">
      {/* Animated Waves */}
      <motion.div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-tr rounded-[40%] animate-wave1 wave" />
      <motion.div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-tr rounded-[40%] animate-wave2 wave" />
      <motion.div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-tr rounded-[40%] animate-wave3 wave" />

      {/* Info Section */}
      <div className="relative flex justify-center items-center flex-col right-0 top-12  text-center text-white font-semibold text-lg">
        <div className="w-10 h-10 mb-2 text-[#d4af37]">{icon}</div>
        <h3
          className={`text-[2rem] md:text-[2.2rem] font-bold ${greSacramento.className} bg-gradient-to-r from-[#d4af37] via-[#807955] to-[#b8860b]
            bg-clip-text text-transparent font-bold`}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2 justify-center text-dark2-600/50 dark:text-white2-500 mb-1">
          <span className="text-center text-dark2-600/25 dark:text-white2-500 text-[calc(.8rem+.6vw)]">{time}</span>
        </div>
        <p className="text-dark2-600/25 dark:text-white2-500 -mt-2 text-[calc(.7rem+.6vw)]">{date}</p>
      </div>
    </div>
  );
}
