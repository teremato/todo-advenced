import { IProjectTodo } from "./project-todo.interface";


export interface IProject {
    id: string,
    name: string,
    description: string,
    todos: Array<IProjectTodo>,
    lastUpdate: string
}