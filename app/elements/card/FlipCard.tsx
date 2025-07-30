import React from "react";

type CardProps = {
  bankName: string;
  rek: string;
  name: string;
};

const Card = ({ bankName, rek, name }: CardProps) => {
  return (
    <div className="relative w-full max-w-[500px] aspect-[1.586] text-white">
      <div className="group relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#002F6C] to-[#004896] overflow-hidden shadow-xl [backface-visibility:hidden]">
          {/* Background logo watermark (R letter) */}
          <div className="absolute w-full h-full opacity-10 bg-[url('/watermark-bca.png')] bg-no-repeat bg-center bg-contain"></div>

          {/* Text and logos */}
          <div className="absolute top-4 left-4 text-left space-y-1">
            <p className="text-sm font-semibold">{bankName}</p>
            <p className="text-xs text-white/80">Kartu Virtual</p>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">{/* <img src="/bca-logo.png" alt="BCA" className="w-10 h-auto" /> */}</div>

          {/* Chip */}
          <div className="absolute top-[30%] left-4">{/* <img src="/chip.png" alt="chip" className="w-10 h-auto" /> */}</div>

          {/* VALID THRU */}
          <p className="absolute text-[0.6rem] top-[55%] left-[35%] tracking-wider">
            VALID
            <br />
            THRU
          </p>

          {/* Card Number */}
          <p className="absolute bottom-[25%] left-4 text-lg tracking-widest font-semibold">{rek}</p>

          {/* Expiry */}
          <p className="absolute bottom-[16%] left-4 text-xs font-medium">12/24</p>

          {/* Name */}
          <p className="absolute bottom-4 left-4 text-sm font-semibold">{name}</p>

          {/* Mastercard logo */}
          <div className="absolute bottom-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 48 48">
              <circle cx="17" cy="24" r="14" fill="#EB001B" />
              <circle cx="31" cy="24" r="14" fill="#F79E1B" />
              <path fill="#FF5F00" d="M24 10a14 14 0 0 0 0 28a14 14 0 0 0 0-28z" />
            </svg>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#002F6C] to-[#004896] rotate-y-180 shadow-xl [backface-visibility:hidden]">
          <div className="absolute top-6 w-full h-10 bg-black" />
          <div className="absolute top-[4.5rem] left-4 right-4 bg-white h-6 rounded" />
          <div className="absolute top-[4.5rem] right-4 w-24 bg-white h-6 rounded flex items-center justify-center">
            <p className="text-black font-bold">***</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
