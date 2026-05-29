import React from 'react';
import { motion } from 'framer-motion';
import silitImg from '../assets/silit.jpeg';
import bacaImg from '../assets/baca.jpg';
import nulisImg from '../assets/nulis.jpg';

const projects = [
  { title: "Pencak Silat", category: "Pencak Silat", image: silitImg },
  { title: "Membaca Novel", category: "Membaca Novel", image: bacaImg },
  { title: "Menulis", category: "Menulis", image: nulisImg }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-8 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Hobiku</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, translateY: -10 }}
            className="glass rounded-3xl h-64 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            {/* Content */}
            <div className="z-10 p-6">
              <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl inline-block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-purple-700 font-bold">{project.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
