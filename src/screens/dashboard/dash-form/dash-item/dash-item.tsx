import { FC } from "react";
import { RemoveIcon, ToggleIcon } from "../../../../components/ui/icons/icons";
import { IProjectTodo } from "../../../../shared/interfaces/project-todo.interface";
import styles from './dash-item.module.scss'

interface DashItemProp {
    todo: IProjectTodo,
    toggleTodo: (todoID: string) => void,
    removeTodo: (todoID: string) => void
}

export const DashItem : FC<DashItemProp> = ({todo, toggleTodo, removeTodo}) => {
    return (
        <div className={styles.dash_item}>
            <div className={styles.dash_item_header}>
                <ToggleIcon 
                onClick={() => toggleTodo(todo.id)}
                className={styles.dash_item_header_icon}
                />
                <RemoveIcon
                onClick={() => removeTodo(todo.id)}
                className={styles.dash_item_header_icon}
                />
            </div>
            <div>{todo.body}</div>
        </div>
    )
}