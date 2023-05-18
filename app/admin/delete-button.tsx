"use client";

import { useTransition } from "react";
import { deleteProduct } from "@/services/product-service";
type Data = {
  id: number;
};
export default function DeleteButton(data: Data) {
  let [isPending, startTransition] = useTransition();

  return (
    <button
      className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() =>
        startTransition(() => {
          console.log("--- Deleting product with id: ", data.id);

          deleteProduct(data.id);
        })
      }
    >
      Delete
    </button>
  );
}
