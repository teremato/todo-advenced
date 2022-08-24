import { createSlice } from "@reduxjs/toolkit";
import { IProject } from "../../shared/interfaces/project.interfase";


interface IProjectsState {
    projects: Array<IProject>
}

const initialState : IProjectsState = {
    projects: []
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getAllProjects(state, action) {
            state.projects = action.payload.project
        },
        addProject(state, action) {
            state.projects.push(action.payload)
        },
        addProjectTodo(state, action) {
            state.projects = state.projects.map((project) => {
                if(project.id === action.payload.projectId) {
                    return {...project, todos: [...project.todos, action.payload.project]}
                }
                return project
            })
        }
    }
})

export const { getAllProjects, addProject, addProjectTodo } = projectSlice.actions
export default projectSlice.reducer