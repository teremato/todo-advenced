import { ITodo } from "../../shared/interfaces/todo.interfase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase"


// удаление todo из данных
export const setRemoveTodo = async(userId: string, id: string | number, todos: Array<ITodo>) => {
    let newArray = todos.filter((todo) => todo.id !== id)
    await updateTodo(userId, newArray)
}

// изменение массива
export const updateTodo = async(id: string, todos: Array<ITodo>) => {
    await setDoc(doc(db, 'todos', id), {todos: [...todos]})
}

// получения массива todos с сервера
export const getTodo = async(id: string) => {
    return await getDoc(doc(db, 'todos', id))
}

// добавления нового todo на сервер
export const setTodo = async(id: string, todos: Array<ITodo>, todo: ITodo) => {
    await setDoc(doc(db, 'todos', id), {todos: [...todos, todo]})
}

// изменить статус готовности 
export const setToggleTodo = async(userId: string, id: string | number, todos: Array<ITodo>) => {
    let newArray = todos.map((todo) => {
        if(todo.id === id) {
            return {...todo, complete: !todo.complete}
        } 
        return todo
    })
    await updateTodo(userId, newArray)
}