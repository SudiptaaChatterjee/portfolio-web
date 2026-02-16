'use client';

import { Mail, Linkedin, Github, MessageSquare, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import AnimatedBackground from './animated-background';
// @ts-ignore
import { sendEmail } from '@/app/actions/send-email';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      toast.success('Message sent successfully!');
      formRef.current?.reset();
    } else {
      toast.error(result.error || 'Failed to send message.');
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sudipta-chatterjee-a51590230/',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/SudiptaaChatterjee',
      label: 'Check my Repos',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sudiptachatterjee0905@gmail.com',
      label: 'Send me an email',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
          {/* Left Column: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Let's Work <br />
                <span className="text-orange-500">Together.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-lg">
                Have a project in mind or just want to say hello? I'm always open to discussing new ideas and opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="p-4 bg-white/5 rounded-full text-white group-hover:bg-orange-500 transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{link.name}</h4>
                      <p className="text-gray-400">{link.label}</p>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-orange-500" />
              Send a Message
            </h3>

            <form ref={formRef} action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
