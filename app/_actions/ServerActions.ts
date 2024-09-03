"use server"
import { prisma } from "@/util/prisma";
import { revalidatePath } from "next/cache";

export async function getUsers() {
    
    const users = await prisma.user.findMany();
    return users;  

  }

  export async function getUser(id: string) {
       
        const users= await prisma.user.findUnique({
            where: {
                id: id
            }
        })
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

export const editUser = async (prevState: any, formData: FormData)=>{

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const id  = formData.get("id") as string

    try{
    await prisma.user.update({
        where: {
            id:id
        },
        data: {
            name: name,
            email: email
        }
    })

    revalidatePath('/')
    return {message: "the user was edited", isOk: true}
    }catch(e){
    
        return {message:"something is wrong", isOk: false}

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

