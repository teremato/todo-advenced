import { createSlice } from "@reduxjs/toolkit";
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
        changeNameForUser(state, action) {
            state.user = {...state.user, name: action.payload.newName}
        },
        removeUser(state) {
            state.user = {
                ...state.user,
                id: '',
                name: '',
                email: '',
                photo: ''} 
        }
    }
})

export const { setUser, removeUser, changeNameForUser } = userSlice.actions
export default userSlice.reducer