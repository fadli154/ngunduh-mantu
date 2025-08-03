import HeroBackground from "@/app/partials/hero-section/HeroBackground";
import HeroTitle from "@/app/partials/hero-section/HeroTitle";
import GuestGreeting from "@/app/partials/hero-section/GuestGreeting";
import Countdown from "@/app/components/CountDown";
import Button from "@/app/elements/button/Button";
import { HiMiniArrowLongDown } from "react-icons/hi2";

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center text-white font-sans overflow-hidden">
      <HeroBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 dark:bg-black/60 backdrop-blur-[2px] grayscale-[20%] z-10"></div>

      {/* Konten */}
      <div className="relative z-20 text-center px-4">
        <GuestGreeting />
        <HeroTitle />

        <div className="flex justify-center items-center flex-col mt-4">
          <Countdown />

          <div className="mt-18 md:mt-14">
            <Button url="#home">Lihat Undangan</Button>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base 2xl:text-lg text-gray-300/70 tracking-wide">Menuju Hari Bahagia — 7 September 2025</p>

        {/* scroll arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 border-1 rounded-full -bottom-33 md:-bottom-18 2xl:-bottom-40 mt-14 md:mt-8 animate-bounce opacity-35 py-2">
          <HiMiniArrowLongDown size={23} />
        </div>
      </div>

      <div className="absolute h-24 left-0 bottom-0 w-full bg-black/45 dark:bg-black/80 mask-t-from-2 z-10" />
    </div>
  );
}
