import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import FourWays from "@/components/FourWays";
import SelectedWork from "@/components/SelectedWork";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutIntro />
        <FourWays />
        <SelectedWork />
        <Philosophy />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
