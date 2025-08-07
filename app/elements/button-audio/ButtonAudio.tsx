"use client";

import { useEffect, useRef, useState } from "react";
import { RiDiscLine } from "react-icons/ri";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function ButtonIcon() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("waiting", handleWaiting);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("waiting", handleWaiting);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/lagu.mp3" loop />

      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root open={showTooltip}>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => {
                const audio = audioRef.current;
                if (!audio) return;

                if (isPlaying) {
                  audio.pause();
                  setIsPlaying(false);
                } else {
                  setIsLoading(true); // Set loading saat tombol ditekan
                  audio
                    .play()
                    .then(() => {
                      setIsPlaying(true);
                      if (audio.readyState >= 3) {
                        setIsLoading(false); // Stop loading jika sudah siap
                      }
                    })
                    .catch((err) => {
                      console.error("Play failed:", err);
                      setIsLoading(false);
                    });
                }
              }}
              className="fixed bottom-4 right-4 z-50 w-10 2xl:w-12 h-10 2xl:h-12 rounded-full transition-all duration-200
                bg-white shadow-lg dark:bg-dark2-600 focus:outline-none active:scale-90 hover:scale-105 flex items-center justify-center"
            >
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 text-dark2-600/50 dark:text-white2-500">
                {isLoading ? <FaSpinner className="w-full h-full animate-spin" /> : isPlaying ? <RiDiscLine className="w-full h-full animate-spin" /> : <FaRegPauseCircle className="w-full h-full" />}
              </div>
            </button>
          </Tooltip.Trigger>

          <Tooltip.Content side="top" className="bg-black text-white text-xs px-3 py-1 mr-2 rounded shadow z-50" sideOffset={8}>
            click untuk memutar lagu
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
