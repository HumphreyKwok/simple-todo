"use client";

import { addTodo } from "@/action/backendAPI";
import { useState } from "react";

const backendAPI = {
  addTodo: addTodo,
};

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newTodo.trim() === "") {
      return;
    }

    const response = await backendAPI.addTodo(newTodo);

    if (response.status === 201) {
      console.log(response.message);
      setNewTodo("");
    } else {
      console.log(
        `Something went wrong: ${response.status} - ${response.error}`,
      );
    }
  };

  return (
    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 outline-none ring-4 ring-neutral-300 focus:ring-yellow-500"
        placeholder="new todo..."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />

      <button
        type="submit"
        className="rounded-md bg-yellow-400 px-4 py-2 font-bold text-black outline-none transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-500"
      >
        Add TODO
      </button>
    </form>
  );
};

export default AddTodoForm;
