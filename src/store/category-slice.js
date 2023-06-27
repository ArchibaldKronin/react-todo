import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: [
        { id: 1, title: "Default", description: "Default description" },
    ]
};

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        //Создание редьюсера объектом 
        addCategory: {
            prepare: ({ title, description }) => {
                return {
                    payload: {
                        id: Date.now(),
                        title,
                        description,
                    }
                }
            },
            reducer: (state, action) => {
                state.entities.push(action.payload);
            }
        },
        deleteCategory: (state, action) => {
            const id = action.payload.id;

            state.entities = state.entities.filter(category => category.id !== id)
        },
        editCategory: (state, action) => {
            const id = action.payload.id;

            state.entities = state.entities.filter(category => category.id !== id)
            state.entities.push(action.payload);
        }
        // создание редьюсера функцией
        // addCategory: (state, action) => {
        //     const { title, description } = action.payload;

        //     state.entities.push({ title, description, id: Date.now() })
        // }
    }
});


export const { addCategory, deleteCategory, editCategory } = categoriesSlice.actions;

export const selectAllCategories = (state) => state.categories.entities;

export default categoriesSlice.reducer;