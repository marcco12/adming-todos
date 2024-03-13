"use server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const toggleTodo = async (
	id: string,
	complete: boolean
): Promise<Todo> => {

    await sleep(3000)

	const todo = await prisma.todo.findFirst({ where: { id } });
	if (!todo) {
		throw new Error("Todo not found");
	}
	const updatedTodo = await prisma.todo.update({
		where: { id },
		data: { complete },
	});

	revalidatePath("/dashboard/server-todos");

	return updatedTodo;
};

export const addTodo = async (description: string) => {
	try {
		const todo = await prisma.todo.create({ data: { description } });

		revalidatePath("/dashboard/server-todos");
		return todo;
	} catch (error) {
        return {
            message: "Error creando el todo",
		};
	}
};

export const deleteCompleted = async () => {
    await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath("/dashboard/server-todos");
	return { message: "Todos eliminados" };
};
