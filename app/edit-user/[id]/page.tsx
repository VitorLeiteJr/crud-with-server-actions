import { editUser, getUser } from '@/app/_actions/ServerActions'
import React from 'react'
import FormEdit from './form-edit'

interface id {
  params:{
    id: string
  }
}

const EditUser = async ({params}: id) => {

  const user = await getUser(params.id)

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="max-w-[720px] mx-auto">
        
      <FormEdit
      id={params.id}
      name={user.name}
      email={user.email}
      />
    </div>
</div>
         )
}

export default EditUser