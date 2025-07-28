"use client";

import { motion } from "framer-motion";

export default function RSVPSection() {
  return (
    <section id="rsvp" className="py-20 px-4 sm:px-8 lg:px-24 bg-[url('/img/floral-pattern.jpg')] text-foreground bg-cover bg-center bg-no-repeat dark:opacity-5">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4 dark:text-white2-500">
          RSVP
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="mb-8 text-muted-foreground dark:text-white2-500/80">
          Kami sangat berbahagia apabila Bapak/Ibu/Saudara/i berkenan untuk memberikan ucapan dan doa restu.
        </motion.p>
      </div>
    </section>
  );
}
