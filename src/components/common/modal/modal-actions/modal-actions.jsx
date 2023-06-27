import React from 'react';
import styles from './modal-actions.module.scss';

export const ModalActions = ({ children }) => {
    return (
        <div className={styles.modalActions}>{children}</div>
    )
}
