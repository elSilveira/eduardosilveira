import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Layers3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { featuredPersonalProjects, projectCount } from '@/data/personalProjects';
import SectionHeading from './SectionHeading';

const PersonalProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-grid noise-overlay">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            label="Personal Projects"
            title="Independent Builds"
            subtitle="Research tools, AI workflows, browser extensions, and product experiments built outside the day job."
          />

          <Link
            to="/projects"
            className="magnetic-btn inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
          >
            View all {projectCount}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          ref={ref}
          className={`grid gap-4 md:grid-cols-2 xl:grid-cols-3 animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          {featuredPersonalProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex min-h-[280px] flex-col rounded-lg border border-white/[0.06] bg-gradient-card p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12]"
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                    <Layers3 size={14} />
                    <span className="break-words">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-mono text-primary">
                  {project.status}
                </span>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.07] bg-secondary/70 px-2.5 py-1 text-xs font-mono text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Details
                  <ExternalLink size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
