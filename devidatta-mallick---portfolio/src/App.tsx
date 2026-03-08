/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-brand-dark">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle separator glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <Features />
          
          <ParallaxSection />
          
          {/* CTA Section */}
          <section className="py-24 px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto rounded-[3rem] glass p-12 md:p-20 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                  Let's Build the <span className="text-gradient">Future Together</span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a href="mailto:mallickdev960@gmail.com" className="inline-block px-10 py-5 rounded-full bg-white text-brand-dark font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95">
                  Get In Touch
                </a>
              </div>
              
              {/* Decorative Glows */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl" />
            </motion.div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
