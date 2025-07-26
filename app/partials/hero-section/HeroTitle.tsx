import { Grey_Qo } from "next/font/google";

const greyQo = Grey_Qo({ subsets: ["latin"], weight: "400" });

export default function HeroTitle() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-light mb-4 tracking-widest uppercase text-neutral-200">The Wedding Of</h1>

      <div className="flex items-center justify-center">
        <h2 className={`text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl font-serif font-bold mb-6 text-text-500 ${greyQo.className}`}>Agung Afriansyah</h2>
        <div className={`${greyQo.className} text-7xl 2xl:text-8xl mx-6 2xl:mx-8 font-light mb-4 text-white2-500`}>&amp;</div>
        <h2 className={`text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl font-serif font-bold mb-4 text-text-500 ${greyQo.className}`}>Wenny Tri Landari</h2>
      </div>
    </>
  );
}
