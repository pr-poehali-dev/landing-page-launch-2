import HeroSection from "@/components/sections/HeroSection";
import CourseContent from "@/components/sections/CourseContent";
import AuthorAndTestimonials from "@/components/sections/AuthorAndTestimonials";
import PricingAndFAQ from "@/components/sections/PricingAndFAQ";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <HeroSection scrollToSection={scrollToSection} />
      <CourseContent />
      <AuthorAndTestimonials />
      <PricingAndFAQ />
    </div>
  );
};

export default Index;
