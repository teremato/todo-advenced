import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { IProjectTodo } from "../../shared/interfaces/project-todo.interface"
import { IProject } from "../../shared/interfaces/project.interfase"
import { getCurrentDate } from "../../utils/helpers/getDate.helpers"

// добавления нового проекта
export const setProject = async(userId : string, projects : Array<IProject>, project : IProject) => {
    await setDoc(doc(db, 'projects', userId), {project: [...projects, project]})
}

// Удаления проекта
export const removeProjectFromServer = async(userId: string, projectID: string, projects: Array<IProject>) => {
    let newArray = projects.filter((project) => project.id !== projectID)
    await updateTodo(userId, newArray)
}

// Получение проектов с сервера
export const getProjects = async(userId: string) => {
    return await getDoc(doc(db, 'projects', userId))
}

// Добавление todo в поле todos объекта project 
export const addTodoToProject = async(userId : string, projectId : string, projects: Array<IProject>, newProject: IProjectTodo) => {
    let newArray : Array<IProject> = projects.map((project) => {
        if(project.id === projectId){
            return {...project, todos: [...project.todos, {...newProject}], lastUpdate: getCurrentDate()}
        }
        return project
    })
    await updateTodo(userId, newArray)
}

// Измененение свойства для конкретного projectTodo в поле todos объекта project
export const toggleTodoToProject = async(userId: string, projectId: string, projects: Array<IProject>, todoId: string) => {
    let newArray : Array<IProject> = projects.map((project) => {
        if(project.id === projectId) {
            return {...project, todos: 
                [...project.todos.map((proj) => {
                return (proj.id === todoId) ? {...proj, complete: !proj.complete} : proj
            })], lastUpdate: getCurrentDate()}
        }
        else return project
    })
    await updateTodo(userId, newArray)
}

// Удаление конкретного projectTodo в поле todos объекта project
export const removeTodoToProject = async(userId: string, projectId: string, projects: Array<IProject>, todoId: string) => {
    let newArray : Array<IProject> = projects.map((project) => {
        if(project.id === projectId) {
            return {
                ...project, todos: [
                    ...project.todos.filter((todo) => todo.id !== todoId)
                ], lastUpdate: getCurrentDate()
            }
        }
        else return project
    })
    await updateTodo(userId, newArray)
}


//изменение массива проектов
export const updateTodo = async(id: string, projects: Array<IProject>) => {
    await setDoc(doc(db, 'projects', id), {project: [...projects]})
}