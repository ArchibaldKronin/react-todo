import React, { useEffect, useState } from 'react';
import { Header } from "./components/header/header";
import { addCategory, selectAllCategories } from './store/category-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from './components/content/content';
import { List } from './components/common/list/list';
import { ToDoListItem } from './components/todo-list-item/todo-list-item';
import { CategoryList } from './components/category-list/category-list';
import { Route, Routes } from 'react-router-dom';
import { TaskList } from './components/task-list/task-list';
import { HomePage } from './pages/home-page/home-page';
import { fetchCategories } from './store/effects/category-effects';
import { fetchTodos } from './store/effects/todos-effects';
import { Loader } from './components/loader/loader';

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

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([dispatch(fetchCategories()), dispatch(fetchTodos())]).then(() => {
      setIsLoading(false);
    });
  }, []);



  return <>
    <Header />
    {/* <button onClick={handleClickAddCategoryButton}>добавить категорию</button> */}
    {isLoading ? <Loader /> :
      <Content>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.tasks} element={<TaskList />} />
          <Route path={routes.categories} element={<CategoryList />} />
        </Routes>
      </Content>
    }
  </>;
}

export default App;
