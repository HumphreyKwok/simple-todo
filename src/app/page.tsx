export const dynamic = "force-dynamic";

import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import prisma from "@/lib/db";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="items-left flex w-full flex-1 flex-col gap-8 p-10">
      <AddTodoForm />
      <TodoList
        todos={todos.sort((a, b) => (a.createdAt >= b.createdAt ? 1 : -1))}
      />
    </main>
  );
}
