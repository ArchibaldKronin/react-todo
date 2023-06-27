import React from 'react'
import styles from './button.module.scss';
import cn from 'classnames';

const variants = {
    filled: styles.filled,
    outlined: styles.outlined,
    default: styles.default,
}

export const Button = ({ variant = 'default', children, className, ...props }) => {
    const variantClassName = variants[variant];

    return (
        <button  className={cn(styles.button, variantClassName, className)} {...props}>
            {children}
            </button>
    )
}
