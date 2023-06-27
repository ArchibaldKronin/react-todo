import React from 'react';
import styles from './todo-list-item.module.scss';
import { Button } from '../common/button/button';
import { BinIcon } from '../common/icons/bin-icon';
import { PenIcon } from '../common/icons/pen-icon';
import { ListItem } from '../common/list/list-item/list-item';
import { ListItemText } from '../common/list/list-item-text/list-item-text';
import { ListItemActions } from '../common/list/list-item-actions/list-item-actions';

export const ToDoListItem = ({ title, description }) => {
    return (
        <ListItem>
            <ListItemText title={title} description={description} />
            <ListItemActions />
        </ListItem>
    )
}
