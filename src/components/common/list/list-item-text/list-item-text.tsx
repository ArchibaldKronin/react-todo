import React from 'react';
import styles from './list-item-text.module.scss';

interface ListItemTextProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export const ListItemText = ({ title, description, children = null }: ListItemTextProps) => {
    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <h2 className={styles.category}>{title}</h2>
                {children}
            </div>
            <p className={styles.description}>{description || '-'}</p>
        </div>
    )
}

