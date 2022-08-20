import { FC, useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { getTodo, setTodo } from "../../../services/todo/todo-services"
import { addTodo, getTodos } from "../../../store/user/userSlice"
import { ITodo } from "../../../shared/interfaces/todo.interfase"
import { ModalWindow } from "../../../components/ui/modal/modal"
import { TodoItemModal } from "./todo-item-modal/todo-item-modal"
import { TodoItem } from "./todo-item/todo-item"
import styles from './todo-form.module.scss'


export const TodoForm : FC = () => {

    const dispatch = useAppDispatch()

    const {id } = useAppSelector((state) => state.account.user)
    const todos = useAppSelector((state) => state.account.todos)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    

    useEffect(() => {
        getTodo(id).then((data) => {
            dispatch(getTodos(data.data()))
        })
    }, [dispatch, id])

    const handleTodoAdd = (todo : ITodo) => {
        setTodo(id, todos, todo).then(() => {
            dispatch(addTodo(todo))
        })
        setIsOpen(false)
    }

    const handleToggle = (id: string) => {

    }

    const removeTodo = (id: string) => {
        
    }

    return (
        <div className={styles.todo_form}>
            <div className={styles.todo_form_header}>
                <div>Мои задачи</div>
                <div className={styles.todo_count}>{todos.length}</div>
            </div>
            <button onClick={() => setIsOpen(true)} className={styles.add_todo_btn}>+</button>
            <div className={styles.todo_form_list}>
            {
                (todos) ?
                todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                }) : ''
            }
            </div>
            <ModalWindow isOpen={isOpen}>
                <TodoItemModal 
                setIsOpen={setIsOpen}
                addTodo={handleTodoAdd}
                />
            </ModalWindow>
        </div>
    )
}