import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import userReducer from './user/userSlice'
import todosReducer from './todos/todosSlice'
import projectsReducer from './projects/projectsSlice'

const store = configureStore({
    reducer: {
        account: userReducer,
        theme: themeReducer,
        todos: todosReducer,
        projects: projectsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
