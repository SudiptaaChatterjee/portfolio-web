'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Cpu, Globe, Database, PenTool, Terminal, Layers } from 'lucide-react';
import { MouseEvent } from 'react';
import AnimatedBackground from './animated-background';

const Skills = ({ isLoaded = true }: { isLoaded?: boolean }) => {
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
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
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

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          whileInView={isLoaded ? "show" : "hidden"}
          viewport={{ once: true, amount: 0.2, margin: "-10% 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SpotlightCard key={index}>
              <div className="p-8 relative z-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.2
                      }
                    }
                  }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        show: { opacity: 1, scale: 1 }
                      }}
                      className="px-3 py-1 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-400 group-hover:text-gray-200 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
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
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 15 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 90,
            damping: 12
          }
        }
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
        borderColor: "rgba(249, 115, 22, 0.5)",
        backgroundColor: "rgba(255, 255, 255, 0.08)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group relative border border-white/10 bg-white/5 overflow-hidden rounded-2xl h-full cursor-pointer"
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
