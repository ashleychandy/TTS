import ProductPage1 from "@/components/product_page_1";
import Footer from "@/components/Footer";
import FloatingHeader from "@/components/FloatingHeader";

export default function Product1Page() {
  return (
    <>
      <FloatingHeader position="right" />
      <main>
        <ProductPage1 />
        <Footer />
      </main>
    </>
  );
}
