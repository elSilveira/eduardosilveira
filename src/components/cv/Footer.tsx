import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Eduardo Silveira. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4">
        {[
          { href: 'https://www.linkedin.com/in/elsilveira/', icon: Linkedin },
          { href: 'https://github.com/elsilveira/', icon: Github },
          { href: 'mailto:eduardoluizsilveira@gmail.com', icon: Mail },
        ].map(({ href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
