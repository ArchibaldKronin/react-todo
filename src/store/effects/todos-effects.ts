import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../types/todo";

export const fetchTodos = createAsyncThunk('fetch-todos', async () => {
    const response = await axios.get<{ todos: Todo[] }>('http://localhost:7000/todos');

    return response.data.todos;
})

export const createTodo = createAsyncThunk('create-todo', async (todo: Todo, { dispatch }) => {
    const response = await axios.post<string>('http://localhost:7000/todos/create', todo);

    dispatch(fetchTodos());

    console.log(response.data);
})

export const updateTodo = createAsyncThunk('update-todo', async (todo: Todo, { dispatch }) => {
    const response = await axios.put<string>('http://localhost:7000/todos/update', todo);

    dispatch(fetchTodos());

    console.log(response.data);
})

export const deleteTodo = createAsyncThunk('delete-todo', async (id: number, { dispatch }) => {
    const response = await axios.delete<string>(`http://localhost:7000/todos/delete/${id}`);

    dispatch(fetchTodos());

    console.log(response.data);
})

export const updateTodosCategoryToDefault = createAsyncThunk('update-todos-cat-to-default', async (id: { id: number }, { dispatch }) => {
    console.log(id);

    const response = await axios.put<string>(`http://localhost:7000/todos/updateTodosCategoryToDefault`, id);

    dispatch(fetchTodos());

    console.log(response.data);

})