import React from 'react';
import styles from './list.module.scss';

export const List = ({ children }) => {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    )
}
