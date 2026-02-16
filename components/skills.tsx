'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Cpu, Globe, Database, PenTool, Terminal, Layers } from 'lucide-react';
import { MouseEvent } from 'react';
import AnimatedBackground from './animated-background';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend',
      icon: <Terminal size={24} />,
      skills: ['Node.js', 'Express.js', 'PHP'],
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'Database Design'],
    },
    {
      title: 'Languages',
      icon: <CodeIcon size={24} />,
      skills: ['Java', 'C', 'JavaScript', 'PHP'],
    },
    {
      title: 'Tools',
      icon: <PenTool size={24} />,
      skills: ['Git/GitHub', 'VS Code', 'Postman', 'Vercel'],
    },
    {
      title: 'Core',
      icon: <Cpu size={24} />,
      skills: ['Algorithms', 'Data Structures', 'Debugging'],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Technical Proficiency</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            My <span className="text-orange-500">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A diverse toolkit of modern technologies and programming languages that I leverage to build scalable, high-performance solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SpotlightCard key={index} delay={index * 0.1}>
              <div className="p-8 relative z-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-400 group-hover:text-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

function SpotlightCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative border border-white/10 bg-white/5 overflow-hidden rounded-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
}

// Simple icon wrapper if needed, or imported from lucide
function CodeIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default Skills;
