import { IProjectTodo } from "../../shared/interfaces/project-todo.interface";

export const getCompleteArrayLength = (todos: Array<IProjectTodo>) : number => {
    let completeTodo = todos.filter(todo => todo.complete !== false).length
    return completeTodo
}

export const getNotCompleteArrayLength = (todos: Array<IProjectTodo>) : number => {
    let completeTodo = todos.filter(todo => todo.complete !== true).length
    return completeTodo
}