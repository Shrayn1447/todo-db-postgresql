'use server'
import prisma from "./prisma"
import { revalidatePath } from 'next/cache'
export async function update(id,title) {
    await prisma.todo.update({
        where : {
            id
        },
        data : {
            title
        }
    })
    revalidatePath('/')
}