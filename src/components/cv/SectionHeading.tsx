import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-16 bg-primary/60 rounded-full" />
    </div>
  );
};

export default SectionHeading;
