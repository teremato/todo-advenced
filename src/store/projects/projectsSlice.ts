import { createSlice } from '@reduxjs/toolkit';
import { IProject } from '../../shared/interfaces/project.interfase';

interface IProjectsState {
  projects: Array<IProject>;
}

const initialState: IProjectsState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getAllProjects(state, action) {
      state.projects = action.payload.project;
    },
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    removeCurrentProject(state, action) {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload.projectID
      );
    },
    addProjectTodo(state, action) {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.projectId) {
          return {
            ...project,
            todos: [...project.todos, action.payload.project],
          };
        }
        return project;
      });
    },
    toggleProjectTodo(state, action) {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.projectID) {
          return {
            ...project,
            todos: [
              ...project.todos.map((todo) => {
                if (todo.id === action.payload.todoID) {
                  return { ...todo, complete: !todo.complete };
                } // лишний else Зачем ?
                return todo;
              }),
            ],
          };
        } else return project;
      });
    },
    removeProjectTodo(state, action) {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.projectID) {
          return {
            ...project,
            todos: [
              ...project.todos.filter(
                (todo) => todo.id !== action.payload.todoID
              ),
            ],
          }; // лишний else Зачем ? return выше и так не даст выполнить код дальше.
        }
        return project;
      });
    },
  },
});

export const {
  getAllProjects,
  addProject,
  removeCurrentProject,
  addProjectTodo,
  toggleProjectTodo,
  removeProjectTodo,
} = projectSlice.actions;

export default projectSlice.reducer;
