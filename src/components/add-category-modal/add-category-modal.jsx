import React, { useState } from 'react';
import { Button } from '../common/button/button';
import { Modal } from '../common/modal/modal';
import { ModalTitle } from '../common/modal/modal-title/modal-title';
import { ModalActions } from '../common/modal/modal-actions/modal-actions';
import styles from './add-category-modal.module.scss';
import { ModalContent } from '../common/modal/modal-content/modal-content';
import { Field } from '../common/field/field';
import { InputField } from '../common/modal/input-field/input-field';
import { TextAreaField } from '../common/modal/text-area-field/text-area-field';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../store/category-slice';
import { createCategory } from '../../store/effects/category-effects';

export const AddCategoryModal = ({ onClose }) => {
    const [category, setCategory] = useState({
        title: '',
        description: '',
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmitClick = () => {
        // dispatch(addCategory(category));
        dispatch(createCategory(category));
        onClose();
    }

    return (
        <Modal onClose={onClose} >
            <ModalTitle>Создание категории</ModalTitle>

            <ModalContent>
                <form className={styles.form}>
                    <Field legend={<>Имя<span className={styles.requiredStar}>*</span></>}>
                        <InputField
                            onChange={handleChange} id='title' value={category.title} placeholder='Введите имя категории' maxLength={80}>

                        </InputField>
                    </Field>
                    <Field legend='Описание'>
                        <TextAreaField
                            onChange={handleChange} id='description' value={category.description} placeholder='Введите описание' maxLength={170}>

                        </TextAreaField>
                    </Field>
                </form>

            </ModalContent>

            <ModalActions>
                <Button onClick={handleSubmitClick} variant='filled' className={styles.createBtn} disabled={!category.title}>Создать</Button>
                <Button variant='outlined' onClick={onClose}>Закрыть</Button>
            </ModalActions>
        </Modal >
    )
}
