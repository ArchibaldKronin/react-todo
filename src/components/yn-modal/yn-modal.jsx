import React from 'react';
import styles from './yn-modal.module.scss';
import { Modal } from '../common/modal/modal';
import { ModalTitle } from '../common/modal/modal-title/modal-title';
import { ModalContent } from '../common/modal/modal-content/modal-content';
import { ModalText } from '../common/modal/modal-text/modal-text';
import { ModalActions } from '../common/modal/modal-actions/modal-actions';
import { Button } from '../common/button/button';

export const YnModal = ({ onSubmit, onClose, question, children }) => {
    return (
        <>
            <Modal onClose={onClose}>
                <ModalTitle>{children}</ModalTitle>
                <ModalContent>
                    <ModalText>{question}</ModalText>
                </ModalContent>
                <ModalActions>
                    <Button onClick={onSubmit} className={styles.ynButtons} variant='filled'>Да</Button>
                    <Button onClick={onClose} className={styles.ynButtons} variant='outlined'>Нет</Button>
                </ModalActions>
            </Modal>
        </>
    )
}
