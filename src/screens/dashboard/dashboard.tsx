import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardForm as ReadyDashboard } from "./dash-form/dash-form";
import { DashboardForm as FinelyDashboard } from "./dash-form/dash-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import { IProject } from "../../shared/interfaces/project.interfase";
import styles from './dashboard.module.scss'
import { addTodoToProject, removeTodoToProject, toggleTodoToProject } from "../../services/project/project-services";
import { IProjectTodo } from "../../shared/interfaces/project-todo.interface";
import { addProjectTodo, removeProjectTodo, toggleProjectTodo } from "../../store/projects/projectsSlice";


export const Dashboard : FC = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch()

    const { projects } = useAppSelector(state => state.projects)
    const {id: userId} = useAppSelector(state => state.account.user)
    const [ currentProject, setCurrentProject ] = useState<IProject>({} as IProject)

    useEffect(() => {
        projects.forEach((project) => {
            if(project.id === id) {
                setCurrentProject({...project})
            }
        })
    }, [id, projects])

    const addTodo = (project: IProjectTodo) => {
        addTodoToProject(userId, currentProject.id, projects, project)
        .then(() => dispatch(addProjectTodo({
            projectId: currentProject.id, 
            project: project
        })))
    }

    const toggleTodo = (todoID: string) => {
        toggleTodoToProject(userId, currentProject.id, projects, todoID)
        .then(() => dispatch(toggleProjectTodo({
            projectID: currentProject.id,
            todoID: todoID
        })))
    }

    const removeTodo = (todoID: string) => {
        removeTodoToProject(userId, currentProject.id, projects, todoID)
        .then(() => dispatch(removeProjectTodo({
            projectID: currentProject.id,
            todoID: todoID
        })))
    }

    return (
        <div className={styles.dashboard_page}>
            <div className={styles.dashboard_page_header}>
                <UIPageTitle title={currentProject.name}/>
                <div className={styles.header_description}>{currentProject.description}</div>
            </div>
            <div className={styles.dashboard_page_workspace}>
                <ReadyDashboard
                title="В работе"
                haveInput={true}
                addTodo={addTodo}
                isComplete={false}
                todos={currentProject.todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                />
                <FinelyDashboard
                title="Готово"
                haveInput={false}
                addTodo={addTodo}
                isComplete={true}
                todos={currentProject.todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                />
            </div>
        </div>
    )
}