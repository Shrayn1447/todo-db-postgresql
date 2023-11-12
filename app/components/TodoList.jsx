import React from 'react'
import Todo from './Todo'
import Button from './Button'
import { PrismaClient } from '@prisma/client'
const TodoList = async () => {
  const prisma = new PrismaClient()
  const data = await prisma.todo.findMany()
  console.log(data.length)
  return (
    <div className='w-[700px] h-[50vh] mt-[40px] flex overflow-y-auto flex-col-reverse justify-end'>
        {data.length !== 0 ? data.map(el => {
           return (
            <Todo key={el.id} data={el}>
               <Button id={el.id}/>
            </Todo>
           )
          
        }): (
          <div className=' text-center text-[50px] font-bold text-white'>
              Нет задач
          </div>
        )}
    </div>
  )
}

export default TodoList
