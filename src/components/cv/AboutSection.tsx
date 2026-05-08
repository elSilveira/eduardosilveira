import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { Briefcase, Globe, Code2, BrainCircuit } from 'lucide-react';

const highlights = [
  { icon: Briefcase, value: '10+', label: 'Years Experience' },
  { icon: Globe, value: 'Global', label: 'Product Delivery' },
  { icon: Code2, value: 'Fullstack', label: 'Web, Mobile & APIs' },
  { icon: BrainCircuit, value: 'AI/LLM', label: 'RAG, Agents & MCP' },
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
            building and scaling high-performance web, mobile, marketplace, fintech, API-driven, and AI-powered platforms 
            for global companies including <strong className="text-foreground">BMW</strong>, Bank-as-a-Service products, 
            and technology startups.
          </p>
          <p>
            Frontend-leaning fullstack profile with deep expertise in <strong className="text-foreground">JavaScript and TypeScript</strong>, 
            including React, Next.js, Angular, and Node.js, combined with backend services, REST/GraphQL APIs, data models, 
            reporting dashboards, and production workflows.
          </p>
          <p>
            Hands-on experience with <strong className="text-foreground">RAG/LLM systems</strong>, SemanticIR, MCP tools, 
            LangChain-based agents, context extraction, prompt engineering, and AI-assisted workflows that turn user intent 
            and business context into structured actions, drafts, campaigns, creatives, and automated responses.
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
