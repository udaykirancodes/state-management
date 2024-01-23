import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"

import { fetchTodos , postTodo} from "./actions";

const initialState = {
    todos: [],
    state : null 
}

export const todoSlice = createSlice({
    name: "Todo-Slice",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload,
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
                        title: action.payload.title,
                    }
                }
                return todo
            })
            console.log("deleted successfully")
        },
    },
    extraReducers : (builder) => {
        builder.addCase(fetchTodos.fulfilled , (state , action) => {
            console.log(action.payload);
            state.todos = action.payload
            state.state = null;
        })
        .addCase(fetchTodos.rejected , (state , action) => {
            console.log();
        })
        .addCase(fetchTodos.pending , (state , action) => {
            state.state = 'Loading...'
        })
        .addCase(postTodo.pending , (state , action) => {
            state.state = 'Uploading...'
        })
        .addCase(postTodo.fulfilled , (state, action) => {
            state.todos.push(action.payload);
            state.state = null
        })
    }
})

export const { addTodo, removeTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer
