import { IProjectTodo } from "../interfaces/project-todo.interface";
import { createProjectTodoId } from "../../utils/helpers/getDate.helpers";

export const ProjectTodo = (text: string) : IProjectTodo => {
    return {
        id: createProjectTodoId(),
        body: text,
        complete: false
    }
}