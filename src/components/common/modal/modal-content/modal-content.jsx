import React from 'react';
import styles from './modal-content.module.scss';

export const ModalContent = ({ children }) => {
  return (
    <div className={styles.modalContent}>{children}</div>
  )
}
