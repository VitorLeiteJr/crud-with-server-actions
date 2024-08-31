"use server"
import { prisma } from "@/util/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function getUser() {
    const users = await prisma.user.findMany();
    return users;
  }


export const addUser = async( prevState: any ,formData: FormData)=>{

    const name = formData.get("name") as string
    const email = formData.get("email") as string
try{
await prisma.user.create({
    data: {
        name: name,
        email: email
    }
})
console.log('added')
        return {message: "", isOk: true}
}catch(e){
    return {message: "failed", isOk: false}
}
revalidatePath('/')




}