"use client";

import { useEffect, useRef, useState } from "react";
import { db } from "@/firebase/config";
import { ref, remove, update, onValue } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

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
    const confirmed = confirm("Yakin ingin menghapus komentar ini?");
    if (!confirmed) return;

    // Animasi keluar lalu hapus
    setComments((prev) => prev.filter((c) => c.id !== id));
    setTimeout(async () => {
      await remove(ref(db, `komentar/${id}`));
      toast.success("Komentar berhasil dihapus.");
    }, 300);
  };

  const handleEdit = async (id: string) => {
    await update(ref(db, `komentar/${id}`), {
      pesan: editedText,
    });
    setEditingId(null);
    toast.success("Komentar berhasil diedit.");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl w-full mx-auto mt-10">
      <div ref={containerRef} className="max-h-[300px] overflow-y-auto space-y-4 pr-1">
        <AnimatePresence mode="popLayout">
          {comments.map((k) => (
            <motion.div
              key={k.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-dark2-600/60 p-4 rounded-xl shadow border border-gray-200 dark:border-gray-600 relative"
            >
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-gray-800 dark:text-white">{k.nama}</p>
                <span className="text-xs text-gray-500 dark:text-white/60">{formatDate(k.waktu)}</span>
              </div>

              {editingId === k.id ? (
                <>
                  <textarea className="w-full bg-white dark:bg-dark2-500 border border-gray-300 dark:border-gray-500 rounded p-2 text-sm text-gray-800 dark:text-white" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                  <div className="flex justify-end gap-2 mt-2">
                    <button onClick={() => setEditingId(null)} className="text-xs text-gray-500 hover:text-gray-700">
                      Batal
                    </button>
                    <button onClick={() => handleEdit(k.id)} className="text-xs text-blue-600 hover:text-blue-800 font-semibold">
                      Simpan
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600 dark:text-white/80 mt-1">{k.pesan}</p>
              )}

              {k.userId === localUserId && editingId !== k.id && (
                <div className="absolute bottom-4 right-4 flex gap-2 text-sm">
                  <button
                    onClick={() => {
                      setEditingId(k.id);
                      setEditedText(k.pesan);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(k.id)} className="text-red-500 hover:text-red-700" title="Hapus">
                    <FaTrashAlt />
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
