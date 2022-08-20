import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../shared/interfaces/todo.interfase";
import { IUser } from "../../shared/interfaces/user.interface";

interface IUserState {
    user: IUser
}

const initialState : IUserState = {
    user: {
        name: '',
        email: '',
        photo: '',
        id: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
           state.user =  Object.assign({}, state.user, action.payload)
        },
        removeUser(state) {
            
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer