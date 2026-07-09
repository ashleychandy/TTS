import ProductPage2 from "@/components/ProductPage2";
import Footer from "@/components/Footer";
import FloatingHeader from "@/components/FloatingHeader";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Product2Page() {
  return (
    <>
      <FloatingHeader position="right" />
      <main>
        <ProductPage2 />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
