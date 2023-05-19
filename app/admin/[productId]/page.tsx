import { CustomButton } from "@/app/components/custom-button";
import { Product } from "@/models/product";
import { getProductById, updateProduct } from "@/services/product-service";
import React from "react";

type PageProps = {
  params: {
    productId: any;
  };
};
export default async function ProductDetail({
  params: { productId },
}: PageProps) {
  const product: Product = await getProductById(parseInt(productId));

  return (
    <div>
      <h1 className="pt-7">{product.name}</h1>

      <form action={updateProduct} className="pt-7 max-w-lg mx-auto">
        <input type="hidden" name="id" defaultValue={product.id} />
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={product.name}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-white text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={product.description}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-white text-sm font-bold mb-2"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={product.price}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-white text-sm font-bold mb-2"
          >
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={product.image}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-white text-sm font-bold mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
            defaultValue={product.category_id}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          >
            <option value="1">Hats</option>
            <option value="2">Socks</option>
            <option value="3">Shirts</option>
          </select>
        </div>

        <div className="flex justify-center">
          <CustomButton
            content="Submit"
            alertMessage="product updated correctly"
            goToPage="/admin"
          />
        </div>
      </form>
    </div>
  );
}
