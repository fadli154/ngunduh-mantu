"use client";
import { useState } from "react";
import Image from "next/image";

export default function CyberQRCard() {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative w-40 h-60 sm:w-48 sm:h-72 cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {/* Grid trackers */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 z-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-full h-full" />
        ))}
      </div>

      {/* Card */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-900 border border-white/10 rounded-2xl
          flex flex-col items-center justify-center overflow-hidden shadow-2xl transform transition-transform duration-300
          ${hover ? "scale-[1.05] brightness-110" : ""}
        `}
      >
        {/* Glare overlay */}
        <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl transition-opacity duration-300 ${hover ? "opacity-30" : "opacity-0"}`} />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-4">
          <p className={`text-xs font-medium text-white/60 transition-opacity duration-300 ${hover ? "opacity-0" : "opacity-70"}`}>TAP ME</p>
          <h2
            className={`text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text 
              transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-0"}`}
          >
            QRIS
          </h2>
        </div>

        {/* Glowing circles */}
        {hover && (
          <>
            <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-cyan-400/30 blur-2xl" />
            <div className="absolute top-1/2 -right-10 w-24 h-24 rounded-full bg-blue-400/30 blur-3xl transform -translate-y-1/2" />
            <div className="absolute -bottom-8 left-1/4 w-16 h-16 rounded-full bg-purple-400/30 blur-2xl" />
          </>
        )}

        {/* Moving scan-line */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent ${hover ? "animate-[scan_2s_linear_infinite]" : ""}`} />
      </div>
    </div>
  );
}
