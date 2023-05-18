"use server"
import prisma from "@/lib/prisma";

/**
 * Adds a user to the server.
 * @param data - The user data to be added.
 * @remarks This function logs the provided user data and inserts it into the server using Prisma.
 * If the insertion is successful, it logs the inserted data.
 * If an error occurs during insertion, it logs the error and returns an object with an error message.
 */
export async function addUser(data: any) {
  "use server";
  console.log("--- add user ", data);
  const formData: any = {};
  console.log("---name", data.get("name"));

  console.log("---formdata ", formData);
  try {
    const insert = await prisma.user.create({
      data: {
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      },
    });
    console.log("---insert", insert);
  } catch (e) {
    console.log(e);
    return { message: "Error inserting" };
  }
}


