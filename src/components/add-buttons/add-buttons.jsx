import React from 'react'
import { useBoolean } from '../../hooks/use-boolean';
import { routes } from '../../App';
import { AddCategoryModal } from '../add-category-modal/add-category-modal';
import styles from './add-buttons.module.scss';
import { Button } from '../common/button/button';
import { useLocation } from 'react-router-dom';
import { AddTaskModal } from '../add-task-modal/add-task-modal';

export const AddButtons = () => {
    const { pathname } = useLocation();

    const { value: isOpen, setTrue: handleOpen, setFalse: handleClose } = useBoolean();

    // const handleModalOpen = () => {
    //     setIsOpen(true);
    // }

    // const handleModalClose = () => {
    //     setIsOpen(false);
    // }

    const renderButton = () => {
        switch (pathname) {
            case routes.tasks:
                return (
                    <Button className={styles.addCategory} onClick={handleOpen}>
                        Добавить задачу
                    </Button>
                );
            case routes.categories:
                return (
                    <Button className={styles.addCategory} onClick={handleOpen}>
                        Добавить категорию
                    </Button>
                );
            case routes.home:
                return null;
        }
    }

    return (
        <>
            {/* <Button className={styles.addCategory} onClick={handleModalOpen}>
                Добавить {pathname === routes.tasks ? "задачу" : "категорию"}
            </Button>

            {isOpen && (pathname === routes.tasks ? "сосать пенис" : <AddCategoryModal onClose={handleModalClose} />)} */}
            {renderButton()}
            {isOpen &&
                // (pathname === routes.tasks ? "SOSI HUI" : <AddCategoryModal onClose={handleClose} />)}
                (pathname === routes.tasks ? <AddTaskModal onClose={handleClose}/> : <AddCategoryModal onClose={handleClose} />)}
        </>
    )
}
