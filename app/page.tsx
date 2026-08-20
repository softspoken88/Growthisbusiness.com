import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CoreServices from "@/components/CoreServices";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import AutomationExamples from "@/components/AutomationExamples";
import WhyGTB from "@/components/WhyGTB";
import EngagementModels from "@/components/EngagementModels";
import PartnerCapabilities from "@/components/PartnerCapabilities";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <CoreServices />
      <BeforeAfter />
      <HowItWorks />
      <Industries />
      <AutomationExamples />
      <WhyGTB />
      <EngagementModels />
      <PartnerCapabilities />
      <FinalCTA />
    </>
  );
}
