import CommentForm from "@/app/partials/comment-form/CommentForm";
import CommentList from "@/app/partials/comment-form/CommentList";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

export default function CommentSection() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 2xl:px-32 bg-primary-500/10 dark:bg-dark2-600">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Judul */}
        <h2
          className={`
                    ${sacramento.className}
                    text-[calc(2.5rem+1.5vw)] 
                    font-bold 2xl:text-8xl
                    bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8860b]
                    bg-clip-text text-transparent 2xl:pb-9
                  `}
        >
          Komentar<span className="text-dark2-600/20 dark:text-white2-500"> Doa</span>
        </h2>
        <p className="text-sm md:text-md mb-6 text-center text-dark2-600/60 dark:text-white2-500/50 max-w-[80%] lg:max-w-[70%] text-[calc(.7rem+.7vw)]">Tinggalkan ucapan, kesan, atau doa untuk kami.</p>
      </div>
      <CommentForm />
      <h1 key="title" className="text-md font-medium pt-6 text-[#c7a47a] tracking-wide uppercase text-center">
        Komentar
      </h1>
      <CommentList />
    </section>
  );
}
