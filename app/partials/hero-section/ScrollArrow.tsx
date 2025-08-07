"use client";

import { useEffect, useState } from "react";
import { HiMiniArrowLongDown } from "react-icons/hi2";

export default function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // hilang setelah 5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`left-1/2 -translate-x-1/2 -bottom-33 md:-bottom-18 2xl:-bottom-40 mt-14 md:mt-8 py-2 rounded-full border-1 animate-bounce opacity-35 transition-all duration-1000 ease-in-out
      ${visible ? "opacity-100 translate-y-0 absolute" : "opacity-0  translate-y-4 pointer-events-none hidden"}`}
    >
      <HiMiniArrowLongDown size={23} />
    </div>
  );
}
