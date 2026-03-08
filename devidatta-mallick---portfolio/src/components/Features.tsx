import { motion } from 'motion/react';
import { Zap, Shield, Cpu, Globe, BarChart, Layers } from 'lucide-react';

const features = [
  {
    title: 'Model Context Protocol',
    description: 'Expertise in building and managing custom MCP servers to extend AI capabilities.',
    icon: Cpu,
    color: 'text-brand-blue',
  },
  {
    title: 'Claude AI',
    description: 'Advanced integration and prompt engineering with Claude AI models.',
    icon: Zap,
    color: 'text-yellow-400',
  },
  {
    title: 'Software Development',
    description: 'Solid foundation in Python and Java for building robust applications.',
    icon: Layers,
    color: 'text-orange-400',
  },
  {
    title: 'Database Management',
    description: 'Specializing in database design, optimization, and management.',
    icon: BarChart,
    color: 'text-pink-400',
  },
  {
    title: 'Data Structures',
    description: 'Strong understanding of algorithmic challenges and efficient data handling.',
    icon: Shield,
    color: 'text-green-400',
  },
  {
    title: 'Cloud Computing',
    description: 'Foundation in cloud infrastructure and modern deployment strategies.',
    icon: Globe,
    color: 'text-brand-purple',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Core <span className="text-gradient">Competencies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Combining academic excellence with a passion for emerging technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl glass hover:bg-white/10 transition-all group cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
