import { FC } from "react";
import { RemoveIcon, ToggleIcon } from "../../../../components/ui/icons/icons";
import { ITodo } from "../../../../shared/interfaces/todo.interfase";
import styles from './todo-item.module.scss'

interface TodoItemProp {
    todo: ITodo
}

export const TodoItem : FC<TodoItemProp> = ({todo}) => {
    return (
        <div className={styles.todo_item}>
            <div className={styles.todo_item_controller}>
                <ToggleIcon 
                className={`${styles.todo_item_controller_icon} ${styles.toggle}`}
                />
                <RemoveIcon
                className={`${styles.todo_item_controller_icon} ${styles.remove}`}
                />
            </div>
            <div className={styles.todo_item_title}>{todo.title}</div>
            <div className={styles.todo_item_body}>{todo.body}</div>
        </div>
    )
}