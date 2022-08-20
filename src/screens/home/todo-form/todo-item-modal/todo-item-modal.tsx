import { FC, useState } from "react"
import { ClosedIcon } from "../../../../components/ui/icons/icons"
import { ITodo } from "../../../../shared/interfaces/todo.interfase"
import styles from './todo-item-modal.module.scss'

interface TodoItemModalProp {
    setIsOpen: Function,
    addTodo: (todo: ITodo) => void
}

export const TodoItemModal : FC<TodoItemModalProp> = ({setIsOpen, addTodo}) => {

    const [userInput, setUserInput] = useState({
        title: '',
        body: ''
    })

    return (
        <div className={styles.todo_item_modal}>
            <div className={styles.todo_item_modal_header}>
                <div className={styles.header_title}>Новая задача</div>
                <ClosedIcon onClick={() => setIsOpen(false)} className={styles.header_icon}/>
            </div>
            <div className={styles.todo_item_modal_input}>
                <label className={styles.todo_input_title}>Заголовок</label>
                <input className={styles.todo_input_title}
                    placeholder="Например: Сходить в магазин"
                    onChange={(e) => setUserInput({...userInput, title: e.currentTarget.value})}
                />
            </div>
            <div className={styles.todo_item_modal_input}>
                <label>Что нужно сделать ?</label>
                <input placeholder="Например: купить воду"
                onChange={(e) => setUserInput({...userInput, body: e.currentTarget.value})}
                />
            </div>
            <button onClick={() => {
                addTodo({
                    id: Date.now(),
                    title: userInput.title,
                    body: userInput.body,
                    complete: false
                })
            }}>Добавить</button>
        </div>
    )
}