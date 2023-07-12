import React, { useState } from 'react';
import styles from './task-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectAllTasks, selectAllTasksObject } from '../../store/task-slice';
import { ListItem } from '../common/list/list-item/list-item';
import { ListItemText } from '../common/list/list-item-text/list-item-text';
import { List } from '../common/list/list';
import { ListItemActions } from '../common/list/list-item-actions/list-item-actions';
import { Button } from '../common/button/button';
import { PenIcon } from '../common/icons/pen-icon';
import { BinIcon } from '../common/icons/bin-icon';
import { FolderIcon } from '../common/icons/folder-icon';
import { selectAllCategoriesObject } from '../../store/category-slice';
import { ExtraDescription } from '../common/extra-descrioption/extra-descrioption';
import { YnModal } from '../yn-modal/yn-modal';
import { EditTaskModal } from '../edit-task-modal/edit-task-modal';

export const TaskList = () => {
    const tasks = useSelector(selectAllTasks);
    const tasksObj = useSelector(selectAllTasksObject);
    const dispatch = useDispatch();

    //ЭТО ПЕРЕДЕЛАТЬ НАВЕРНОЕ
    const categoriesObj = useSelector(selectAllCategoriesObject);
    ////////////////////////////////////

    const [EditingModalSettings, setEditingModalSettings] = useState({
        isOpen: false,
        id: 0,
        title: '',
        description: '',
        categoryId: '',
    });

    const [deleteModalSettings, setDeleteModalSettings] = useState({ isOpen: false, id: 0 });

    const handleDeleteClick = (id) => {
        setDeleteModalSettings({ isOpen: true, id: id });
    }

    const handleDeleteClose = () => {
        setDeleteModalSettings({ isOpen: false, id: 0 });
    }

    const handleDelete = (id) => {
        dispatch(deleteTask({ id }));
        setDeleteModalSettings({ isOpen: false, id: 0 });
    }

    const handleEditModalModalOpen = ({ id, title, description, categoryId }) => {
        setEditingModalSettings({
            isOpen: true,
            id: id,
            title: title,
            description: description,
            categoryId: categoryId,
        });
    }

    const handleEditModalModalClose = () => {
        setEditingModalSettings({
            isOpen: false,
            id: 0,
            title: '',
            description: '',
            categoryId: '',
        });
    }

    return (
        <>
            <List>
                {tasks.map(task =>
                    <ListItem key={task.id}>
                        <ListItemText title={task.title} description={task.description} >
                            {
                                task.categoryId != 1 &&
                                <ExtraDescription icon={<FolderIcon />}>
                                    {categoriesObj[task.categoryId].title}
                                </ExtraDescription>
                            }
                            {/* <ExtraDescription icon={<FolderIcon />}>
                                {categoriesObj[task.categoryId].title}
                            </ExtraDescription> */}
                        </ListItemText>
                        <ListItemActions>
                            <Button className={styles.iconButton} onClick={()=>{handleEditModalModalOpen(task)}}>
                                <PenIcon />
                            </Button>
                            <Button className={styles.iconButton} onClick={() => { handleDeleteClick(task.id) }}>
                                <BinIcon />
                            </Button>
                        </ListItemActions>

                    </ListItem>)}
            </List>

            {EditingModalSettings.isOpen && <EditTaskModal propsTask={EditingModalSettings} onClose={handleEditModalModalClose}/>}
            {deleteModalSettings.isOpen &&
                <YnModal onClose={handleDeleteClose} onSubmit={()=>{handleDelete(deleteModalSettings.id)}}
                question={`Вы уверены, что хотите удалить задачу "${tasksObj[deleteModalSettings.id].title}"?`}>
                    Удаление задачи
                </YnModal>}
        </>
    )
}
