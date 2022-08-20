import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../shared/interfaces/todo.interfase";
import { IUser } from "../../shared/interfaces/user.interface";

interface IUserState {
    user: IUser,
    todos: Array<ITodo>
}

const initialState : IUserState = {
    user: {
        name: '',
        email: '',
        photo: '',
        id: ''
    },
    todos: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
           state.user =  Object.assign({}, state.user, action.payload)
        },
        removeUser(state) {
            
        },
        getTodos(state, action) {
            state.todos = action.payload.todos
        },
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        toggleTodo(state, action) {

        },
        removeTodo(state, action) {
            
        }
    }
})

export const { setUser, getTodos, addTodo, removeUser } = userSlice.actions
export default userSlice.reducer