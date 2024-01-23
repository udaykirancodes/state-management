import { useDispatch, useSelector } from "react-redux"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";

import { fetchTodos } from "./redux/slices/actions";


function App() {
  const todos = useSelector((state) => state.todoSlices.todos) || [];
  const state = useSelector((state) => state.todoSlices.state) || null;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  },[]);

  const get_data = async () => {
    console.log('Requesting : ');
    const data = await fetchTodos();
    console.log(data);
  }

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-start pt-40 flex-col gap-5 bg-gray-800 color-white">
      <div className="w-96 p-5">
        <h1 className="text-center text-white text-white text-xl">{state ? state : "Simple Todo App - React Redux"}</h1>
      </div>
      <Input/>
      {
        todos && todos.map((todo) => {
          return <TodoItem key={todo?.id} todo={todo} />
        }) 
      }
    </div>
  )
}

export default App
