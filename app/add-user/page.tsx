"use client"

import { toast } from "react-toastify"
import { addUser } from "../_actions/ServerActions"
import {  useRouter } from "next/navigation"
import { useFormState } from "react-dom"
import { useEffect } from "react"

const AddUser = () => {
	
	const initialState = {
		message: "",
		isOk: false
	  }

	const router = useRouter()
	const [state, formAction]= useFormState(addUser,initialState)

	  useEffect(()=>{
		if(state.isOk){
			toast.success("user added")
			router.push("/")		
		}
		
	  },[state.isOk])
	
	
    
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">fill the fields</h1>
		<form action={formAction}>
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
				<input name="name"type="text" className="text-gray-950 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your name" required/>
				
    
			</div>
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
				<input name="email"type="email" className="text-gray-950 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
				
			</div>		
			<div className="mb-4 semi-bold text-blue-500">
				{state.message}
				</div>	
			<button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">send</button>
			</form>

			
	</div>
</div>
  )
}

export default AddUser