import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import AnimatedBackground from './animated-background';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer (Pre-Placement)',
      company: 'Swami Vivekananda University (Kolkata)',
      period: 'Dec 2025 - Present',
      description:
        'Selected for a merit-based pre-placement role. Learnt React Native and actively contributing to frontend development and API integrations. Successfully contributed to 3 live projects in the past 2 months, delivering key features.',
      highlights: [
        'React Native & Frontend',
        'API Integration',
        '3 Live Projects Delivered',
      ],
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Sep 2024 - Sep 2024',
      description:
        'Developed a comprehensive desktop-focused website for a USA-based Gaushala. Integrated Instagram feeds, secure payment gateways, and JotForm-based enquiry/donation systems.',
      highlights: [
        'Full-stack development',
        'UI/UX Design',
        'Payment integration',
        'Form management',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Meghnad Saha Institute of Technology (MAKAUT)',
      period: '2024 - Present',
      focus: 'Batch Topper | 8.8 CGPA (till date)',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Swami Vivekananda Institute of Modern Science (MAKAUT)',
      period: '2021 - 2024',
      focus: '8.64 CGPA | Core Computer Science Fundamentals',
    },
  ];

  const certifications = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM (Coursera)',
      date: 'Issued Dec 2025',
      description: 'Authorized by IBM and offered through Coursera. Covers Python fundamentals, Data Science, and AI development.',
    },
    {
      title: 'Web Development Certification',
      issuer: 'Euphoria GenX',
      date: 'Issued Nov 2023',
      description: 'Comprehensive training in PHP and MySQL web development.',
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'Issued 2023',
      description: 'Demonstrated ability to solve algorithmic problems.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-orange-500">Education</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional journey, educational background, and certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] top-6 w-5 h-5 rounded-full border-4 border-[#1a1a1a] bg-white/20 group-hover:bg-orange-500 transition-colors"></span>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/20 transition-all duration-300">
                    <div className="mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{exp.title}</h4>
                      <p className="text-gray-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full w-fit mb-4">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] top-6 w-5 h-5 rounded-full border-4 border-[#1a1a1a] bg-white/20 group-hover:bg-blue-400 transition-colors"></span>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300">
                    <div className="mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                      <p className="text-gray-400 font-medium text-sm">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit mb-4">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                    <p className="text-gray-400 text-sm">{edu.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certificates</h3>
            </div>

            <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] top-6 w-5 h-5 rounded-full border-4 border-[#1a1a1a] bg-white/20 group-hover:bg-green-400 transition-colors"></span>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-green-500/20 transition-all duration-300">
                    <div className="mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{cert.title}</h4>
                      <p className="text-gray-400 font-medium text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit mb-4">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
