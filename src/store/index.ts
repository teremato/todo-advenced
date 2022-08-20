import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import userReducer from './user/userSlice'
import todosReducer from './todos/todosSlice'

const store = configureStore({
    reducer: {
        account: userReducer,
        theme: themeReducer,
        todos: todosReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
