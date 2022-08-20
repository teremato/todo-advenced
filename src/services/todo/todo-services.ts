import { ITodo } from "../../shared/interfaces/todo.interfase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase"

// добавления нового todo на сервер
export const setTodo = async(id: string, todos: Array<ITodo>, todo: ITodo) => {
    await setDoc(doc(db, 'todos', id), {todos: [...todos, todo]})
}
// получения массива todos с сервера
export const getTodo = async(id: string) => {
    return await getDoc(doc(db, 'todos', id))
}
