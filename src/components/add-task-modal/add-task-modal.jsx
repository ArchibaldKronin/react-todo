import React, { useState } from 'react';
import styles from './add-task-modal.module.scss';
import { Modal } from '../common/modal/modal';
import { ModalText } from '../common/modal/modal-text/modal-text';
import { ModalContent } from '../common/modal/modal-content/modal-content';
import { Field } from '../common/field/field';
import { InputField } from '../common/modal/input-field/input-field';
import { TextAreaField } from '../common/modal/text-area-field/text-area-field';
import { ModalTitle } from '../common/modal/modal-title/modal-title';
import { ModalActions } from '../common/modal/modal-actions/modal-actions';
import { Button } from '../common/button/button';
import { ModalContentBlock } from '../common/modal/modal-content-block/modal-content-block';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCategories, selectAllCategoriesObject } from '../../store/category-slice';
import { SelectField } from '../common/modal/select-field/select-field';
import { addTask } from '../../store/task-slice';
import { createTodo } from '../../store/effects/todos-effects';

export const AddTaskModal = ({ onClose }) => {
    const categoriesObj = useSelector(selectAllCategoriesObject);
    const categories = useSelector(selectAllCategories);
    const selectOptions = (categories.length > 0 ? categories.map(category => { return { value: category.id.toString(), label: category.title } }) : null);
    const dispatch = useDispatch();

    const [task, setTask] = useState({
        title: "",
        description: '',
        categoryId: '1',
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.id]: e.target.value,
        })
    }

    const handleSelectChange = (e) => {
        setTask({
            ...task,
            categoryId: e.value
        })
    }

    const handleSubmitClick = () => {
        // dispatch(addTask(task));
        dispatch(createTodo(task));
        onClose();
    }

    // console.log(task);


    return (
        <Modal onClose={onClose}>
            <ModalTitle>Создание задачи</ModalTitle>
            <ModalContent>
                <form className={styles.form}>
                    <ModalContentBlock>
                        <Field legend={<>Имя<span className={styles.requiredStar}>*</span></>}>
                            <InputField onChange={handleChange} id='title' placeholder='Введите имя задачи' value={task.title} />
                        </Field>
                        {/* <Field legend='Категория'>
                            <InputField placeholder='Выберите категорию' />
                        </Field> */}
                        <Field legend='Категория'>
                            <SelectField id='categoryId' onChange={handleSelectChange} options={selectOptions} />
                        </Field>
                    </ModalContentBlock>
                    <Field legend='Описание'>
                        <TextAreaField onChange={handleChange} id='description' value={task.description} placeholder='Введите описание задачи' />
                    </Field>
                </form>
            </ModalContent>

            <ModalActions>
                <Button variant='filled' onClick={handleSubmitClick} className={styles.createBtn} disabled={!task.title}>Создать</Button>
                <Button variant='outlined' onClick={onClose}>Закрыть</Button>
            </ModalActions>
        </Modal>
    )
}
