"use client";

import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "@/firebase/config";
import { FaUserEdit, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function CommentForm() {
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await push(ref(db, "komentar"), {
        nama: form.nama,
        pesan: form.pesan,
        waktu: Date.now(),
        userId: localStorage.getItem("userId"),
      });
      setSent(true);
      setForm({ nama: "", pesan: "" });
      toast.success("Komentar berhasil dikirim!");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-dark2-600/80 p-6 md:p-8 rounded-2xl shadow-md border-t-2 border-[#d4af37] space-y-6 max-w-xl w-full mx-auto dark:shadow-text-500/20"
    >
      <div className="relative">
        <label className="text-sm font-semibold text-gray-700 dark:text-white mb-1 block">Nama</label>
        <FaUserEdit className="absolute left-3 top-[46.5px] -translate-y-1/2 text-gray-400" />
        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          maxLength={45}
          placeholder="Contoh: Fadli"
          required
          className="pl-10 pr-4 py-3 rounded-lg border w-full dark:border-gray-600 text-sm bg-white/90 dark:bg-dark2-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-gold focus:outline-none"
        />
      </div>

      <div className="relative">
        <label className="text-sm font-semibold text-gray-700 dark:text-white mb-1 block">Pesan / Doa</label>
        <FaCommentDots className="absolute left-3 top-[40px] text-gray-400" />
        <textarea
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          rows={4}
          maxLength={200}
          placeholder="Sampaikan ucapan atau doa terbaik..."
          required
          className="pl-10 pr-4 py-3 rounded-lg border w-full dark:border-gray-600 text-sm bg-white/90 dark:bg-dark2-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-gold focus:outline-none resize-none"
        />
      </div>

      <div className="text-center">
        <button type="submit" disabled={loading} className="bg-gradient-to-r from-[#d4af37] to-[#b8870b] hover:brightness-110 text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg disabled:opacity-70">
          {loading ? "Mengirim..." : sent ? "Terkirim ✓" : "Kirim Komentar"}
        </button>
      </div>
    </motion.form>
  );
}
