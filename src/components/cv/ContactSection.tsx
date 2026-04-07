import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-24 md:py-32 noise-overlay">
      <div className="container relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          subtitle="Ready for your next challenge? Let's connect."
        />

        <div ref={ref} className={`max-w-3xl stagger-children ${isVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Mail, label: 'Email', value: 'eduardoluizsilveira@gmail.com', href: 'mailto:eduardoluizsilveira@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Toledo, PR — Brazil', href: undefined },
              { icon: MapPin, label: 'Location', value: 'Toledo, PR — Brazil', href: undefined },
              { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/elsilveira', href: 'https://www.linkedin.com/in/elsilveira/' },
              { icon: Github, label: 'GitHub', value: 'github.com/elsilveira', href: 'https://github.com/elsilveira/' },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="group p-5 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-foreground hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/CV_Eduardo_Silveira_2026.pdf"
              download
              className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-heading font-semibold text-lg rounded-xl glow"
            >
              <Download size={22} />
              Download Full CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
