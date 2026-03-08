import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-display font-bold text-white tracking-tighter mb-6 block">
              DEVIDATTA<span className="text-brand-blue">.</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8">
              IMCA Student Specializing in Software Development & Database Management. Future Tech Innovator based in Bhubaneswar, Odisha.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/devidatta-mallick" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:mallickdev960@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Bhubaneswar, Odisha, India</li>
              <li>+91-9827842867</li>
              <li>mallickdev960@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Social</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="https://www.linkedin.com/in/devidatta-mallick" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Devidatta Mallick. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
}
