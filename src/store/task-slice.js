import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    1: {
        id: 1,
        title: 'Example task',
        description: "Example task's description",
        categoryId: 1,
    },
};

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
            reducer: (state, action) => { state[action.payload.id] = action.payload }
        },
        deleteTask: (state, action) => {
            delete state[action.payload.id];
        },
        editTask: (state, action) => {
            state[action.payload.id] = action.payload
        },
        deleteAllTasksInCategory: (state, action) => {
            const deletableId = action.payload.id;
            for (let key in state) {
                if (state[key].categoryId == deletableId)
                    // delete state[key];
                    state[key].categoryId = 1;
            }
        }
    }
});

export const { addTask, deleteTask, editTask, deleteAllTasksInCategory } = taskSlice.actions;

export const selectAllTasksObject = (state) => state.tasks;

export const selectAllTasks = createSelector(selectAllTasksObject, tasks => Object.values(tasks));

export default taskSlice.reducer;