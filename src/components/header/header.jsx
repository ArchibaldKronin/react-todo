import React, { useState } from 'react';
import styles from './header.module.scss';
import { AddCategoryModal } from '../add-category-modal/add-category-modal';
import cn from 'classnames';
import { Button } from '../common/button/button';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../../App';
import { AddButtons } from '../add-buttons/add-buttons';

// cn(styles.header, { [styles.underline]: active })
// cn(styles.header, active && styles.underline);

const changeActiveStyle = ({ isActive }) => isActive ? styles.active : undefined;

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const { pathname } = useLocation();

    // const handleModalOpen = () => {
    //     setIsOpen(true);
    // }

    // const handleModalClose = () => {
    //     setIsOpen(false);
    // }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <NavLink to={routes.home}>ToDo List</NavLink>
            </div>

            <div className={styles.menu}>
                <div>
                    <NavLink to={routes.tasks} className={changeActiveStyle}>Задачи</NavLink>
                </div>
                <div className={styles.stick}></div>
                <div>
                    <NavLink to={routes.categories} className={changeActiveStyle}>Категории</NavLink>
                </div>
            </div>
            <AddButtons />
            {/* <Button className={styles.addCategory} onClick={handleModalOpen}>
                Добавить {pathname === routes.tasks ? "задачу" : "категорию"}
            </Button>

            {isOpen && (pathname === routes.tasks ? "сосать пенис" : <AddCategoryModal onClose={handleModalClose} />)} */}
        </header>
    )
}
