import React from 'react';
import styles from './input-field.module.scss';
import cn from 'classnames';

export const InputField = ({ className, ...props }) => {
    return (
        <input className={cn(styles.input, className)} {...props}></input>
    )
}
