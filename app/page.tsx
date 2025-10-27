import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import OurServices from "@/components/OurServices";
import ProcessSteps from "@/components/ProcessSteps";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentWork from "@/components/RecentWork";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <ProcessSteps />
      <WhyChooseUs />
      <RecentWork />
      <FAQ />
    </div>
  );
}
