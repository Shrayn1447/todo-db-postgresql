'use server'
import prisma  from "@/app/lib/prisma";
import { revalidatePath } from 'next/cache'
export async function create(title) {
    await prisma.todo.create({
        data: {
            title
        }
    })
    revalidatePath('/')
}