import React, { useState } from "react";
import useStore from "../state/store";

export default function Input() {
  const addTodo = useStore((state) => state.addTodo);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <div className="w-96 h-8 flex items-center gap-x-3 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-full rounded-md px-3 outline-none"
          placeholder="Add todo here"
        />
        <button
          onClick={handleClick}
          className="h-full bg-slate-100 px-4 rounded-md hover:bg-slate-300"
        >
          Add
        </button>
      </div>
    </div>
  );
}
