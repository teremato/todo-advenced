import { FC, useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { getTodo, setRemoveTodo, setTodo, setToggleTodo } from "../../../services/todo/todo-services"
import { addTodo, getTodos, toggleTodo, removeTodo } from "../../../store/todos/todosSlice"
import { ModalWindow } from "../../../components/ui/modal/modal"
import { TodoItemModal } from "./todo-item-modal/todo-item-modal"
import { TodoItem } from "./todo-item/todo-item"
import styles from './todo-form.module.scss'
import { Todo } from "../../../shared/creaters/todo-creater"


export const TodoForm : FC = () => {

    const dispatch = useAppDispatch()

    const {id : userId } = useAppSelector((state) => state.account.user)
    const todos = useAppSelector((state) => state.todos.todos)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    

    useEffect(() => {
        getTodo(userId).then((data) => {
            dispatch(getTodos(data.data()))
        })
    }, [dispatch, userId])

    const handleTodoAdd = (title: string, body: string) => {
        if (title && body !== '') {
            setTodo(userId, todos, Todo(title, body)).then(() => {
                dispatch(addTodo(Todo(title, body)))
            })
            setIsOpen(false)
        }
    }

    const handleToggle = (id: string | number)=> {
        setToggleTodo(userId, id, todos)
        .then(() => dispatch(toggleTodo({id: id})))
    }

    const handleRemoveTodo = (id: string | number) => {
        setRemoveTodo(userId, id, todos)
        .then(() => dispatch(removeTodo({id: id})))
    }

    return (
        <div className={styles.todo_form}>
            <div className={styles.todo_form_header}>
                <div>Мои задачи</div>
                <div className={styles.todo_count}>{(todos.length > 0) ? todos.length : ''}</div>
            </div>
            <button onClick={() => setIsOpen(true)} className={styles.add_todo_btn}>+</button>
            <div className={styles.todo_form_list}>
            {
                (todos) ?
                todos.map((todo) => {
                    return <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    handleToggle={handleToggle}
                    handleRemoveTodo={handleRemoveTodo}
                    />
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