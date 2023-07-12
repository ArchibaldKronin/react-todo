import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './category-slice';
import taskReducer from './task-slice';

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        tasks: taskReducer,
    },
})