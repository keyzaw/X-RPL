import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaHandshake, FaLightbulb, FaBrain, FaLaptopCode, FaPalette, FaLaptop, FaLanguage } from 'react-icons/fa';

const hardSkills = [
  { name: "Programmer", icon: <FaLaptopCode />, color: "text-indigo-500", progress: "90%" },
  { name: "Desain Grafis", icon: <FaPalette />, color: "text-pink-500", progress: "85%" },
  { name: "Penggunaan Software", icon: <FaLaptop />, color: "text-cyan-500", progress: "95%" },
  { name: "Kemampuan Berbahasa Asing", icon: <FaLanguage />, color: "text-emerald-500", progress: "80%" },
];

const softSkills = [
  { name: "Komunikasi", icon: <FaComments />, color: "text-amber-500", progress: "90%" },
  { name: "Kerja Sama Tim", icon: <FaHandshake />, color: "text-emerald-500", progress: "95%" },
  { name: "Solusi Masalah", icon: <FaLightbulb />, color: "text-yellow-400", progress: "85%" },
  { name: "Berpikir Kritis", icon: <FaBrain />, color: "text-purple-500", progress: "85%" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('hard');

  const currentSkills = activeTab === 'hard' ? hardSkills : softSkills;

  return (
    <section id="skills" className="py-20 px-8 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Keahlian</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Kombinasi keahlian teknis (hard skills) dan kemampuan interpersonal (soft skills) yang saya miliki untuk memberikan hasil terbaik.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/40 backdrop-blur-md p-1.5 rounded-full flex gap-2 relative border border-white/20 shadow-md">
          <button
            onClick={() => setActiveTab('hard')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 relative z-10 cursor-pointer ${activeTab === 'hard' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {activeTab === 'hard' && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Hard Skills
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 relative z-10 cursor-pointer ${activeTab === 'soft' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {activeTab === 'soft' && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Soft Skills
          </button>
        </div>
      </div>

      {/* Skill Cards Grid */}
      <motion.div
        layout
        className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 min-h-[160px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap justify-center gap-8 w-full"
          >
            {currentSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.08, translateY: -8 }}
                className="glass w-32 h-32 md:w-40 md:h-40 rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-2xl transition-all relative overflow-hidden group border border-white/30"
              >
                <div className={`text-4xl md:text-5xl mb-2 ${skill.color} drop-shadow-sm`}>
                  {skill.icon}
                </div>
                <p className="font-semibold text-gray-700 text-center text-sm md:text-base px-2 leading-tight">
                  {skill.name}
                </p>

                {/* Progress Hover Overlay */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center px-4 w-full">
                    <span className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                      {skill.progress}
                    </span>
                    <div className="w-full bg-gray-200/80 rounded-full h-1.5 mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.progress }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1.5 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
