"use server"
import prisma from "@/lib/prisma";

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


