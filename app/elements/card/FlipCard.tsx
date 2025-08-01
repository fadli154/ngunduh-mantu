"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoTriangle } from "react-icons/io5";

type CardProps = {
  bankName: "BCA" | "Mandiri";
  rek: string;
  name: string;
};

const bankStyles = {
  BCA: {
    gradient: "from-[#002F6C] to-[#004896]",
    logo: "/img/bcalogo.png",
  },
  Mandiri: {
    gradient: "from-[#B28D42] to-[#E2C68C]",
    logo: "/img/mandiri-logo.png",
  },
};

const Card = ({ bankName, rek, name }: CardProps) => {
  const { gradient, logo } = bankStyles[bankName];
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className="relative w-full max-w-[500px] aspect-[1.586] text-white">
      <div className={`group relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""}`} onClick={handleFlip}>
        {/* Front Side */}
        <div className={`absolute w-full h-full rounded-xl bg-gradient-to-br ${gradient} overflow-hidden shadow-xl [backface-visibility:hidden]`}>
          <div className="absolute top-4 left-4 text-left space-y-1">
            <p className="text-sm lg:text-lg font-semibold">{bankName}</p>
            <p className="text-xs text-white/80">Kartu Virtual</p>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Image
              src={logo}
              alt={bankName}
              className={`
                ${bankName === "BCA" ? "filter brightness-200 contrast-200 opacity-95 grayscale" : "mt-1"}
                w-20 sm:w-24 md:w-28 lg:w-32
              `}
              width={130}
              height={130}
              sizes="(max-width: 640px) 100px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
            />
          </div>

          <div className="absolute top-[33.5%] left-5">
            <IoTriangle className="rotate-30" />
          </div>

          <div className="absolute top-[30%] left-10">
            <Image src="/img/chip.png" alt="chip" width={60} height={60} />
          </div>

          <p className="absolute bottom-[25%] left-4 text-xl sm:text-2xl tracking-widest font-semibold">{rek}</p>
          <p className="absolute bottom-[16%] left-4 text-xs font-medium">12/28</p>
          <p className="absolute bottom-4 left-4 text-sm font-semibold">{name}</p>

          <div className="absolute bottom-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 48 48">
              <circle cx="17" cy="24" r="14" fill="#EB001B" />
              <circle cx="31" cy="24" r="14" fill="#F79E1B" />
              <path fill="#FF5F00" d="M24 10a14 14 0 0 0 0 28a14 14 0 0 0 0-28z" />
            </svg>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full rounded-xl bg-gradient-to-br ${gradient} rotate-y-180 shadow-xl [backface-visibility:hidden]`}>
          <div className="absolute top-6 w-full h-10 bg-black" />
          <div className="absolute top-[4.5rem] left-4 right-4 bg-white h-6 rounded" />
          <div className="absolute top-[4.5rem] py-4 w-full bg-white h-6 flex items-center justify-between px-2">
            <p className={`text-sm ${gradient} bg-clip-text text-transparent bg-gradient-to-r font-bold`}>No Rek : {rek}</p>
            <p className={`text-sm ${gradient} bg-clip-text text-transparent bg-gradient-to-r font-bold`}>Atas Nama : {name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
