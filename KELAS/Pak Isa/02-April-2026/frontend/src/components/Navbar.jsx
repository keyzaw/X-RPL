import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ isLoggedIn, userEmail, onLogout, onLoginClick, onInboxClick }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 glass top-0 py-4 px-8 flex justify-between items-center shadow-sm"
    >
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
        ECA
      </div>
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
        <li><a href="#home" className="hover:text-purple-500 transition-colors cursor-pointer">Home</a></li>
        <li><a href="#about" className="hover:text-purple-500 transition-colors cursor-pointer">About</a></li>
        <li><a href="#skills" className="hover:text-purple-500 transition-colors cursor-pointer">Skills</a></li>
        <li><a href="#portfolio" className="hover:text-purple-500 transition-colors cursor-pointer">Portfolio</a></li>
        {userEmail !== 'admin@gmail.com' && (
          <li><a href="#contact" className="hover:text-purple-500 transition-colors cursor-pointer">Contact</a></li>
        )}
        {isLoggedIn ? (
          <li className="flex items-center gap-3">
            {userEmail === 'admin@gmail.com' && (
              <button
                onClick={onInboxClick}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold rounded-xl transition-all cursor-pointer text-sm shadow-md flex items-center gap-1.5 hover:shadow-indigo-300/40"
              >
                <span>✉️</span> Pesan Masuk
              </button>
            )}
            <span className="text-xs font-semibold text-gray-500 bg-black/5 px-3 py-1.5 rounded-xl border border-white/30 backdrop-blur-sm">
              👤 {userEmail}
            </span>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 text-red-600 rounded-xl transition-all cursor-pointer font-bold text-sm"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={onLoginClick}
              className="px-4 py-2 bg-purple-500/10 hover:bg-purple-500 hover:text-white border border-purple-500/25 text-purple-600 rounded-xl transition-all cursor-pointer font-bold text-sm shadow-sm"
            >
              Login
            </button>
          </li>
        )}
      </ul>
      <div className="md:hidden flex gap-4 items-center">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            {userEmail === 'admin@gmail.com' && (
              <button
                onClick={onInboxClick}
                className="px-2.5 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl transition-all cursor-pointer text-xs flex items-center justify-center shadow-md"
                title="Pesan Masuk"
              >
                <span>✉️</span>
              </button>
            )}
            <span className="text-[10px] font-semibold text-gray-500 bg-black/5 px-2 py-1.5 rounded-lg border border-white/30 backdrop-blur-sm max-w-[100px] truncate">
              {userEmail}
            </span>
            <button
              onClick={onLogout}
              className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 text-red-600 rounded-xl transition-all cursor-pointer font-bold text-xs"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={onLoginClick}
            className="px-3 py-1.5 bg-purple-500/10 hover:bg-purple-500 hover:text-white border border-purple-500/25 text-purple-600 rounded-xl transition-all cursor-pointer font-bold text-xs"
          >
            Login
          </button>
        )}
        <div className="text-2xl cursor-pointer text-gray-700">
          ☰
        </div>
      </div>
    </motion.nav>
  );
}
