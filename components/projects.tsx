'use client';

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import AnimatedBackground from './animated-background';

const Projects = ({ isLoaded = true }: { isLoaded?: boolean }) => {
  const projects = [
    {
      title: 'Social Media Platform',
      description:
        'A feature-rich social media application built with the MERN stack. Includes real-time messaging, live streaming, in-app games, interest-based pages, and anonymous confession sections.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'WebRTC'],
      period: 'Jan 2025 - Present',
      highlights: [
        'Live Streaming (WebSocket)',
        'Real-time Chat',
        'In-app Games',
        'Interest Pages',
        'Confession Section',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Attendance Management System',
      description:
        'A role-based system designed to simplify academic workflows. Features dynamic routine creation, subject-wise attendance tracking, and real-time notifications.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      period: 'Apr 2024 - May 2024',
      highlights: [
        'Role-based access control',
        'Dynamic routine management',
        'Real-time attendance tracking',
        'Notification system',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Inventory & Billing Management System',
      description:
        'A comprehensive billing system that automates product entry through barcode scanning integration with Barcode to PC server.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Barcode Scanner API'],
      period: 'Sep 2023 - Oct 2023',
      highlights: [
        'Barcode integration',
        'Automated product entry',
        'Bill generation',
        'Inventory tracking',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Gaushala Website',
      description:
        'A desktop-focused website for a USA-based Gaushala featuring Instagram feed embedding, secure payment gateways, and JotForm-based enquiry system.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Stripe API'],
      period: 'Sep 2024',
      highlights: [
        'Instagram integration',
        'Secure Payments',
        'Dynamic form management',
        'Pure Vanilla JS',
      ],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
        >
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-orange-500 uppercase bg-orange-500/10 rounded-full">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right hidden md:block">
            Exploring innovative solutions through code, one project at a time.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView={isLoaded ? "show" : "hidden"}
          viewport={{ once: true, amount: 0.2, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <SpotlightCard key={index}>
              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-white group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex gap-2"
                  >
                    <motion.a variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }} href={project.github} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"><Github size={20} /></motion.a>
                    <motion.a variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }} href={project.live} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"><ExternalLink size={20} /></motion.a>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                <p className="text-xs font-medium text-gray-500 mb-4">{project.period}</p>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack - Staggered */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4
                      }
                    }
                  }}
                  className="flex flex-wrap gap-2 pt-6 border-t border-white/5"
                >
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <motion.span
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 5 },
                        show: { opacity: 1, y: 0 }
                      }}
                      className="text-xs font-medium text-gray-300 bg-black/30 px-3 py-1 rounded-full border border-white/5"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span
                      variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                      }}
                      className="text-xs font-medium text-gray-500 px-2 py-1"
                    >
                      + {project.technologies.length - 3}
                    </motion.span>
                  )}
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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 70,
            damping: 12,
            mass: 1
          }
        }
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        borderColor: "rgba(249, 115, 22, 0.4)",
        boxShadow: "0 20px 40px -15px rgba(249, 115, 22, 0.15)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group relative border border-white/10 bg-white/5 overflow-hidden rounded-xl h-full cursor-pointer transition-colors hover:bg-white/10"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
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

export default Projects;
