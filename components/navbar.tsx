'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="pointer-events-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2 md:px-6 md:py-3 shadow-2xl flex items-center gap-1 md:gap-2 max-w-[95vw] overflow-x-auto no-scrollbar"
      >
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-medium transition-all duration-300 ${activeSection === item.id
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
          >
            {item.name}
          </button>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
