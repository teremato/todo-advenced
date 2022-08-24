import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { IProjectTodo } from "../../shared/interfaces/project-todo.interface"
import { IProject } from "../../shared/interfaces/project.interfase"

// добавления нового проекта
export const setProject = async(userId : string, projects : Array<IProject>, project : IProject) => {
    await setDoc(doc(db, 'projects', userId), {project: [...projects, project]})
}
// Получение проектов с сервера
export const getProjects = async(userId: string) => {
    return await getDoc(doc(db, 'projects', userId))
}

// Добавление todo в поле todos объекта project 
export const addTodoToProject = async(userId : string, projectId : string, projects: Array<IProject>, newProject: IProjectTodo) => {
    let newArray : Array<IProject> = projects.map((project) => {
        if(project.id === projectId){
            return {...project, todos: [...project.todos, newProject]}
        }
        return project
    })
    await updateTodo(userId, newArray)
}

//изменение массива проектов
export const updateTodo = async(id: string, projects: Array<IProject>) => {
    await setDoc(doc(db, 'projects', id), {project: [...projects]})
}