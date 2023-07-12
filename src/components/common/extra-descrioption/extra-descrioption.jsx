import React from 'react';
import styles from './extra-descrioption.module.scss';

export const ExtraDescription = ({ icon, children }) => {
    return (
        <div className={styles.extraDescription}>
            <div>{icon}</div>
            <div>{children}</div>
        </div>
    )
}
