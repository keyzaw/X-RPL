import React from 'react';
import { motion } from 'framer-motion';
import gueh from "../assets/gueh.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 pt-20 relative">

      {/* Decorative Blob */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10"
      >
        <h2 className="text-xl text-purple-600 mb-2 font-semibold tracking-wider uppercase">Hello, I am</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
          KEYZA ALBIAN <br /> SETYO PUTRI
        </h1>
        <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
          Menciptakan pengalaman web digital yang elegan, responsif, dan interaktif seolah tanpa gravitasi.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-300/50 transition-all cursor-pointer"
        >
          Hubungi Saya
        </motion.a>
      </motion.div>

      {/* Floating Profile Image */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0 z-10 relative">
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white glow-effect animate-float overflow-hidden shadow-2xl"
        >
          <img
            src={gueh}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Element/Badge */}
        <motion.div
          className="absolute -bottom-4 -right-4 md:right-10 glass px-6 py-3 rounded-2xl flex items-center gap-2 animate-float-slow shadow-xl"
          style={{ animationDelay: '1s' }}
        >
          <span className="text-2xl">🚀</span>
          <span className="font-semibold text-gray-700">My  Gueh</span>
        </motion.div>
      </div>
    </section>
  );
}
