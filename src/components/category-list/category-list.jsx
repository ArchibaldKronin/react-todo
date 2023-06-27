import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, selectAllCategories } from '../../store/category-slice';
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

export const CategoryList = () => {
    const categories = useSelector(selectAllCategories) // селектор для доступа к стору
    const dispatch = useDispatch(selectAllCategories);

    const [isOpenEditingModal, setIsOpenEditingModal] = useState({
        isOpen: false,
        id: 0,
        title: '',
        description: '',
    });

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState({ isOpen: false, id: 0 });

    const handleDeleteClick = (id) => {
        setIsOpenDeleteModal({ isOpen: true, id: id });
    }

    const handleDeleteClose = () => {
        setIsOpenDeleteModal({ isOpen: false, id: 0 });
    }

    const handleDelete = (id) => {
        dispatch(deleteCategory({ id }));
        setIsOpenDeleteModal({ isOpen: false, id: 0 });
    }

    const handleEditModalModalOpen = ({ id, title, description }) => {
        setIsOpenEditingModal({
            isOpen: true,
            id: id,
            title: title,
            description: description,
        });
    }

    const handleEditModalModalClose = () => {
        setIsOpenEditingModal({
            isOpen: false,
            id: 0
        });
    }

    return (
        <>
            <List>
                {categories.map(category =>
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

                    </ListItem>
                )}
            </List>

            {isOpenEditingModal.isOpen && <EditCategoryModal propsCategory={isOpenEditingModal} onClose={handleEditModalModalClose} />}
            {isOpenDeleteModal.isOpen &&
                <YnModal onClose={handleDeleteClose} onSubmit={() => { handleDelete(isOpenDeleteModal.id) }}
                question={'Вы уверены, что хотите удалить данную категорию?'}>
                    Удаление категории
                </YnModal >}
        </>
    )
}
