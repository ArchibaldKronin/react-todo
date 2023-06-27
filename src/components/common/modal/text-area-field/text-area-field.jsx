import React from 'react';
import styles from './text-area-field.module.scss';
import cn from 'classnames';

export const TextAreaField = ({ className, ...props }) => {
    return (
        <textarea {...props} className={cn(styles.textArea, className)} />
    )
}
