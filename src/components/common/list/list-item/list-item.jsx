import React from 'react';
import styles from './list-item.module.scss';

export const ListItem = ({ children }) => {
    return (
        <li className={styles.listItem}>
            {children}
        </li>
    )
}
