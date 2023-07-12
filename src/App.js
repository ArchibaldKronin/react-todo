import React from 'react';
import { Header } from "./components/header/header";
import { addCategory, selectAllCategories } from './store/category-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from './components/content/content';
import { List } from './components/common/list/list';
import { ToDoListItem } from './components/todo-list-item/todo-list-item';
import { CategoryList } from './components/category-list/category-list';
import { Route, Routes } from 'react-router-dom';
import { TaskList } from './components/task-list/task-list';

export const routes = {
  home: "/",
  tasks: "/tasks",
  categories: "/categories",
}

function App() {
  // const dispatch = useDispatch();

  // const handleClickAddCategoryButton = () => {
  //   dispatch(addCategory({ title: 'Test', description: 'jopa govno o4ko' }));
  // }



  return <>
    <Header />
    {/* <button onClick={handleClickAddCategoryButton}>добавить категорию</button> */}
    <Content>
      <Routes>
        <Route path={routes.home} element={<h1>Home</h1>} />
        <Route path={routes.tasks} element={<TaskList />} />
        <Route path={routes.categories} element={<CategoryList />} />
      </Routes>
      {/* <CategoryList /> */}
    </Content>
  </>;
}

export default App;
