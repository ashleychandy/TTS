/**
 * ProductPage1 component - Lakmé product showcase
 * 
 * @deprecated Use ProductPage component directly instead
 */

import ProductPage from "@/components/ProductPage";
import { product1Data } from "@/data/product-1";

export default function ProductPage1() {
  return <ProductPage data={product1Data} />;
}