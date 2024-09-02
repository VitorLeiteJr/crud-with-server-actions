"use client"

import { toast } from "react-toastify"
import { deleteUser } from "../_actions/ServerActions"

interface button {
    
  
    id: string
}

const Button = ({id}: button) => {

    const handleDeleteUser = async (id: string) =>{

        const handleAlert = confirm('Are you sure?')

        if(handleAlert){
        const deleteuser= await deleteUser(id)     
        toast.success("successfully deleted")
        }else{
        toast.error("Operation canceled")
        }
    }

  return (
   <button
   className="inline-flex items-center text-base font-semibold
     text-gray-900 dark:text-white"
     onClick={()=>handleDeleteUser(id)}
     >Delete</button>
  )
}

export default Button