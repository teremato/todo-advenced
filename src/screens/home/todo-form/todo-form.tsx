import { FC, useState } from "react"
import { ModalWindow } from "../../../components/ui/modal/modal"
import { ITodo } from "../../../shared/interfaces/todo.interfase"
import styles from './todo-form.module.scss'
import { TodoItemModal } from "./todo-item-modal/todo-item-modal"
import { TodoItem } from "./todo-item/todo-item"


export const TodoForm : FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [todos, setTodos] = useState<Array<ITodo>>([])
    
    return (
        <div className={styles.todo_form}>
            <div className={styles.todo_form_header}>
                <div>Мои задачи</div>
                <div className={styles.todo_count}>{todos.length}</div>
            </div>
            <button onClick={() => setIsOpen(true)} className={styles.add_todo_btn}>+</button>
            <div className={styles.todo_form_list}>
            {
                todos.map((todo) => {
                    return <TodoItem todo={todo}/>
                })
            }
            </div>
            <ModalWindow isOpen={isOpen}>
                <TodoItemModal setIsOpen={setIsOpen}/>
            </ModalWindow>
        </div>
    )
}