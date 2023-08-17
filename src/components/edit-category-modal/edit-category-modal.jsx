import React, { useState } from 'react'
import { Button } from '../common/button/button'
import { ModalTitle } from '../common/modal/modal-title/modal-title'
import { ModalContent } from '../common/modal/modal-content/modal-content'
import { Modal } from '../common/modal/modal';
import styles from './edit-category-modal.module.scss'
import { InputField } from '../common/modal/input-field/input-field';
import { Field } from '../common/field/field';
import { TextAreaField } from '../common/modal/text-area-field/text-area-field';
import { ModalActions } from '../common/modal/modal-actions/modal-actions';
import { useDispatch } from 'react-redux';
import { editCategory } from '../../store/category-slice';
import { updateCategory } from '../../store/effects/category-effects';

// export const EditCategoryModal = ({ onClose, id, title, description }) => {
export const EditCategoryModal = ({ onClose, propsCategory: { id, title, description } }) => {
    const [category, setCategory] = useState({ id, title, description });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.id]: e.target.value,
        })
    }

    const handleSaveClick = () => {
        dispatch(updateCategory(category));
        onClose();
    }

    return (
        <div>
            <Modal onClose={onClose}>
                <ModalTitle>Редактирование категории</ModalTitle>
                <ModalContent>
                    <form className={styles.form}>
                        <Field legend={<>Имя<span className={styles.requiredStar}>*</span></>}>
                            <InputField id='title' onChange={handleChange}
                                value={category.title} maxLength={80} />
                        </Field>
                        <Field legend='Описание'>
                            <TextAreaField id='description' onChange={handleChange}
                                value={category.description} maxLength={170} />
                        </Field>
                    </form>
                </ModalContent>
                <ModalActions>
                    <Button variant='filled' className={styles.saveBtn}
                        disabled={!category.title} onClick={() => { handleSaveClick() }}>Сохранить</Button>
                    <Button variant='outlined' onClick={onClose}>Закрыть</Button>
                </ModalActions>
            </Modal>
        </div>
    )
}
