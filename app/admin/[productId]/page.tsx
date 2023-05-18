import { getProductById } from "@/services/product-service";
import { Product } from "@prisma/client";
import React from "react";
type PageProps = {
  params: {
    productId: any;
  };
};
export default async function ProductDetail({
  params: { productId },
}: PageProps) {
    
  const product: any = await getProductById(parseInt(productId));
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
