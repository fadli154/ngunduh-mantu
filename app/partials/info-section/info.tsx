import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

import Image from "next/image";

export default function Info() {
  return (
    <div key={"info-section"} className="relative container flex flex-col items-center justify-center text-secondary-500 dark:text-white2-500 font-sans bg-cover bg-center transition-all duration-300" id="info">
      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center px-4  text-center">
        <h1 className={`${sacramento.className} text-[calc(2.4rem+1.5vw)] text-text-500 font-bold 2xl:text-8xl`}>Acara Pernikahan</h1>
        <h3 className="text-dark2-600 dark:text-white2-500 text-[calc(.7rem+.7vw)] lg:text-lg 2xl:text-2xl 2xl:mt-2">Diselenggarakan pada 7 September 2025 di Tangerang, Banten.</h3>
        <h4 className="text-dark2-600/70 dark:text-white2-500/50 lg:text-sm 2xl:text-lg w-full md:w-1/2 mt-2 2xl:mt-4 text-[calc(.6rem+.6vw)]">
          Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, saudara, dan teman-teman untuk hadir pada acara pernikahan kami.
        </h4>

        <div className="flex mt-10 2xl:mt-20 justify-center items-start md:items-center">
          <div className="flex justify-center items-center flex-col md:flex-row-reverse">
            <Image
              src="/img/agung.png"
              className="relative drop-shadow-md drop-shadow-text-500/60 dark:brightness-75 right-4 md:-right-5 h-25 w-25 md:h-45 md:w-45 2xl:h-60 2xl:w-60 rounded-full"
              alt="foto-mempelai-pria"
              width={180}
              height={180}
              priority
            />
            <div className="flex flex-col-reverse mt-3 justify-center items-center relative right-4">
              <p className="text-dark2-600/70 dark:text-white2-500 mt-0 md:mt-2 text-[calc(.6rem+.6vw)] 2xl:text-xl">Putra Dari Bapak Salim & Ibu Multahara</p>
              <h1 className={`${sacramento.className} text-text-500 text-[calc(1.5rem+1.5vw)]`}>Agung Afriansyah</h1>
            </div>
          </div>
          <Image src="/img/heart.png" className="h-20 w-20 2xl:h-25 2xl:w-25 z-10 mt-2 md:mt-0 drop-shadow-sm drop-shadow-text-500/60 dark:brightness-75" alt="foto-hati" width={80} height={80} priority />
          <div className="flex justify-center items-center flex-col md:flex-row">
            <Image
              src="/img/wenny.png"
              className="relative drop-shadow-md drop-shadow-text-500/60 dark:brightness-75 left-4 h-25 w-25 md:h-45 md:w-45 2xl:h-60 2xl:w-60 md:-left-5 rounded-full"
              alt="foto-mempelai-wanita"
              width={180}
              height={180}
              priority
            />
            <div className="flex flex-col-reverse mt-3 justify-center items-center relative left-4">
              <p className="text-dark2-600/70 dark:text-white2-500 mt-0 md:mt-2 text-[calc(.6rem+.6vw)] 2xl:text-xl">Putri Dari Bapak Sukarlan & Ibu Darsini</p>
              <h1 className={`${sacramento.className} text-text-500 text-[calc(1.5rem+1.5vw)]`}>Wenny Tri Landari</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
