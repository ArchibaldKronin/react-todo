import React from 'react';
import styles from './content.module.scss';

export const Content = ({ children }) => {
    return (
        <div className={styles.content}>{children}</div>
    )
}
