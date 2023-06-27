import React from 'react';
import styles from './modal-text.module.scss';

export const ModalText = ({ children }) => {
    return (
        <p className={styles.text}>{children}</p>
    )
}
