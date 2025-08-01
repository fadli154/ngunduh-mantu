"use client";

import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

type CardProps = {
  title: string;
  date: string;
  time: string;
};

export default function AnimatedCard({ title, date, time }: CardProps) {
  return (
    <div className="e-card playing relative backdrop-blur-3xl w-full h-65 rounded-2xl overflow-hidden shadow-lg dark:shadow-white2-500/20 bg-transparent mx-auto">
      {/* Animated Waves */}
      <motion.div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-tr rounded-[40%] animate-wave1 wave" />
      <motion.div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-tr rounded-[40%] animate-wave2 wave" />
      <motion.div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-tr rounded-[40%] animate-wave3 wave" />

      {/* Info Section */}
      <div className="relative flex justify-center items-center flex-col right-0 top-15 text-center text-white font-semibold text-lg">
        <FaClock className="w-10 h-10 mb-2" />
        <h3 className="text-2xl font-bold text-white2-500/90 dark:text-white2-500/40 text-[calc(.8rem+.6vw)]">{title}</h3>
        <div className="flex items-center gap-2 justify-center text-dark2-600/50 dark:text-white2-500 mb-1">
          <span className="text-center text-dark2-600/20 dark:text-white2-500 text-[calc(.8rem+.6vw)]">{time}</span>
        </div>
        <p className="text-dark2-600/20 dark:text-white2-500 -mt-2 text-[calc(.7rem+.6vw)]">{date}</p>
      </div>
    </div>
  );
}
