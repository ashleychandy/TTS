import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FourWays from "@/components/FourWays";
import SelectedWorks from "@/components/SelectedWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <FourWays />
      <SelectedWorks />
      <Footer />
    </main>
  );
}
