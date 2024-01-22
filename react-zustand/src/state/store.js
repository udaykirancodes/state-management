import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist, createJSONStorage } from "zustand/middleware";
const useStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) =>
        set((state) => ({
          ...state,
          todos: [...state.todos, { id: uuidv4(), text: text }],
        })),
      removeTodo: (id) =>
        set((state) => ({
          ...state,
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      editTodo: (id, text) =>
        set((state) => ({
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, text: text };
            }
            return todo;
          }),
        })),
    }),
    { name: "zustand", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useStore;
