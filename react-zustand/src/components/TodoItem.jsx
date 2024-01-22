import React, { useState } from "react";
import useStore from "../state/store";
export default function TodoItem({ todo }) {
  const removeTodo = useStore((state) => state.removeTodo);
  const editTodo = useStore((state) => state.editTodo);
  const deleteItem = () => {
    removeTodo(todo.id);
  };
  const editItem = () => {
    const val = prompt("Change Todo Here 👇", todo.text);
    editTodo(todo.id, val);
  };
  return (
    <div className="w-96 flex" style={{ justifyContent: "space-between" }}>
      <div className="w-auto">
        <p className="text-white w-auto text-md hover:cursor-pointer">
          {todo?.text}
        </p>
      </div>
      <div className="w-auto flex gap-x-3 text-white space pl-3">
        <span onClick={editItem} className="bg-red-600 px-2 rounded-md">
          Edit
        </span>
        <span onClick={deleteItem} className="bg-red-600 px-2 rounded-md">
          delete
        </span>
      </div>
    </div>
  );
}
