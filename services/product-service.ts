"use server"
import { Product } from "@/models/product";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
}
export async function deleteProduct(id: number) {
    console.log("---ID IN SERVER", id);

    await prisma.product.delete({
        where: { id: id ,},
        select: {
            price: true,
            name: true,
        },
    })
    'use server';
    revalidatePath('/admin');
}
export async function getProductById(productId: number): Promise<Product | PromiseLike<Product>> {
    return await prisma.product.findUnique({ where: { id: productId } });
}

