"use client"
import React from 'react'

interface id {
  params:{
    id: string
  }
}

const EditUser = ({params}: id) => {
  return (
    <div>{params.id}</div>
  )
}

export default EditUser