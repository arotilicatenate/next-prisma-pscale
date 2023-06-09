"use server"
import { Product } from "@/models/product";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { NextApiResponse } from "next";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

/**
 * Retrieves all products from the database.
 * @returns A promise that resolves to an array of products.
 */
export async function getProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
}
/**
 * Deletes a product from the server based on its ID.
 * @param id - The ID of the product to delete.
 * @remarks This function deletes the product from the server using Prisma. 
 * It also selects and returns the price and name of the deleted product.
 * It then triggers a revalidation of the '/admin' path.
 */
export async function deleteProduct(id: number) {
    await prisma.product.delete({
        where: { id: id, },
        select: {
            price: true,
            name: true,
        },
    })
    'use server';
    revalidatePath('/admin');
}
/**
 * Retrieves a product by its ID from the database.
 * @param productId - The ID of the product to retrieve.
 * @returns A promise that resolves to the found product or a promise-like object containing the product.
 */
export async function getProductById(productId: number): Promise<Product | PromiseLike<Product>> {
    return await prisma.product.findUnique({ where: { id: productId } });
}

export async function updateProduct(data: FormData) {
    
    console.log("updating product with id", data.get("id"));
    const id: any = data.get("id")
    try{
        let res: NextApiResponse = await prisma.product.update({

            where: { id: parseInt(id) },
            data: {
                name: data.get('name'),
                price: data.get('price'),
                description: data.get('description'),
                image: data.get('image'),
                // category_id: data.get('category')
            },
        })
        'use server';
        
    }catch(e){
        console.error(e);
    }
   
}

