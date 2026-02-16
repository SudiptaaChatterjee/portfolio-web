'use client';

import Image from 'next/image';
import { Linkedin, Code2, Globe, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <section id="home" className="relative h-screen w-full bg-[#1a1a1a] overflow-hidden flex flex-col items-center justify-center text-white">

      {/* Top Header Layer */}
      <div className="absolute top-0 w-full p-8 flex justify-between items-center z-50">
        <div className="text-xl font-bold tracking-wider text-gray-300 font-zenitha">
          <span className="text-orange-500">{`{...}`}</span> Sudipta Chatterjee<span className="text-orange-500">.</span>
        </div>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors"
        >
          Download Resume
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

          <h1 className="text-[16vw] md:text-[15vw] leading-none font-black text-white/5 select-none tracking-tighter mt-[-40px] md:mt-0 font-zenitha">
            DEVELOPER
          </h1>
          {/* Outline version overlay for effect */}
          <h1 className="absolute text-[16vw] md:text-[15vw] leading-none font-black text-transparent select-none tracking-tighter mt-[-40px] md:mt-0 font-zenitha"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
            DEVELOPER
          </h1>
        </div>

        {/* Central Image & Floating Elements */}
        <div className="relative z-10 w-full max-w-4xl mx-auto h-[60vh] md:h-[70vh] flex items-end justify-center">

          {/* Main Character Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px]"
          >
            {/* Added a subtle glow/drop shadow to make it pop without B&W filter */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[80px] -z-10"></div>
            <Image
              src="/hero-image.png?v=2"
              alt="Sudipta Chatterjee"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
              unoptimized
            />
          </motion.div>

          {/* Floating Card: Stack/Focus - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
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
            transition={{ delay: 0.6, duration: 0.6 }}
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
