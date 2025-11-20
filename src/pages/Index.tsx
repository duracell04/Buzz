import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProblemSection from "@/components/ProblemSection";
import WhyBuzzSection from "@/components/WhyBuzzSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SafetySection from "@/components/SafetySection";
import FAQSection from "@/components/FAQSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StorySection />
        <ProblemSection />
        <WhyBuzzSection />
        <HowItWorksSection />
        <SafetySection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
