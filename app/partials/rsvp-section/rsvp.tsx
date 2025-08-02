"use client";

import { motion } from "framer-motion";
import { Sacramento } from "next/font/google";
import { useState } from "react";
import emailjs from "emailjs-com";

const greSacramento = Sacramento({ subsets: ["latin"], weight: "400" });

export default function RSVPSection() {
  const [form, setForm] = useState({
    nama: "",
    hadir: "Ya",
    ucapan: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          nama: form.nama,
          hadir: form.hadir,
          ucapan: form.ucapan,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({ nama: "", hadir: "Ya", ucapan: "" });
      })
      .catch((error) => {
        console.error("Gagal kirim email:", error);
        setLoading(false);
      });
  };

  return (
    <section id="rsvp" className="transition-colors duration-300 py-20 sm:py-24 px-4 sm:px-6 md:px-10 2xl:px-32">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${greSacramento.className} text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] 2xl:text-[4rem] font-bold bg-gradient-to-r from-[#d4af37] via-[#f1e189] to-[#b8870bb7] bg-clip-text text-transparent`}
        >
          RSVP
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-md mb-6 text-center text-dark2-600/60 dark:text-white2-500/50 max-w-[80%] lg:max-w-[70%] text-[calc(.7rem+.7vw)]"
        >
          Mohon konfirmasi kehadiran serta doa restu Anda melalui form berikut.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-4 bg-white dark:bg-dark2-600/80 rounded-2xl shadow-lg dark:shadow-primary-500/20 px-4 sm:px-6 md:px-10 py-8 border-t-2 border-amber-400 sm:py-10 space-y-6 text-left transition-colors duration-300"
      >
        {/* Nama Lengkap */}
        <div>
          <label htmlFor="nama" className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Contoh: Budi Santoso"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-dark2-600 text-gray-800 dark:text-white px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold transition-all dark:placeholder:text-white/60"
          />
        </div>

        {/* Kehadiran */}
        <div>
          <p className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors">Kehadiran</p>
          <div className="flex gap-4">
            {["Ya", "Tidak"].map((val) => (
              <label key={val} className="inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-100 cursor-pointer transition-colors">
                <input type="radio" name="hadir" value={val} checked={form.hadir === val} onChange={handleChange} className="accent-gold" />
                {val === "Ya" ? "Hadir" : "Tidak Hadir"}
              </label>
            ))}
          </div>
        </div>

        {/* Ucapan */}
        <div>
          <label htmlFor="ucapan" className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors">
            Ucapan & Doa
          </label>
          <textarea
            id="ucapan"
            name="ucapan"
            rows={4}
            value={form.ucapan}
            onChange={handleChange}
            placeholder="Sampaikan ucapan atau doa terbaik Anda..."
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-dark2-600 text-gray-800 dark:text-white px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none"
          />
        </div>

        {/* Tombol Submit */}
        <div className="text-center pt-2">
          <button type="submit" disabled={loading} className="bg-gradient-to-r from-[#d4af37] to-[#b8870b] hover:brightness-110 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all shadow-lg disabled:opacity-70">
            {loading ? "Mengirim..." : sent ? "Terkirim ✓" : "Kirim Ucapan"}
          </button>
        </div>
      </motion.form>
    </section>
  );
}
