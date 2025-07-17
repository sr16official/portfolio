import { ChevronDown, Github, Linkedin, Mail, Phone, Download, Brain, Zap, Network, Database, BarChart3 } from 'lucide-react';
import { useMemo } from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/sourabh_new_.pdf'; // Place your PDF in the public folder
    link.download = 'Sourabh_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate stable random data particles
  const dataParticles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${2 + Math.random() * 3}px`,
      height: `${2 + Math.random() * 3}px`,
      backgroundColor: i % 4 === 0
        ? '#06b6d4'
        : i % 4 === 1
        ? '#8b5cf6'
        : i % 4 === 2
        ? '#10b981'
        : '#3b82f6',
      animationDelay: `${i * 0.2}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Deep Learning Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      
      {/* Data Flow Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_2px_2px,_rgba(34,211,238,0.4)_2px,_transparent_0)] bg-[size:40px_40px]" />
      </div>
      
      {/* Neural Network Visualization */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Neural Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full shadow-2xl animate-pulse"
            style={{
              left: `${10 + i * 7}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${8 + (i % 3) * 4}px`,
              height: `${8 + (i % 3) * 4}px`,
              background: i % 3 === 0 
                ? 'linear-gradient(45deg, #06b6d4, #3b82f6)' 
                : i % 3 === 1 
                ? 'linear-gradient(45deg, #8b5cf6, #a855f7)' 
                : 'linear-gradient(45deg, #10b981, #06b6d4)',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        
        {/* Synaptic Connections */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`synapse-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse"
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + i * 8}%`,
              width: `${80 + i * 20}px`,
              transform: `rotate(${i * 25}deg)`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        {dataParticles.map((particle, i) => (
          <div
            key={`data-${i}`}
            className="absolute rounded-full animate-ping"
            style={particle}
          />
        ))}
      </div>

      {/* Algorithmic Flow Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-pulse"
            style={{
              left: `${i * 15}%`,
              top: `${30 + i * 10}%`,
              width: '200px',
              transform: `rotate(${i * 20}deg)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="text-center relative">
          {/* AI-Enhanced Profile Frame */}
          <div className="relative w-48 h-48 mx-auto mb-12 mt-8">
            {/* Multi-layered Rotation Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-spin" style={{animationDuration: '25s'}} />
            <div className="absolute inset-3 rounded-full border border-purple-400/30 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}} />
            <div className="absolute inset-6 rounded-full border border-emerald-400/20 animate-spin" style={{animationDuration: '15s'}} />
            
            {/* Profile Container */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-emerald-500/20 p-1 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden flex items-center justify-center border border-cyan-400/30">
                {/* Replace with your image */}
                <img 
                  src="/your-profile-image.jpg.jpeg" 
                  alt="Sourabh Singh - ML Engineer" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                      (img.nextSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback initials (hidden by default) */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-3xl tracking-wider"
                  style={{ display: 'none' }}
                  aria-label="Profile initials"
                >
                  SS
                </div>
              </div>
            </div>
            
            {/* ML-themed Corner Icons */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse" style={{animationDelay: '0.5s'}}>
              <Network className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50 animate-pulse" style={{animationDelay: '1s'}}>
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse" style={{animationDelay: '1.5s'}}>
              <Database className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Enhanced Name with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-black tracking-tight">
              Sourabh Singh
            </span>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-emerald-400/10 blur-xl -z-10" />
          </h1>

          {/* Professional Title */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h2 className="text-xl md:text-2xl font-semibold">
              <span className="bg-gradient-to-r from-slate-200 to-cyan-200 bg-clip-text text-transparent">
                Machine Learning Engineer & Data Scientist
              </span>
            </h2>
            <Zap className="w-6 h-6 text-emerald-400 animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>

          {/* Creative Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { name: 'Python', color: 'from-yellow-500 to-blue-600', icon: '🐍', glow: 'shadow-yellow-500/30' },
              { name: 'TensorFlow', color: 'from-orange-500 to-orange-600', icon: '🧠', glow: 'shadow-orange-500/30' },
              { name: 'PyTorch', color: 'from-red-500 to-red-600', icon: '🔥', glow: 'shadow-red-500/30' },
              { name: 'LangChain', color: 'from-green-500 to-emerald-600', icon: '🔗', glow: 'shadow-green-500/30' },
              { name: 'Generative AI', color: 'from-purple-500 to-pink-600', icon: '✨', glow: 'shadow-purple-500/30' },
              { name: 'Deep Learning', color: 'from-cyan-500 to-blue-600', icon: '🕸️', glow: 'shadow-cyan-500/30' },
              { name: 'NLP', color: 'from-indigo-500 to-purple-600', icon: '💬', glow: 'shadow-indigo-500/30' },
              { name: 'LLMs', color: 'from-emerald-500 to-teal-600', icon: '🤖', glow: 'shadow-emerald-500/30' }
            ].map(tech => (
              <div
                key={tech.name}
                className={`group relative px-4 py-2 bg-gradient-to-r ${tech.color} text-white text-sm font-medium rounded-full shadow-lg ${tech.glow} hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/50 overflow-hidden`}
              >
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-base group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="group-hover:font-bold transition-all duration-300">
                    {tech.name}
                  </span>
                </div>
                
                {/* Pulse effect on hover */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 group-hover:animate-ping`} />
              </div>
            ))}
          </div>

          {/* Professional Summary */}
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Performance-oriented Machine Learning Engineer with expertise in{' '}
            <span className="text-cyan-400 font-medium">Generative AI</span>, 
            <span className="text-purple-400 font-medium"> Deep Learning</span>, and{' '}
            <span className="text-emerald-400 font-medium"> Large Language Models</span>. 
            Experienced in developing advanced AI applications using{' '}
            <span className="text-blue-400 font-medium">LangChain</span> and proven track record in{' '}
            <span className="text-indigo-400 font-medium">NLP</span> solutions.
          </p>

          {/* Enhanced Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/sr16official"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20 hover:scale-105 hover:-translate-y-1"
            >
              <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/saurabh-singh-b420b3197"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg border border-blue-500 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/20 hover:scale-105 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              LinkedIn
            </a>
            
            <a
              href="mailto:singhsourabh16c@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg border border-emerald-500 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 hover:scale-105 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              Email
            </a>
            
            <a
              href="tel:+917982480700"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg border border-purple-500 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-purple-400/20 hover:scale-105 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              Call
            </a>
          </div>

          {/* Enhanced Resume Download Button */}
          <button 
            onClick={handleResumeDownload}
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 border border-white/10 hover:border-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-emerald-400 transition-colors duration-300 group"
          >
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;