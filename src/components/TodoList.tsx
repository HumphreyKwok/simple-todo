"use client";
import { deleteTodo } from "@/action/backendAPI";
import { FaCheck, FaPen, FaX } from "react-icons/fa6";

import { useState } from "react";
import UpdateTodoForm from "./UpdateTodoForm";

type TProps = {
  todos: {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

const TodoList = ({ todos }: TProps) => {
  const [editingIds, setEditingIds] = useState<string[]>([]);

  const handleDelete = async (todoId: string) => {
    const response = await deleteTodo(todoId);

    if (response.status === 204) {
      console.log(response.message);
    } else {
      console.log(
        `Something went wrong: ${response.status} - ${response.error}`,
      );
    }
  };

  const handleEdit = (todoId: string) => {
    editingIds.includes(todoId)
      ? setEditingIds(editingIds.filter((editingId) => editingId !== todoId))
      : setEditingIds(editingIds.concat(todoId));
  };

  return (
    <div className="m-4 flex flex-col gap-4 overflow-scroll">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center gap-4">
          <button
            className="rounded-md bg-yellow-400 px-4 py-2 font-bold text-black outline-none transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-500"
            onClick={() => handleDelete(todo.id)}
          >
            <FaX />
          </button>

          {editingIds.includes(todo.id) ? (
            <div className="flex h-12 items-center gap-4">
              {/* <button
                className="rounded-md bg-yellow-400 px-4 py-2 font-bold text-black outline-none transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-500"
                onClick={() => handleEdit(todo.id)}
              >
                <FaCheck />
              </button> */}
              <UpdateTodoForm
                todoId={todo.id}
                currentContent={todo.content}
                updateParentEditingIds={setEditingIds}
              />
            </div>
          ) : (
            <div className="flex h-12 items-center gap-4">
              <button
                className="rounded-md bg-yellow-400 px-4 py-2 font-bold text-black outline-none transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-500"
                onClick={() => handleEdit(todo.id)}
              >
                <FaPen />
              </button>
              <p className="pl-4">{todo.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
