import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getProjects } from "../../../services/project/project-services";
import { getAllProjects } from "../../../store/projects/projectsSlice";
import { ProjectFormItem } from "./project-form-item/project-form-item";
import styles from './project-form.module.scss'

export const ProjectForm : FC = () => {

    const dispatch = useAppDispatch()

    const {projects} = useAppSelector(state => state.projects)
    const {id: userId} = useAppSelector(state => state.account.user) 

    useEffect(() => {
        getProjects(userId).then((data) => {
            dispatch(getAllProjects(data.data()))
        })
    }, [dispatch, userId])

    return (
        <div className={styles.project_form}>
            <div className={styles.project_form_header}>
                <div>Мои проекты</div>
            </div>
            <div className={styles.project_form_list}>
            {
                (projects.length > 0) ?
                projects.map((project) => {
                    return <ProjectFormItem key={project.id} project={project}/>
                }) : ''
            }
            </div>
        </div>
    )
}