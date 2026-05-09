import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Sparkles } from 'lucide-react';
import Footer from '@/components/cv/Footer';
import Navbar from '@/components/cv/Navbar';
import { personalProjects } from '@/data/personalProjects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="relative overflow-hidden pt-28 noise-overlay">
        <section className="container relative z-10 pb-16 md:pb-20">
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to project grid
          </Link>

          <div className="max-w-4xl">
            <span className="mb-3 inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest">
              <Sparkles size={15} />
              Personal Projects
            </span>
            <h1 className="mb-5 text-4xl font-heading font-bold text-foreground md:text-5xl lg:text-6xl">
              Independent systems, research tools, and AI product experiments.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              A deeper view into the projects behind the homepage snippets, from capability
              graph matching and LLM prompt compilation to local AI overlays, forecasting tools,
              browser extensions, and digital life experiments.
            </p>
          </div>
        </section>

        <section className="container relative z-10 pb-24 md:pb-32">
          <div className="grid gap-5">
            {personalProjects.map((project) => (
              <article
                key={project.slug}
                id={project.slug}
                className="rounded-lg border border-white/[0.06] bg-gradient-card p-5 shadow-card md:p-6"
              >
                <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-white/[0.07] bg-secondary/70 px-3 py-1 text-xs font-mono text-secondary-foreground">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground md:text-3xl">
                      {project.name}
                    </h2>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    {project.homepageUrl && (
                      <a
                        href={project.homepageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
                      >
                        Live
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-6 max-w-4xl text-base leading-relaxed text-muted-foreground">
                  {project.detail}
                </p>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-sm font-mono uppercase tracking-widest text-primary">
                      Technical Focus
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.technicalFocus}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-mono uppercase tracking-widest text-primary">
                      Why It Matters
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-secondary/70 px-2.5 py-1 text-xs font-mono text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
