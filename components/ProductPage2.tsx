/**
 * ProductPage2 component - Premium Skincare Product
 */

import ProductPage from "@/components/ProductPage";
import { product2Data } from "@/data/product-2";

export default function ProductPage2() {
  return <ProductPage data={product2Data} isComingSoon={false} />;
}
