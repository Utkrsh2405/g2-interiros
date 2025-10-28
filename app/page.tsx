import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import StatsCards from "@/components/StatsCards";
import OurServices from "@/components/OurServices";
import ProcessSteps from "@/components/ProcessSteps";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentWork from "@/components/RecentWork";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      {/* <StatsCards /> */}
      <OurServices />
      <ProcessSteps />
      <WhyChooseUs />
      <RecentWork />
      <FAQ />
      <CTA />
    </div>
  );
}
