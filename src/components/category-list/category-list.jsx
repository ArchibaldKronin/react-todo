import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, selectAllCategories, selectAllCategoriesObject } from '../../store/category-slice';
import { List } from '../common/list/list';
import { ToDoListItem } from '../todo-list-item/todo-list-item';
import { ListItem } from '../common/list/list-item/list-item';
import { ListItemText } from '../common/list/list-item-text/list-item-text';
import { ListItemActions } from '../common/list/list-item-actions/list-item-actions';
import styles from './category-list.module.scss';
import { Button } from '../common/button/button';
import { PenIcon } from '../common/icons/pen-icon';
import { BinIcon } from '../common/icons/bin-icon';
import { EditCategoryModal } from '../edit-category-modal/edit-category-modal';
import { YnModal } from '../yn-modal/yn-modal';
import { deleteAllTasksInCategory } from '../../store/task-slice';

export const CategoryList = () => {
    const categories = useSelector(selectAllCategories) // селектор для доступа к стору
    const categoriesObj = useSelector(selectAllCategoriesObject);
    // const dispatch = useDispatch(selectAllCategories);
    const dispatch = useDispatch();

    const [EditingModalSettings, setEditingModalSettings] = useState({
        isOpen: false,
        id: 0,
        title: '',
        description: '',
    });

    const [deleteModalSettings, setDeleteModalSettings] = useState({ isOpen: false, id: 0 });

    const handleDeleteClick = (id) => {
        setDeleteModalSettings({ isOpen: true, id: id });
    }

    const handleDeleteClose = () => {
        setDeleteModalSettings({ isOpen: false, id: 0 });
    }

    const handleDelete = (id) => {
        dispatch(deleteCategory({ id }));
        dispatch(deleteAllTasksInCategory({id}));
        setDeleteModalSettings({ isOpen: false, id: 0 });
    }

    const handleEditModalModalOpen = ({ id, title, description }) => {
        setEditingModalSettings({
            isOpen: true,
            id: id,
            title: title,
            description: description,
        });
    }

    const handleEditModalModalClose = () => {
        setEditingModalSettings({
            isOpen: false,
            id: 0,
            title: '',
            description: '',
        });
    }

    return (
        <>
            <List>
                {categories.map(category =>
                    category.id != 1 ?
                        <ListItem key={category.id}>
                            <ListItemText title={category.title} description={category.description} />
                            <ListItemActions>
                                <Button className={styles.iconButton} onClick={() => { handleEditModalModalOpen(category) }}>
                                    <PenIcon />
                                </Button>
                                <Button className={styles.iconButton} onClick={() => { handleDeleteClick(category.id) }}>
                                    <BinIcon />
                                </Button>
                            </ListItemActions>
                        </ListItem> : null


                )}
            </List>

            {EditingModalSettings.isOpen && <EditCategoryModal propsCategory={EditingModalSettings} onClose={handleEditModalModalClose} />}
            {deleteModalSettings.isOpen &&
                <YnModal onClose={handleDeleteClose} onSubmit={() => { handleDelete(deleteModalSettings.id) }}
                    question={`Вы уверены, что хотите удалить категорию "${categoriesObj[deleteModalSettings.id].title}"?`}>
                    Удаление категории
                </YnModal >}
        </>
    )
}
