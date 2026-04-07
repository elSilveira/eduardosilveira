import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { Briefcase, Globe, Code2, Zap } from 'lucide-react';

const highlights = [
  { icon: Briefcase, value: '10+', label: 'Years Experience' },
  { icon: Globe, value: '6+', label: 'Global Companies' },
  { icon: Code2, value: '5+', label: 'Tech Stacks' },
  { icon: Zap, value: '40%', label: 'Bug Reduction' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 md:py-32 noise-overlay">
      <div className="container relative z-10">
        <SectionHeading
          label="About Me"
          title="Crafting Scalable Solutions"
          subtitle="Passionate about building high-performance web applications that make an impact."
        />

        <div ref={ref} className={`max-w-3xl text-lg text-muted-foreground leading-relaxed mb-16 space-y-4 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <p>
            Senior Full-Stack Software Engineer with <strong className="text-foreground">10+ years</strong> of experience 
            building and scaling web and mobile platforms for global companies, including{' '}
            <strong className="text-foreground">BMW</strong> and fintech startups.
          </p>
          <p>
            Specialized in <strong className="text-foreground">JavaScript and TypeScript</strong> (React, Angular, Node.js), 
            with strong ownership of frontend architecture, performance optimization, and legacy system refactoring. 
            Experienced in delivering production-ready solutions in distributed, remote teams.
          </p>
        </div>

        {/* Highlight cards */}
        <div ref={cardsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger-children ${cardsVisible ? 'visible' : ''}`}>
          {highlights.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group relative p-6 rounded-xl bg-gradient-card border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 shadow-card"
            >
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <Icon size={24} className="text-primary mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
