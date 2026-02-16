import { motion } from 'framer-motion';
import { Check, Code } from 'lucide-react';
import AnimatedBackground from './animated-background';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
      <AnimatedBackground />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-6"
              >
                <Code size={14} />
                <span>About Me</span>
              </motion.div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Driving Innovation Through <span className="text-orange-500">Code</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                A passionate developer with a mission to build elegant solutions that solve real-world problems.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Curiosity and problem-solving have always drawn me toward programming. I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. My expertise spans the MERN stack (MongoDB, Express, React, Node.js), PHP, Python, Java, and C.
              </p>
              <p>
                Currently, I'm pursuing my MCA degree at Meghnad Saha Institute of Technology (MAKAUT) in Kolkata, where I am honored to be the Batch Topper, while working as a Software Developer. I bring practical experience from freelance projects and have a proven track record of building scalable, user-centric web applications.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Full-Stack Development",
                "Database Design",
                "API Integration",
                "Problem Solving"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-orange-500/10 text-orange-500">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10"></div>

              <h3 className="text-2xl font-bold text-white mb-6">Key Strengths</h3>
              <div className="grid gap-6">
                <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-orange-500/30">
                  <h4 className="text-orange-400 font-semibold mb-2">Technical Excellence</h4>
                  <p className="text-sm text-gray-400">Combining clean code practices with thoughtful UI/UX design to create seamless experiences.</p>
                </div>
                <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-orange-500/30">
                  <h4 className="text-orange-400 font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-gray-400">Always up-to-date with modern frameworks and best practices in the ever-evolving tech landscape.</p>
                </div>
                <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-orange-500/30">
                  <h4 className="text-orange-400 font-semibold mb-2">Scalable Solutions</h4>
                  <p className="text-sm text-gray-400">Building robust applications designed to handle growth and complex requirements efficiently.</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-orange-500/20 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full opacity-20 animate-pulse delay-700"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
