import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="showcase" ref={containerRef} className="py-32 relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ opacity }}>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Academic <br />
              <span className="text-gradient">Foundation</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Currently pursuing an Integrated Master of Computer Applications (IMCA) at Utkal University, specializing in Computer Science.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-blue font-bold text-sm">23</div>
                <p className="text-white font-medium text-sm">Started IMCA</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-purple font-bold text-sm">28</div>
                <p className="text-white font-medium text-sm">Expected Grad</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Professional <span className="text-brand-blue">Experience</span>
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-brand-purple/30">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand-purple" />
                <h4 className="text-white font-bold">Independent Software Developer</h4>
                <p className="text-xs text-brand-blue font-mono mb-2">Freelance • 2024 - Present</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Developing custom software solutions with a focus on Python and Java. Specialized in building Model Context Protocol (MCP) servers to enhance AI workflows.
                </p>
              </div>
              
              <div className="relative pl-6 border-l border-brand-blue/30">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand-blue" />
                <h4 className="text-white font-bold">Open Source Contributor</h4>
                <p className="text-xs text-brand-purple font-mono mb-2">GitHub • Ongoing</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Active contributor to various repositories, focusing on algorithmic challenges and database management utilities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[600px]">
          <motion.div 
            style={{ y: y1, scale }}
            className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-20"
          >
            <img 
              src="https://picsum.photos/seed/tech1/800/1000" 
              alt="Tech Showcase" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10"
          >
            <img 
              src="https://picsum.photos/seed/tech2/600/800" 
              alt="Design Showcase" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent" />
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
