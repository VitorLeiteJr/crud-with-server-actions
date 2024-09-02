"use server"
import { prisma } from "@/util/prisma";
import { revalidatePath } from "next/cache";

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
revalidatePath('/')
        return {message: "user added", isOk: true}
        
}catch(e){

    return {message: "failed", isOk: false}
}

}

export const deleteUser = async (id: string) =>{
    
   

    await prisma.user.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/')
}