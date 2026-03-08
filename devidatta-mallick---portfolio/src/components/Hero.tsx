import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Future Tech Innovator.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase text-brand-blue mb-6">
            Hi, I'm Devidatta Mallick
          </span>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-tight mb-8">
            IMCA Student & <br /><span className="text-gradient">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Specializing in Software Development & Database Management at Utkal University. 
            I am passionate about learning new technologies and applying them to real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-dark font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
              Contact Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/devidatta-mallick" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-all">
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
