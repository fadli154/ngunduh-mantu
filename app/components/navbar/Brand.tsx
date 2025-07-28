import { Grey_Qo } from "next/font/google";
import clsx from "clsx";

const greGrey_Qo = Grey_Qo({ subsets: ["latin"], weight: "400" });

export default function Brand() {
  return <div className={clsx(greGrey_Qo.className, "text-3xl 2xl:text-5xl font-bold tracking-widest text-text-500")}>Agung & Wenny</div>;
}
