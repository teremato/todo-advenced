export const getCurrentDate = () : string => {
    let date = new Date()
    return `${date.getDate()}.${date.getMonth() + 1}`
}

export const createProjectId = () : string => {
    return Date.now().toString().slice(7, 12)
}

export const createTodoId = () : string => {
    return Date.now().toString()
}

export const createProjectTodoId = () : string => {
    return Date.now().toString().slice(3, 12)
}