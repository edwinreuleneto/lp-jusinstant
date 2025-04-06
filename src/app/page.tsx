// Components
import { FaqSection } from "@/components/FAQ";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Situations } from "@/components/Situations";
import  FormSection  from "@/components/StartFormSection";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <Hero />
      <Stats />
      <Situations />
      <HowItWorks />
      <FormSection />
      <Testimonials />
      <FaqSection />
    </main>
  );
}
