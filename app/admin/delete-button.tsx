"use client";

import { useTransition } from "react";
import { deleteProduct } from "@/services/product-service";
import { Product } from "@/models/product";
type Data = {
  product: Product;
  content: string
};
const DeleteButton : React.FC<Data> = ({product, content}) =>{
  let [isPending, startTransition] = useTransition();
  
  return (
    <button
      className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() =>
        startTransition(() => {
          console.log("--- Deleting product with id: ", product.id);

          deleteProduct(parseInt(product.id));
        })
      }
    >
      {content}
    </button>
  );
}
export default DeleteButton;