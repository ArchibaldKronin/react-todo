import React from 'react';
import styles from './field.module.scss';

export const Field = ({ legend, children }) => {
    return (
        <fieldset className={styles.field}>
            <legend className={styles.legend}>{legend}</legend>
            {children}
        </fieldset>
    )
}
