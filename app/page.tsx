
import Link from "next/link";
import { getUser } from "./_actions/ServerActions";
import { User } from "@prisma/client";


const Home = async () => {
    
        const list = await getUser()

  return (
    <div className="items-center flex justify-center min-h-screen">

	<div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">List of users</h3>
        <Link href={`/add-user`}className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Add user
        </Link>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            
         {list.map((user)=>(          
         
            <li key={user.id} className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://www.creative-tim.com/twcomponents/default.png" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           {user.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.email}
                        </p>
                    </div>
                    
                    <Link className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                     href={`/edit-user/`}>Edit</Link>
                      <Link className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                     href={`/edit-user`}>Delete</Link>                     
                     
                </div>
            </li>
            ))}
        </ul>
   </div>
</div>
	
</div>
  
  )
}

export default Home
