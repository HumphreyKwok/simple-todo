"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTodo(todo: string) {
  try {
    await prisma.todo.create({
      data: {
        content: todo,
      },
    });

    revalidatePath("/");

    return { status: 201, message: `Added todo: ${todo}` };
  } catch (error) {
    return {
      status: 500,
      error: `Unable to write to database, error details: ${error}`,
    };
  }
}

export async function updateTodo(todoId: string, content: string) {
  try {
    await prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        content: content,
      },
    });

    revalidatePath("/");

    return { status: 200, message: `Deleted todo withId: ${todoId}` };
  } catch (error) {
    return {
      status: 500,
      error: `Unable to write to database, error details: ${error}`,
    };
  }
}

export async function deleteTodo(todoId: string) {
  try {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });

    revalidatePath("/");

    return { status: 204, message: `Deleted todo withId: ${todoId}` };
  } catch (error) {
    return {
      status: 500,
      error: `Unable to write to database, error details: ${error}`,
    };
  }
}
