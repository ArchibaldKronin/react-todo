import React, { useState } from 'react'
import { TaskListByCategoryIdProps } from './task-list-by-category-id.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { selectTasksByCategoryId } from '../../store/task-slice'
import { ListItem } from '../common/list/list-item/list-item'

export const TaskListByCategoryId
    = ({ categoryId }: TaskListByCategoryIdProps) => {

        const tasks = useSelector((state: RootState) => selectTasksByCategoryId(state, categoryId));

        const [expanded, setExpanded] = useState(false)

        return (
            <div>
                {tasks.map(task =>
                    <ListItem key={task.id}>
                        {task.title}
                    </ListItem>)}

            </div>
        )
    }
