import ProductPage1 from "@/components/ProductPage1";
import Footer from "@/components/Footer";
import FloatingHeader from "@/components/FloatingHeader";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Product1Page() {
  return (
    <>
      <FloatingHeader position="right" />
      <main>
        <ProductPage1 />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
