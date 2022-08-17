import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/interfaces/user.interface";

const initialState : IUser = {
    name: '', email: '', photo: '', id: '', token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.displayName
            state.email = action.payload.email
            state.photo = action.payload.photoUrl
            state.id = action.payload.id
            state.token = action.payload.token
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer