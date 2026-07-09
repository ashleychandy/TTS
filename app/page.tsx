import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FourWays from "@/components/FourWays";
import SelectedWorks from "@/components/SelectedWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <FourWays />
        <SelectedWorks />
        <CTA />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
