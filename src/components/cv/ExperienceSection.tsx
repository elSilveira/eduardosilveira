import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { Building2, Calendar, ChevronDown, ExternalLink } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  tags?: string[];
}

const experiences: Experience[] = [
  {
    company: 'Stamp',
    role: 'Senior Fullstack Engineer',
    period: 'Jan 2024 – Present',
    highlights: [
      'Architected and launched a greenfield marketplace platform enabling TV streaming players to monetize advertising inventory, onboarding multiple enterprise streaming partners within the first quarter.',
      'Defined the end-to-end frontend architecture using Angular, React, Next.js (13/14), and TypeScript, achieving SEO optimization and a sub-2-second First Contentful Paint (FCP).',
      'Established CI/CD pipelines and robust testing protocols (Jest, Cypress), reducing production regressions and deployment-related bugs by 40%.',
      'Collaborated with product and backend teams to deliver a scalable AWS-based marketplace, supporting rapid partner onboarding and future revenue growth.',
      'Provided technical guidance on architecture decisions, code quality standards, and release stability across the engineering team.',
    ],
    tags: ['Angular', 'React', 'Next.js', 'TypeScript', 'AWS', 'CI/CD'],
  },
  {
    company: 'Group BMW',
    role: 'Senior Fullstack Engineer',
    period: 'Jun 2023 – Dec 2023',
    highlights: [
      'Engineered critical financial deal-management modules for BMW markets in the USA, Canada, and Mexico using Angular, .NET, and SQL.',
      'Refactored a legacy deals flow, resolving long-standing stability issues and reducing deal-processing delays by 80%.',
      'Developed and deployed a region-specific Anti-Money Laundering (AML) feature for BMW Mexico, ensuring 100% regulatory compliance.',
      'Automated regression testing suites, cutting manual QA effort by 15–20 hours per sprint and improving release confidence.',
    ],
    tags: ['Angular', '.NET', 'SQL', 'AML Compliance'],
  },
  {
    company: 'Vengreso',
    role: 'Senior Fullstack Developer (Contract)',
    period: 'Apr 2023 – Jun 2025',
    highlights: [
      'Developed a Chrome Extension with advanced DOM manipulation and AI integration, actively used by 10,000+ users to streamline daily workflows.',
      'Built a centralized analytics and management dashboard for shortcuts, data, and plans, significantly improving user productivity and operational visibility.',
      'Optimized Git workflows and branching strategies, reducing merge conflicts and ensuring stable, predictable release cycles.',
      'Contributed to technical planning in a fast-paced startup environment, balancing speed, maintainability, and scalability.',
    ],
    tags: ['Chrome Extension', 'AI Integration', 'Analytics'],
  },
  {
    company: 'Layer',
    role: 'Senior Frontend Software Engineer',
    period: 'Dec 2020 – Aug 2023',
    highlights: [
      'Collaborated with a distributed global team across 4+ time zones to build a Bank-as-a-Service platform adopted by 10+ international banks.',
      'Developed a proprietary Web SDK and component library using Angular Dart and Flutter, reducing client integration time by 35%.',
      'Optimized frontend performance and component reusability, enabling reliable scaling during high-volume banking transaction periods.',
      'Played a key role in building a white-label banking solution used across multiple financial institutions.',
    ],
    tags: ['Angular Dart', 'Flutter', 'BaaS', 'SDK'],
  },
  {
    company: 'TRIO',
    role: 'Senior Web Engineer',
    period: 'Sep 2018 – Dec 2020',
    highlights: [
      'Led frontend development of a social learning platform featuring interactive video players, games, and gamified educational content.',
      'Partnered closely with UX/UI designers to implement a responsive, reusable design system, increasing user engagement by 30%.',
      'Modernized the stack using Ionic and Angular, enabling efficient deployment of cross-platform web and mobile experiences.',
    ],
    tags: ['Ionic', 'Angular', 'Gamification', 'EdTech'],
  },
  {
    company: 'Easycomtec',
    role: 'System Developer',
    period: 'Jun 2018 – Sep 2018',
    highlights: [
      'Delivered cross-platform mobile applications using Ionic and React Native.',
    ],
    tags: ['Ionic', 'React Native'],
  },
  {
    company: 'Datacoper',
    role: 'System Developer',
    period: 'Mar 2016 – Jan 2017',
    location: 'Cascavel, BR',
    highlights: [
      'Maintained and expanded CRM systems across Android, iOS, and Web platforms.',
    ],
    tags: ['CRM', 'Android', 'iOS'],
  },
  {
    company: 'Inside Sistemas',
    role: 'System Developer',
    period: 'Dec 2012 – Jan 2015',
    location: 'Toledo, BR',
    highlights: [
      'Migrated legacy Visual Basic software to a cloud-based architecture using C# and Adobe Flex, modernizing the client\'s core software infrastructure.',
    ],
    tags: ['C#', 'Cloud Migration'],
  },
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [expanded, setExpanded] = useState(index < 3);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`relative pl-12 md:pl-16 pb-12 last:pb-0 animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.08}s` }}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-12 h-12 md:w-12 md:h-12 flex items-center justify-center">
        <div className="relative w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      <div
        className="group p-5 md:p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
              <Building2 size={18} className="text-primary shrink-0" />
              {exp.company}
            </h3>
            <p className="text-muted-foreground font-medium">{exp.role}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
            <Calendar size={14} className="text-primary" />
            <span className="font-mono">{exp.period}</span>
            <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {exp.tags && (
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 noise-overlay">
      <div className="container relative z-10">
        <SectionHeading
          label="Experience"
          title="Career Journey"
          subtitle="A decade of building products that scale across industries and continents."
        />

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.period} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
