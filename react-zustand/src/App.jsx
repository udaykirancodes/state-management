import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import useStore from "./state/store";
function App() {
  const todos = useStore((state) => state.todos);
  return (
    <div className="w-full h-[100vh] flex items-center justify-start pt-40 flex-col gap-5 bg-gray-800 color-white">
      <div className="w-96 p-5">
        <h1 className="text-center text-white text-white text-xl">
          Simple Todo App - React Zustand
        </h1>
      </div>
      <Input />
      {todos.map((todo) => {
        return <TodoItem key={todo?.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
