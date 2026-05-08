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
      'Built and launched a greenfield marketplace platform from scratch, enabling TV streaming companies to monetize advertising inventory and onboard multiple enterprise partners within the first quarter.',
      'Defined and led frontend architecture with React, Next.js 13/14, Angular, and TypeScript, improving scalability, maintainability, SEO, and performance with sub-2s First Contentful Paint.',
      'Designed backend services, REST/GraphQL APIs, and data models for advertisers, campaigns, insertion orders, creatives, publishers, partner operations, reporting, and scalable marketplace workflows.',
      'Created SemanticIR, a semantic context and prompt-compilation layer for codebase-aware LLM workflows, reusable context retrieval, and AI-assisted development productivity.',
      'Built AI-powered workflows with RAG concepts, LLMs, LangChain, and MCP tools for agent-assisted insertion orders, campaigns, creatives, and marketplace operations.',
      'Developed a video upload and processing pipeline using S3-compatible storage for scalable media ingestion, optimization, and delivery.',
      'Established CI/CD pipelines and testing strategy with Jest and Cypress, reducing production regressions and deployment-related issues by 40%.',
    ],
    tags: ['React', 'Next.js', 'Angular', 'TypeScript', 'GraphQL', 'RAG', 'MCP', 'AWS S3', 'CI/CD'],
  },
  {
    company: 'Group BMW',
    role: 'Senior Fullstack Engineer',
    period: 'Jun 2023 – Dec 2023',
    highlights: [
      'Engineered critical financial deal-management modules for BMW markets in the USA, Canada, and Mexico using Angular, .NET, SQL, and API-driven application architecture.',
      'Refactored a legacy deal-processing flow, resolving long-standing stability issues and reducing processing time by 80%.',
      'Designed and delivered compliance-critical features, including a region-specific Anti-Money Laundering solution for BMW Mexico.',
      'Built secure backend services and APIs supporting financial operations in a high-reliability, data-intensive environment.',
      'Optimized complex relational data models and SQL queries for performance, correctness, reporting, and data validation workflows.',
      'Automated regression testing with Jest/Cypress, reducing manual QA effort by 15-20 hours per sprint and increasing release confidence.',
    ],
    tags: ['Angular', '.NET', 'SQL', 'APIs', 'AML Compliance', 'Jest', 'Cypress'],
  },
  {
    company: 'Vengreso',
    role: 'Senior Fullstack Developer (Contract)',
    period: 'Apr 2023 – Jun 2025',
    highlights: [
      'Developed a Chrome Extension with advanced DOM manipulation, used by 10,000+ users to streamline workflows and improve daily productivity.',
      'Built AI-powered extension features that extracted context from LinkedIn, Facebook, emails, posts, replies, and comments to generate relevant responses, posts, comments, and email drafts.',
      'Implemented context-aware LLM workflows that analyzed selected content and generated tailored replies based on tone, intent, and response type.',
      'Built backend services and APIs powering a centralized analytics and management dashboard for user data, workflows, and subscription plans.',
      'Designed scalable data processing flows and storage strategies to support feature growth, reporting, insights, and product decision-making.',
      'Leveraged AI-assisted development tools to accelerate delivery while maintaining code quality and release stability.',
    ],
    tags: ['Chrome Extension', 'LLM Workflows', 'DOM Automation', 'APIs', 'Analytics', 'AI Automation'],
  },
  {
    company: 'Layer',
    role: 'Senior Frontend Software Engineer',
    period: 'Dec 2020 – Aug 2023',
    highlights: [
      'Collaborated with a distributed global team across 4+ time zones to build a Bank-as-a-Service platform adopted by international banks.',
      'Developed a proprietary Web SDK and component library using Angular Dart and Flutter, reducing client integration time by 35%.',
      'Designed reusable components and frontend architecture patterns to support scalability and consistency across multiple client integrations.',
      'Optimized frontend performance and component reusability, ensuring reliability and scalability during high-volume banking transactions.',
      'Contributed to a white-label banking platform used by multiple financial institutions, enabling scalable and customizable deployments.',
    ],
    tags: ['Angular Dart', 'Flutter', 'BaaS', 'SDK'],
  },
  {
    company: 'TRIO',
    role: 'Senior Web Engineer',
    period: 'Sep 2018 – Dec 2020',
    highlights: [
      'Led frontend development of a social learning platform featuring interactive video players, gamified experiences, and educational content.',
      'Partnered closely with UX/UI designers to implement a responsive, reusable design system, increasing user engagement by 30%.',
      'Defined and evolved frontend architecture and component standards to support scalability and maintainability.',
      'Modernized the technology stack using Angular, Ionic, and Node.js with Express, enabling efficient cross-platform delivery across web and mobile.',
      'Improved performance and user experience through component standardization and responsive design best practices.',
    ],
    tags: ['Angular', 'Ionic', 'Node.js', 'Express', 'Design System', 'EdTech'],
  },
  {
    company: 'Easycomtec',
    role: 'System Developer',
    period: 'Jun 2018 – Sep 2018',
    highlights: [
      'Delivered cross-platform mobile applications using Ionic, React Native, Node.js, and C# with .NET.',
    ],
    tags: ['Ionic', 'React Native', 'Node.js', 'C#', '.NET'],
  },
  {
    company: 'Datacoper',
    role: 'System Developer',
    period: 'Mar 2016 – Jan 2017',
    location: 'Cascavel, BR',
    highlights: [
      'Maintained and expanded CRM systems across Android, iOS, and Web platforms using Node.js, C#, .NET, MySQL, PostgreSQL, and SQL Server.',
    ],
    tags: ['CRM', 'Android', 'iOS', 'Node.js', '.NET', 'SQL'],
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
        className="group p-5 md:p-6 rounded-xl bg-gradient-card border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 shadow-card cursor-pointer"
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

        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
