import { FC } from "react";
import { RemoveIcon, ToggleIcon } from "../../../../components/ui/icons/icons";
import { ITodo } from "../../../../shared/interfaces/todo.interfase";
import styles from './todo-item.module.scss'

interface TodoItemProp {
    todo: ITodo,
    handleToggle: (id: string | number) => void,
    handleRemoveTodo: (id: string | number) => void
}

export const TodoItem : FC<TodoItemProp> = ({todo, handleToggle, handleRemoveTodo}) => {
    return (
        <div className={styles.todo_item}>
            <div className={styles.todo_item_controller}>
                <ToggleIcon 
                className={`${styles.todo_item_controller_icon} ${styles.toggle}`}
                onClick={() => handleToggle(todo.id)}
                />
                <RemoveIcon
                className={`${styles.todo_item_controller_icon} ${styles.remove}`}
                onClick={() => handleRemoveTodo(todo.id)} 
                />
            </div>
            <div className={styles.todo_item_title}>{todo.title}</div>
            <div className={styles.todo_item_body}>{todo.body}</div>
        </div>
    )
}