import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    1: {
        id: 1,
        title: 'Нет категории',
        description: 'Default description'
    },
};

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
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
            reducer: (state, action) => { state[action.payload.id] = action.payload }
        },
        deleteCategory: (state, action) => {
            delete state[action.payload.id];
        },
        editCategory: (state, action) => {
            state[action.payload.id] = action.payload
        }
    },
})

export const { addCategory, deleteCategory, editCategory } = categoriesSlice.actions;

export const selectAllCategoriesObject = (state) => state.categories;

export const selectAllCategories = createSelector(selectAllCategoriesObject, categories => Object.values(categories));

export default categoriesSlice.reducer;

// const initialState = {
//     entities: [
//         { id: 1, title: "Default", description: "Default description" },
//     ]
// };

// const categoriesSlice = createSlice({
//     name: 'category',
//     initialState,
//     reducers: {
//         //Создание редьюсера объектом
//         addCategory: {
//             prepare: ({ title, description }) => {
//                 return {
//                     payload: {
//                         id: Date.now(),
//                         title,
//                         description,
//                     }
//                 }
//             },
//             reducer: (state, action) => {
//                 state.entities.push(action.payload);
//             }
//         },
//         deleteCategory: (state, action) => {
//             const id = action.payload.id;

//             state.entities = state.entities.filter(category => category.id !== id)
//         },
//         editCategory: (state, action) => {
//             // const id = action.payload.id;
//             // state.entities = state.entities.filter(category => category.id !== id)
//             // state.entities.push(action.payload);
//             const { id, title, description } = action.payload;
//             const requiredCategory = state.entities.find((category) => category.id === id)

//             if (requiredCategory) {
//                 requiredCategory.title = title;
//                 requiredCategory.description = description;
//             }
//         }
//         // создание редьюсера функцией
//         // addCategory: (state, action) => {
//         //     const { title, description } = action.payload;

//         //     state.entities.push({ title, description, id: Date.now() })
//         // }
//     }
// });



// export const selectAllCategories = (state) => state.categories.entities;
// export const selectAllCategories = (state) => Object.values(state.categories);

