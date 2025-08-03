"use client";

import { useEffect, useRef, useState } from "react";
import { RiDiscLine } from "react-icons/ri";
import { FaRegPauseCircle } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function ButtonIcon() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/audio/lagu.mp3" loop preload="auto" />

      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root open={showTooltip}>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full transition-all duration-200
                bg-white shadow-lg dark:bg-dark2-600 focus:outline-none active:scale-90 hover:scale-105 flex items-center justify-center"
            >
              <div className="w-14 h-14 animate-spin text-dark2-600/70 dark:text-white2-500">{isPlaying ? <RiDiscLine className="w-full h-full" /> : <FaRegPauseCircle className="w-full h-full" />}</div>
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
