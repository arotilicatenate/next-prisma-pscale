import React from "react";
import { Product } from "@/models/product";
import { deleteProduct, getProducts } from "@/services/product-service";
import Link from "next/link";
import DeleteButton from "./delete-button";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate-path";
export default async function AdminSection() {
  const products = await getProducts();
  revalidatePath("/admin")
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">
          Sacramento Kings Merchandise
        </h1>

        <table className="min-w-full bg-gray-900 shadow-md rounded my-4">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product.id}>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.description}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">
                  <Link href={`/admin/${product.id}`}>
                    <button className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </Link>
                  <DeleteButton product={product} content="Delete"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center">
          <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-400 focus:bg-green-400 rounded-lg">
            Insert{/*TODO: Add logic for inserting products*/}
          </button>
        </div>
      </div>
    </div>
  );
}
