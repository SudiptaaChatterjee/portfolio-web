
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-1">Sudipta Chatterjee</h3>
          <p className="text-gray-500 text-sm">Full-Stack Web Developer</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/sudipta-chatterjee-a51590230/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:sudipta@example.com" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; {currentYear} Sudipta Chatterjee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
