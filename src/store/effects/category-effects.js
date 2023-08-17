import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk('fetch-category', async () => {
    const response = await axios.get('http://localhost:7000/categories');

    return response.data.categories;
});

export const createCategory = createAsyncThunk('create-category', async (category, { dispatch }) => {
    const response = await axios.post('http://localhost:7000/categories/create', category);

    dispatch(fetchCategories());

    // console.log(response.data);
})

export const updateCategory = createAsyncThunk('update-category', async (category, { dispatch }) => {
    const response = await axios.put('http://localhost:7000/categories/update', category);

    dispatch(fetchCategories());

    // console.log(response.data);
})

export const deleteCategoryAsync = createAsyncThunk('delete-category', async (id, {dispatch}) => {
    const response = await axios.delete(`http://localhost:7000/categories/delete/${id}`);

    dispatch(fetchCategories());

    // console.log(response.data);
})