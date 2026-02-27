'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

import Preloader from '@/components/preloader';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Preloader onComplete={() => setLoading(false)} />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} isLoaded={!loading} />
      <About isLoaded={!loading} />
      <Experience isLoaded={!loading} />
      <Projects isLoaded={!loading} />
      <Skills isLoaded={!loading} />
      <Contact isLoaded={!loading} />
      <Footer />
    </main>
  );
}
