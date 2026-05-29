import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function Login({ onLoginSuccess, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isRegisterMode 
        ? 'http://localhost:5000/api/auth/register' 
        : 'http://localhost:5000/api/auth/login';

      const response = await axios.post(endpoint, {
        email,
        password
      });

      if (response.data.success) {
        localStorage.setItem('zeaa_token', response.data.token);
        localStorage.setItem('zeaa_email', response.data.user.email);
        onLoginSuccess();
      }
    } catch (err) {
      console.error('Auth error:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Gagal terhubung ke server. Pastikan backend aktif.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4 py-8 overflow-y-auto">
      {/* Click outside to close */}
      <div className="absolute inset-0 z-0" onClick={onClose}></div>

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 animate-float-slow z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float z-0 pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md z-10 relative"
      >
        <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl relative border border-white/40">
          {/* Close Button */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-black/5 transition-all text-xl cursor-pointer"
              title="Tutup"
            >
              ✕
            </button>
          )}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-lg mb-4 text-2xl font-bold"
            >
              {isRegisterMode ? "RG" : "ZG"}
            </motion.div>
            <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-600">
              {isRegisterMode ? "Daftar Akun Baru" : "Welcome Back"}
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              {isRegisterMode ? "Buat akun untuk mengirim pesan" : "Masuk untuk menjelajahi portofolio"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Alamat Email</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isRegisterMode ? "kamu@domain.com" : "admin@example.com"}
                  required
                  className="w-full px-4 py-3 pl-11 rounded-2xl bg-white/60 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 backdrop-blur-md transition-all text-gray-800 font-medium"
                />
                <span className="absolute left-4 top-3.5 text-gray-400">
                  📧
                </span>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Kata Sandi</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 pl-11 rounded-2xl bg-white/60 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 backdrop-blur-md transition-all text-gray-800 font-medium"
                />
                <span className="absolute left-4 top-3.5 text-gray-400">
                  🔒
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-700 rounded-2xl p-4 text-sm font-semibold flex items-center gap-2"
                >
                  <span>⚠️</span>
                  <p>{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200/50 hover:shadow-indigo-300/50 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{isRegisterMode ? "Mendaftarkan..." : "Menghubungkan..."}</span>
                </>
              ) : (
                <span>{isRegisterMode ? "Daftar Akun Baru" : "Masuk ke Web"}</span>
              )}
            </motion.button>
          </form>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => {
                setIsRegisterMode(!isRegisterMode);
                setError('');
              }}
              className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-semibold hover:underline bg-transparent border-none cursor-pointer"
            >
              {isRegisterMode 
                ? "Sudah punya akun? Masuk di sini" 
                : "Belum punya akun? Daftar di sini"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
