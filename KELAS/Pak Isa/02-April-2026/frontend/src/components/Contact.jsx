import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Contact({ isLoggedIn, onRequestLogin }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (dataToSend) => {
    setStatus('Mengirim...');
    try {
      const response = await axios.post('http://localhost:5000/api/contact', dataToSend);
      setStatus('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Terjadi kesalahan API:", error);
      let errorMsg = 'Gagal mengirim pesan. Pastikan backend aktif.';
      if (error.response) {
        errorMsg = `Error dari server: ${error.response.data.message || error.response.status}`;
      } else if (error.request) {
        errorMsg = 'Tidak ada respon dari server. Pastikan server Node.js aktif di port 5000.';
      } else {
        errorMsg = `Error: ${error.message}`;
      }
      setStatus(errorMsg);
      alert(errorMsg); // Tambahkan alert agar user langsung melihat masalahnya
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      // Simpan data pesan saat ini dan teruskan ke callback login sukses
      onRequestLogin(() => {
        sendMessage(formData);
      });
      return;
    }

    // Jika sudah login, kirim langsung
    await sendMessage(formData);
  };

  return (
    <section id="contact" className="py-20 px-8 md:px-24">
      <div className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        {/* Dekorasi floating orb di form */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative z-10">Hubungi Saya</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm transition-all"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm transition-all"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Pesan</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm transition-all"
              placeholder="Tulis pesan Anda..."
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-400/50 transition-all mt-2"
          >
            Kirim Pesan
          </motion.button>

          {status && (
            <p className="text-center mt-4 font-medium text-purple-700">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
