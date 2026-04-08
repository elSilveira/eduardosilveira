import { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import ParticleField from './ParticleField';

const roles = [
  'Senior Full-Stack Engineer',
  'Frontend Architect',
  'React & Angular Expert',
  'Performance Optimizer',
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParticleField />
      
      {/* Soft radial spotlight — not saturated */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(263 70% 65% / 0.07) 0%, transparent 65%)' }}
      />

      <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          <span className="text-sm text-primary font-medium">Available for opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 leading-tight">
          Eduardo Luiz
          <br />
          <span className="text-gradient">da Silveira</span>
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl text-muted-foreground font-heading font-light">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin size={16} className="text-primary" />
          <span className="text-sm">Toledo, PR — Brazil</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="./CV_Eduardo_Silveira_2026.pdf"
            download
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-foreground font-semibold rounded-lg hover:bg-white/5 hover:border-white/20 transition-all"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {[
            { href: 'https://www.linkedin.com/in/elsilveira/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://github.com/elsilveira/', icon: Github, label: 'GitHub' },
            { href: 'mailto:eduardoluizsilveira@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-3 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
