import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "Todo-Slice",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
            })
            console.log("added successfully")
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
            console.log("deleted successfully")
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (action.payload.id === todo.id) {
                    return {
                        ...todo,
                        text: action.payload.text,
                    }
                }
                return todo
            })
            console.log("deleted successfully")
        },
    },
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
