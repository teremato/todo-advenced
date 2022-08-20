import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../shared/interfaces/todo.interfase";

interface ITodosState { todos: Array<ITodo> }

const initialState : ITodosState = { todos: [] }

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodos(state, action) {
            state.todos = action.payload.todos
        },
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        toggleTodo(state, action) {
            state.todos = state.todos.map((todo) => {
                if(action.payload.id === todo.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        }
    }
})

export const 
{
    getTodos,
    addTodo, 
    toggleTodo, 
    removeTodo 
} = todosSlice.actions

export default todosSlice.reducer
