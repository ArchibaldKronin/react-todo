import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";
import { RootState } from "./store";
import { fetchTodos } from "./effects/todos-effects";

// const initialState = {
//     1: {
//         id: 1,
//         title: 'Example task',
//         description: "Example task's description",
//         categoryId: 1,
//     },
// };

interface TodoState {
    data: {

        [key: number | string]: Todo;
    },
    loading: boolean
}

const initialState: TodoState = { data: {}, loading: false };

const taskSlice = createSlice({
    name: ' task',
    initialState,
    reducers: {
        addTask: {
            prepare: ({ title, description, categoryId }) => {
                return {
                    payload: {
                        id: Date.now(),
                        title,
                        description,
                        categoryId
                    }
                }
            },
            reducer: (state, action: PayloadAction<Todo>) => {
                state.data[action.payload.id] = action.payload
            }
        },
        deleteTask: (state, action) => {
            delete state.data[action.payload.id];
        },
        editTask: (state, action) => {
            state.data[action.payload.id] = action.payload
        },
        deleteAllTasksInCategory: (state, action) => {
            const deletableId = action.payload.id;
            for (let key in state) {
                if (state.data[key].categoryId == deletableId)
                    // delete state[key];
                    state.data[key].categoryId = 1;
            }
        }
    },
    extraReducers: (builder) => builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
        const todos = payload.reduce<TodoState['data']>((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});

        state.data = todos;
        state.loading = false;
    })
        .addCase(fetchTodos.pending, (state) => {
            state.loading = true;
        })
});

export const { addTask, deleteTask, editTask, deleteAllTasksInCategory } = taskSlice.actions;

export const selectAllTasksObject = (state: RootState) => state.tasks.data;

export const selectAllTasks = createSelector(selectAllTasksObject, tasks => Object.values(tasks));

export const selectTaskLoader = (state: RootState) => state.tasks.loading;

export default taskSlice.reducer;