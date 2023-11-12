'use server'
import prisma from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'
export async function delet(id) {
    await prisma.todo.delete({
        where : {
            id
        }
    })
    revalidatePath('/')
}