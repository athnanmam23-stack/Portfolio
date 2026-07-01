import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <div className="relative -mt-1 z-10">
        <WaveDivider position="bottom" color="oklch(0.18 0.01 280)" />
      </div>
      <AboutSection />
      <div className="relative -mt-1 z-10">
        <WaveDivider position="bottom" color="oklch(0.12 0.01 280)" />
      </div>
      <ExperienceSection />
      <div className="relative -mt-1 z-10">
        <WaveDivider position="bottom" color="oklch(0.18 0.01 280)" />
      </div>
      <SkillsSection />
      <div className="relative -mt-1 z-10">
        <WaveDivider position="bottom" color="oklch(0.12 0.01 280)" />
      </div>
      <ProjectsSection />
      <div className="relative -mt-1 z-10">
        <WaveDivider position="bottom" color="oklch(0.18 0.01 280)" />
      </div>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
