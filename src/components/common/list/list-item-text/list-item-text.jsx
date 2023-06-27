import React from 'react';
import styles from './list-item-text.module.scss';

export const ListItemText = ({ title, description }) => {
    return (
        <div className={styles.text}>
            <h2 className={styles.category}>{title}</h2>
            <p className={styles.description}>{description || '-'}</p>
        </div>
    )
}
