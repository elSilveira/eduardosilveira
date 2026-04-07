import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

interface SkillCategory {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 95 },
      { name: 'C#', level: 70 },
      { name: 'Dart', level: 65 },
      { name: 'Python', level: 60 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Redux / Next.js', level: 92 },
      { name: 'Angular / RxJS / NgRx', level: 90 },
      { name: 'Vue.js', level: 65 },
      { name: 'Tailwind CSS / SASS', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 70 },
      { name: 'Ionic', level: 75 },
    ],
  },
  {
    title: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: '.NET Core', level: 70 },
      { name: 'GraphQL / REST APIs', level: 85 },
      { name: 'AWS / Docker', level: 75 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'Git / CI/CD', level: 90 },
      { name: 'Jest / Cypress', level: 85 },
      { name: 'Agile / Scrum', level: 90 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`skill-bar-fill h-full bg-gradient-primary rounded-full ${isVisible ? 'visible' : ''}`}
          style={{ '--fill-width': `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-grid noise-overlay">
      <div className="container relative z-10">
        <SectionHeading
          label="Technical Skills"
          title="My Tech Arsenal"
          subtitle="Technologies and tools I work with daily to build exceptional products."
        />

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-500 shadow-card"
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
