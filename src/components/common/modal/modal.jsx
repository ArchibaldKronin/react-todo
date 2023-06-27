import React from 'react';
import styles from './modal.module.scss';
import { Button } from '../button/button';
import { CrossIcon } from '../icons/cross-icon';

export const Modal = ({ onClose, children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <Button className={styles.crossIconContainer} onClick={onClose}>
                    <CrossIcon />
                </Button>
                {children}
            </div>
        </div>
    )
}
