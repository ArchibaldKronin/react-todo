import React from 'react'
import { List } from '../../components/common/list/list'
import { useSelector } from 'react-redux'
import { selectAllTasks, selectTaskLoader } from '../../store/task-slice'
import { selectAllCategories, selectCategoriesLoader } from '../../store/category-slice'
import { Loader } from '../../components/loader/loader'
import { Category } from '../../types/category'
import { ListItem } from '../../components/common/list/list-item/list-item'
import { TaskListByCategoryId } from '../../components/task-list-by-category-id/task-list-by-category-id'
import { ListItemText } from '../../components/common/list/list-item-text/list-item-text'

export const HomePage = () => {
    const todos = useSelector(selectAllTasks);
    const isTaskLoading = useSelector(selectTaskLoader);

    const categories = useSelector(selectAllCategories) as Category[];
    const isCategoriesLoading = useSelector(selectCategoriesLoader);

    const isLoading = isTaskLoading && isCategoriesLoading;

    return (
        <List>
            {isLoading ? <Loader /> : categories.map((category) =>
                <ListItem key={category.id}>
                    <ListItemText title={category.title} description=' ' />
                    <TaskListByCategoryId categoryId={category.id}/>
                </ListItem>)}


        </List>
    )
}
