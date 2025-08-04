"use client";

import { useEffect, useRef, useState } from "react";
import { db } from "@/firebase/config";
import { ref, remove, update, onValue } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

type Komentar = {
  id: string;
  nama: string;
  pesan: string;
  waktu: number;
  userId: string;
};

export default function CommentList() {
  const [comments, setComments] = useState<Komentar[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");
  const [localUserId, setLocalUserId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingId = localStorage.getItem("userId");
    if (existingId) {
      setLocalUserId(existingId);
    } else {
      const newId = crypto.randomUUID();
      localStorage.setItem("userId", newId);
      setLocalUserId(newId);
    }

    const komentarRef = ref(db, "komentar");
    onValue(komentarRef, (snapshot) => {
      const data = snapshot.val();
      const result: Komentar[] = [];
      for (const key in data) {
        result.push({
          id: key,
          ...data[key],
        });
      }

      setComments(result);

      // Scroll ke bawah
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 100);
    });
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("id-ID", {
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Yakin hapus komentar ini?",
      text: "Komentar tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      backdrop: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    if (!result.isConfirmed) return;

    // Animasi keluar lalu hapus dari UI dulu
    setComments((prev) => prev.filter((c) => c.id !== id));

    setTimeout(async () => {
      await remove(ref(db, `komentar/${id}`));
      Swal.fire("Berhasil!", "Komentar berhasil dihapus.", "success");
    }, 300);
  };

  const handleEdit = async (id: string) => {
    await update(ref(db, `komentar/${id}`), {
      pesan: editedText,
    });
    setEditingId(null);
    Swal.fire("Berhasil!", "Komentar berhasil diubah.", "success");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl w-full mx-auto mt-4">
      <div ref={containerRef} className="max-h-[350px] overflow-y-auto overflow-x-hidden w-full space-y-4 pr-1">
        <AnimatePresence mode="popLayout">
          {comments.length === 0 && <p className="text-center text-sm text-gray-500 dark:text-white/60 -mr-1">Belum ada komentar.</p>}
          {comments.map((k) => (
            <motion.div
              key={k.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-dark2-600/60 p-4 rounded-xl shadow-sm dark:shadow-text-500/30 border border-text-500/30 dark:border-text-600 relative w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <p className="font-semibold text-gray-800 dark:text-white 2xl:text-lg">{k.nama}</p>
                <span className="text-xs text-gray-500/70 dark:text-white/60 2xl:text-sm">{formatDate(k.waktu)}</span>
              </div>

              {editingId === k.id ? (
                <div>
                  <textarea
                    className="w-full bg-white dark:bg-dark2-600 border border-text-300 dark:border-text-500 rounded px-4 py-6 text-sm text-text-800 dark:text-white"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button onClick={() => setEditingId(null)} className="text-xs text-gray-500 hover:text-gray-700">
                      Batal
                    </button>
                    <button onClick={() => handleEdit(k.id)} className="text-xs text-blue-600 hover:text-blue-800 font-semibold">
                      Simpan
                    </button>
                  </div>
                </div>
              ) : (
                <div className={`flex justify-between items-center ${k.userId === localUserId ? "mb-4" : ""}`}>
                  <p className="text-sm text-gray-600 dark:text-white/80 mt-1 break-all whitespace-pre-wrap">{k.pesan}</p>
                </div>
              )}

              {k.userId === localUserId && editingId !== k.id && (
                <div className="absolute bottom-4 right-4 flex gap-2 text-sm mt-4">
                  <button
                    onClick={() => {
                      setEditingId(k.id);
                      setEditedText(k.pesan);
                    }}
                    className="text-text-500/80 hover:text-text-500"
                    title="Edit"
                  >
                    <FaEdit size={19} className="cursor-pointer" />
                  </button>
                  <button onClick={() => handleDelete(k.id)} className="text-red-500 pt-[1px] hover:text-red-700" title="Hapus">
                    <FaTrashAlt size={16} className="text-red-500/70 hover:text-red-700/70 cursor-pointer" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
