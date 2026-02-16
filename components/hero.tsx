'use client';

import Image from 'next/image';
import { Linkedin, Code2, Globe, Github, Mail, Cpu, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const [displayName, setDisplayName] = useState('');
  const fullName = "Sudipta Chatterjee";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullName.length) {
        setDisplayName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Scanline Effect */}
      <div className="scanline"></div>
      {/* Tech Grid Background (Mobile Specific Accent) */}
      <div className="absolute inset-0 tech-grid opacity-[0.15] md:opacity-[0.05] pointer-events-none"></div>

      {/* Top Header Layer */}
      <div className="absolute top-0 w-full pt-8 px-4 pb-3 md:p-8 flex justify-between items-center gap-2 z-50">
        <div className="flex-1 min-w-0">
          <div className="text-[13px] md:text-xl font-mono font-bold tracking-wider text-gray-300 truncate py-1 px-2 border-l-2 border-orange-500/50 bg-orange-500/5">
            <span className="text-orange-500 font-bold">{"> "}</span>
            {displayName}
            <span className="text-orange-500 typewriter-cursor ml-1"></span>
          </div>
        </div>
        <a
          href="/resume.pdf"
          download
          className="px-3 md:px-6 py-2 bg-transparent text-orange-500 font-mono font-bold border border-orange-500/50 rounded-md text-[10px] md:text-sm hover:bg-orange-500/10 transition-all whitespace-nowrap flex-shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
        >
          [ DOWNLOAD_CV ]
        </a>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">

        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* 3D Character Background */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[-10%] md:top-1/2 md:right-[65%] md:-translate-x-1/2 md:-translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] opacity-20 blur-sm"
          >
            <Image
              src="/3d char.png"
              alt="Background Decoration"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Second 3D Character */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[60%] left-[-10%] md:top-[10%] md:left-[65%] w-[200px] h-[200px] md:w-[500px] md:h-[500px] opacity-20 blur-sm"
          >
            <Image
              src="/3d char.png"
              alt="Background Decoration"
              fill
              className="object-contain scale-x-[-1]" // Flip horizontally for variety
            />
          </motion.div>

          <h1 className="text-[20vw] md:text-[15vw] leading-none font-black text-white/5 select-none tracking-tighter mt-[-10vh] md:mt-0">
            DEVELOPER
          </h1>
          {/* Outline version overlay for effect */}
          <h1 className="absolute text-[20vw] md:text-[15vw] leading-none font-black text-transparent select-none tracking-tighter mt-[-10vh] md:mt-0"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
            DEVELOPER
          </h1>
        </div>

        {/* Central Image & Floating Elements */}
        <div className="relative z-10 w-full max-w-4xl mx-auto h-[80vh] md:h-[70vh] flex items-center md:items-end justify-center">

          {/* Main Character Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[90vw] h-[60vh] max-w-[450px] md:w-[450px] md:h-[600px] -mt-[5vh] md:mt-0"
          >
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <Image
              src="/hero-image.png?v=2"
              alt="Sudipta Chatterjee"
              fill
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(249,115,22,0.3)]"
              priority
              unoptimized
            />
          </motion.div>

          {/* Floating Code Fragments */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-[10%] top-[20%] text-orange-500/20 font-mono text-4xl pointer-events-none select-none hidden md:block"
          >
            {`{ }`}
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute right-[15%] top-[15%] text-orange-500/10 font-mono text-6xl pointer-events-none select-none hidden md:block"
          >
            {`< />`}
          </motion.div>

          {/* Mobile Optimized Badges - Only visible on small screens */}
          <div className="md:hidden absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: [0, -5, 0] // Floating loop
              }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
                x: { duration: 1, delay: 0.2, ease: "easeOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
              }}
              className="absolute left-[8%] top-[15%] backdrop-blur-md bg-black/40 border border-orange-500/30 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
            >
              <Terminal size={12} className="text-orange-500 line-shadow" />
              <span className="text-[9px] font-mono font-bold text-orange-100 whitespace-nowrap">MODULE: MERN</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: [0, 5, 0] // Floating loop
              }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 1, delay: 0.4, ease: "easeOut" },
                x: { duration: 1, delay: 0.4, ease: "easeOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
              }}
              className="absolute right-[8%] top-[25%] backdrop-blur-md bg-black/40 border border-orange-500/30 px-3 py-1.5 rounded-md flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
            >
              <Cpu size={12} className="text-orange-500" />
              <span className="text-[9px] font-mono font-bold text-orange-100 whitespace-nowrap">STATUS: ACTIVE</span>
            </motion.div>
          </div>

          {/* Floating Card: Stack/Focus - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="hidden md:flex absolute left-[5%] top-[60%] backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-2xl items-center gap-4 hover:scale-105 transition-transform cursor-default"
          >
            <div className="p-3 bg-white/10 rounded-full">
              <Code2 size={24} className="text-orange-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Evaluation</p>
              <p className="text-xs text-gray-400">MERN Stack Developer</p>
            </div>
            {/* Connector Line */}
            <div className="hidden md:block absolute right-[-40px] top-1/2 w-10 h-[1px] bg-white/20"></div>
            <div className="hidden md:block absolute right-[-44px] top-1/2 w-2 h-2 rounded-full bg-white"></div>
          </motion.div>

          {/* Floating Card: Status - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="hidden md:block absolute right-[5%] top-[50%] backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-2xl max-w-xs hover:bg-white/15 transition-colors cursor-default"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Freelancer</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Available for projects. Building scalable web applications.
            </p>
            {/* Connector Line */}
            <div className="hidden md:block absolute left-[-40px] top-1/2 w-10 h-[1px] bg-white/20"></div>
            <div className="hidden md:block absolute left-[-44px] top-1/2 w-2 h-2 rounded-full bg-white"></div>
          </motion.div>

        </div>

        {/* Social Icons - Bottom Left */}
        <div className="absolute bottom-24 md:bottom-10 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 flex gap-4 z-20">
          {[
            { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sudipta-chatterjee-a51590230/' },
            { icon: <Github size={20} />, href: 'https://github.com/SudiptaaChatterjee' },
            { icon: <Mail size={20} />, href: 'mailto:sudiptachatterjee0905@gmail.com' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (index * 0.1) }}
              className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/20 hover:text-orange-500 hover:scale-110 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
