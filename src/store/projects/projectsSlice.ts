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
        }
    }
})

export const { getAllProjects, addProject } = projectSlice.actions
export default projectSlice.reducer