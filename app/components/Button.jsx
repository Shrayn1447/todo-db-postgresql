'use client'
import React from 'react'
import { delet } from '../lib/delete'
const Button = ({id}) => {
  return (
   <form>
     <button formAction={() => {
     delet(id)
      }} className=" bg-gray-300 p-[10px] hover:bg-gray-600  rounded-xl">Удалить</button>
   </form>
  )
}

export default Button