import { createTodoId } from "../../utils/helpers/getDate.helpers";
import { ITodo } from "../interfaces/todo.interfase";

export const Todo = (title: string, body: string) : ITodo => {
    return {
        id: createTodoId(),
        title: title,
        body: body,
        complete: false
    }
}