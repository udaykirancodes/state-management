import React from "react"
import { useDispatch } from "react-redux"
import { removeTodo, editTodo } from "../redux/slices/todoSlices"

export default function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(removeTodo(todo.id))
    }
    const editItem = () => {
        const val = prompt("Change Todo Here 👇", todo.text)
        dispatch(editTodo({ id: todo.id, text: val }))
    }
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
                <span
                    onClick={deleteItem}
                    className="bg-red-600 px-2 rounded-md"
                >
                    delete
                </span>
            </div>
        </div>
    )
}
