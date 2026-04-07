import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { GraduationCap, Languages } from 'lucide-react';

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: langRef, isVisible: langVisible } = useScrollAnimation();

  return (
    <section id="education" className="relative py-24 md:py-32 bg-grid noise-overlay">
      <div className="container relative z-10">
        <SectionHeading
          label="Education & Languages"
          title="Academic Background"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Education */}
          <div ref={ref} className={`space-y-6 animate-on-scroll-left ${isVisible ? 'visible' : ''}`}>
            <h3 className="flex items-center gap-2 text-lg font-heading font-semibold text-foreground">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>

            {[
              {
                degree: 'Postgraduate Degree in Mobile Development',
                school: 'Faculdade Cidade Verde (FCV)',
                year: '2017 – 2018',
              },
              {
                degree: 'B.S. in Systems Analysis and Development',
                school: 'Universidade Paranaense (UNIPAR)',
                year: '2011 – 2015',
              },
            ].map((edu) => (
              <div
                key={edu.degree}
                className="p-5 rounded-xl bg-gradient-card border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 shadow-card"
              >
                <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-xs font-mono text-primary mt-2">{edu.year}</p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div ref={langRef} className={`space-y-6 animate-on-scroll-right ${langVisible ? 'visible' : ''}`}>
            <h3 className="flex items-center gap-2 text-lg font-heading font-semibold text-foreground">
              <Languages size={20} className="text-primary" />
              Languages
            </h3>

            {[
              { lang: 'Portuguese', level: 'Native', percent: 100 },
              { lang: 'English', level: 'C1 – Advanced', percent: 90 },
            ].map((l) => (
              <div
                key={l.lang}
                className="p-5 rounded-xl bg-gradient-card border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 shadow-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{l.lang}</h4>
                  <span className="text-xs font-mono text-primary">{l.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${l.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
