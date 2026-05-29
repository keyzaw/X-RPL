import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function InboxModal({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('zeaa_token');
      const response = await axios.get('http://localhost:5000/api/contact', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        setMessages(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Gagal memuat pesan. Pastikan backend aktif.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus pesan ini secara permanen?')) {
      return;
    }

    try {
      const token = localStorage.getItem('zeaa_token');
      const response = await axios.delete(`http://localhost:5000/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        // Hapus dari state lokal dengan efek transisi
        setMessages(messages.filter((msg) => msg.id !== id));
      }
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Gagal menghapus pesan.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-md px-4 py-8 overflow-y-auto">
      {/* Click outside closer */}
      <div className="absolute inset-0 z-0 cursor-pointer" onClick={onClose}></div>

      {/* Decorative floating blobs */}
      <div className="absolute top-[5%] right-[10%] w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[5%] left-[10%] w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-3xl p-6 md:p-8 shadow-2xl relative border border-white/40 z-10 w-full max-w-4xl max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 flex items-center gap-3">
              <span>✉️</span> Pesan Masuk (Inbox)
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Total: <span className="text-purple-600 font-bold">{messages.length}</span> pesan diterima
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-black/5 transition-all text-2xl cursor-pointer"
            title="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <svg className="animate-spin h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-gray-500 font-bold">Memuat semua pesan...</p>
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/20 text-red-700 rounded-2xl p-4 text-center text-sm font-semibold">
              ⚠️ {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="text-6xl">📭</div>
              <h3 className="text-xl font-bold text-gray-700">Inbox Kosong</h3>
              <p className="text-gray-500 max-w-sm">Belum ada pesan yang dikirim oleh pengunjung portfolio Anda.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/45 border border-white/30 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md hover:bg-white/55 transition-all flex flex-col md:flex-row justify-between gap-4 items-start"
                  >
                    <div className="flex-grow space-y-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg font-bold text-gray-800">{msg.name}</span>
                        <a
                          href={`mailto:${msg.email}`}
                          className="text-sm font-medium text-purple-600 hover:underline"
                        >
                          {msg.email}
                        </a>
                        <span className="text-[11px] font-semibold text-gray-400 bg-black/5 px-2.5 py-0.5 rounded-full">
                          {new Date(msg.created_at).toLocaleString('id-ID', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                          })}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                        {msg.message}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="self-end md:self-center p-3 text-red-500 hover:text-white hover:bg-red-500 bg-red-500/10 border border-red-500/20 rounded-xl transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5 font-bold text-xs"
                      title="Hapus Pesan"
                    >
                      🗑️ <span>Hapus</span>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
