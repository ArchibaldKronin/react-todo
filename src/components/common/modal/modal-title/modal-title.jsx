import React from 'react';
import styles from './modal-title.module.scss'

export const ModalTitle = ({ children }) => {
    return (
        <h1 className={styles.heading}>{children}</h1>
    )
}
