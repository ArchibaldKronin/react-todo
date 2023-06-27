import React, { useState } from 'react';
import styles from './header.module.scss';
import { AddCategoryModal } from '../add-category-modal/add-category-modal';
import cn from 'classnames';
import { Button } from '../common/button/button';

// cn(styles.header, { [styles.underline]: active })
// cn(styles.header, active && styles.underline);

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(true);
    }

    const handleModalClose = () => {
        setIsOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>ToDo List</div>
            <div className={styles.menu}>Категории</div>
            <Button className={styles.addCategory} onClick={handleModalOpen}>
                Добавить категорию
            </Button>

            {isOpen && <AddCategoryModal onClose={handleModalClose} />}
        </header>
    )
}
