import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Login from './components/Login';
import InboxModal from './components/InboxModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showInboxModal, setShowInboxModal] = useState(false);
  const [onLoginSuccessCallback, setOnLoginSuccessCallback] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('zeaa_token');
    const email = localStorage.getItem('zeaa_email');
    if (token) {
      setIsLoggedIn(true);
      setUserEmail(email || '');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('zeaa_token');
    localStorage.removeItem('zeaa_email');
    setIsLoggedIn(false);
    setUserEmail('');
    setShowInboxModal(false);
  };

  const handleRequestLogin = (callback) => {
    setOnLoginSuccessCallback(() => callback);
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setUserEmail(localStorage.getItem('zeaa_email') || '');
    setShowLoginModal(false);
    if (typeof onLoginSuccessCallback === 'function') {
      onLoginSuccessCallback();
    }
    setOnLoginSuccessCallback(null);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    setOnLoginSuccessCallback(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-800 font-sans bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50">
      {/* Background Particles/Blobs overall */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-float-slow z-[-1]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float z-[-1]" style={{ animationDelay: '1s' }}></div>

      <Navbar
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
        onLoginClick={() => handleRequestLogin(null)}
        onInboxClick={() => setShowInboxModal(true)}
      />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {userEmail !== 'admin@gmail.com' && (
        <Contact isLoggedIn={isLoggedIn} onRequestLogin={handleRequestLogin} />
      )}

      <footer className="text-center py-6 text-gray-500 font-medium border-t border-white/20 mt-10">
        <p>&copy; {new Date().getFullYear()} My Portfolio. Created with React & Anti-Gravity vibes.</p>
      </footer>

      {/* Login & Inbox Modal Overlays */}
      <AnimatePresence>
        {showLoginModal && (
          <Login onLoginSuccess={handleLoginSuccess} onClose={handleCloseLoginModal} />
        )}
        {showInboxModal && (
          <InboxModal onClose={() => setShowInboxModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
