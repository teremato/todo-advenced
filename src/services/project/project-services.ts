import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { IProject } from "../../shared/interfaces/project.interfase"

// добавления нового проекта
export const setProject = async(userId : string, projects : Array<IProject>, project : IProject) => {
    await setDoc(doc(db, 'projects', userId), {project: [...projects, project]})
}
// Получение проектов с сервера
export const getProjects = async(userId: string) => {
    return await getDoc(doc(db, 'projects', userId))
}