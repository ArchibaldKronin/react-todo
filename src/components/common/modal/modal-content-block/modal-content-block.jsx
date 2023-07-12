import React from 'react';
import styles from './modal-content-block.module.scss'

export const ModalContentBlock = ({children}) => {
  return (
    <div className={styles.content}>{children}</div>
  )
}
