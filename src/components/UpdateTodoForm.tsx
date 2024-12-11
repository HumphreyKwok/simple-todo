"use client";

import { updateTodo } from "@/action/backendAPI";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

type TProps = {
  todoId: string;
  currentContent: string;
  updateParentEditingIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const UpdateTodoForm = ({
  todoId,
  currentContent,
  updateParentEditingIds,
}: TProps) => {
  const [content, setContent] = useState(currentContent);

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();

    //TODO 1: remove the id associated with the todo in current row, from the parent's the EditingIds array

    updateParentEditingIds((prev) => {
      return prev.filter((editingId) => editingId !== todoId);
    });

    //TODO 2: update the database, using backend API

    const response = await updateTodo(todoId, content);

    if (response.status === 200) {
      console.log("updated success");
      return;
    }

    if (response.status === 500) {
      console.log("update failed, something wentworong");
      return;
    }
  };

  return (
    <form className="flex items-center gap-4" onSubmit={handleUpdate}>
      <button
        className="rounded-md bg-yellow-400 px-4 py-2 font-bold text-black outline-none transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-500"
        type="submit"
      >
        <FaCheck />
      </button>

      <input
        type="text"
        className="rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 outline-none ring-4 ring-neutral-300 focus:ring-yellow-500"
        placeholder={currentContent}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </form>
  );
};

export default UpdateTodoForm;
