import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchTodos = createAsyncThunk('fetchPosts' , async () => {
    const res = await axios.get(BASE_URL+'/todos');
    return res.data;
})
const postTodo = createAsyncThunk('postTodo' , async (title) => {
    const res = await axios.post(BASE_URL+'/todos', {
        id : nanoid(),
        title : title,
        userId : 1,
        completed:false,
    });
    return res.data
})

export {
    fetchTodos,postTodo
}