import React, { useState } from 'react';
import styles from './edit-task-modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../common/modal/modal';
import { ModalTitle } from '../common/modal/modal-title/modal-title';
import { ModalContent } from '../common/modal/modal-content/modal-content';
import { ModalActions } from '../common/modal/modal-actions/modal-actions';
import { ModalContentBlock } from '../common/modal/modal-content-block/modal-content-block';
import { Field } from '../common/field/field';
import { InputField } from '../common/modal/input-field/input-field';
import { SelectField } from '../common/modal/select-field/select-field';
import { TextAreaField } from '../common/modal/text-area-field/text-area-field';
import { selectAllCategories } from '../../store/category-slice';
import { editTask } from '../../store/task-slice';
import { Button } from '../common/button/button';

export const EditTaskModal = ({ onClose, propsTask }) => {
    const [task, setTask] = useState(propsTask);

    const dispatch = useDispatch();

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

    const handleSaveClick = () => {
        dispatch(editTask(task));
        onClose();
    }

    const categories = useSelector(selectAllCategories);
    const selectOptions = (categories.length > 0 ? categories.map(category => { return { value: category.id.toString(), label: category.title } }) : null);
    return (
        <Modal onClose={onClose}>
            <ModalTitle>Редактирование задачи</ModalTitle>
            <ModalContent>
                <form className={styles.form}>
                    <ModalContentBlock>
                        <Field legend={<>Имя<span className={styles.requiredStar}>*</span></>}>
                            <InputField id='title' placeholder='Введите имя задачи' value={task.title} onChange={handleChange} />
                        </Field>
                        <Field legend='Категория'>
                            <SelectField id='categoryId' options={selectOptions} onChange={handleSelectChange} />
                        </Field>
                    </ModalContentBlock>
                    <Field legend='Описание'>
                        <TextAreaField id='description' value={task.description} placeholder='Введите описание задачи' onChange={handleChange} />
                    </Field>
                </form>
            </ModalContent>
            <ModalActions>
                <Button variant='filled' className={styles.saveBtn}
                    disabled={!task.title} onClick={() => { handleSaveClick() }}>Сохранить</Button>
                <Button variant='outlined' onClick={onClose}>Закрыть</Button>
            </ModalActions>

        </Modal>
    )
}
