import Navbar from '@/components/cv/Navbar';
import HeroSection from '@/components/cv/HeroSection';
import AboutSection from '@/components/cv/AboutSection';
import SkillsSection from '@/components/cv/SkillsSection';
import ExperienceSection from '@/components/cv/ExperienceSection';
import PersonalProjectsSection from '@/components/cv/PersonalProjectsSection';
import EducationSection from '@/components/cv/EducationSection';
import ContactSection from '@/components/cv/ContactSection';
import Footer from '@/components/cv/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PersonalProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
