import { createProjectId, getCurrentDate } from "../../utils/helpers/getDate.helpers";
import { IProject } from "../interfaces/project.interfase";

export const Project = (title : string, description: string) : IProject => {
    return {
        id: createProjectId(),
        name: title,
        description: description,
        todos: [],
        lastUpdate: getCurrentDate()
    }
}