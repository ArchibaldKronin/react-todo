import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './category-slice';
import taskReducer from './task-slice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        tasks: taskReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;