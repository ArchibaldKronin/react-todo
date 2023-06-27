import React from 'react';
import styles from './list-item-actions.module.scss';
import { Button } from '../../button/button';
import { PenIcon } from '../../icons/pen-icon';
import { BinIcon } from '../../icons/bin-icon';

export const ListItemActions = ({children}) => {
    return (
        <div className={styles.actions}>
            {children}
        </div>
    )
}
