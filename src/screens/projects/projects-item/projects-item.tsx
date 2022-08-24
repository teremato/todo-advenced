import { FC } from "react";
import { useNavigate } from 'react-router-dom'
import { AllListIcon, DateListIcon, NavLinkIcon, ToggleListIcon } from "../../../components/ui/icons/icons";
import { IProject } from "../../../shared/interfaces/project.interfase";
import styles from './projects-item.module.scss'


interface ProjectItemProp {
    project: IProject
}

export const ProjectItem : FC<ProjectItemProp> = ({project}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.projects_item}>
            <div className={styles.projects_item_header}>
                <div className={styles.title}>
                    <NavLinkIcon
                    className={styles.title_icon}
                    onClick={() => navigate(`/projects/${project.id}`)}
                    />
                    <div>{project.name}</div>
                </div>
                <div className={styles.description}>{project.description}</div>
            </div>
            <div className={styles.projects_item_info}>
                <div className={styles.item_field}>
                    <div>{project.todos.length}</div>
                    <AllListIcon className={styles.item_icon}/>
                </div>
                <div className={styles.item_field}>
                    <div>{project.todos.length}</div>
                    <ToggleListIcon className={styles.item_icon}/>
                </div>
                <div className={styles.item_field}>
                    <div>{project.lastUpdate}</div>
                    <DateListIcon className={styles.item_icon}/>
                </div>
            </div>
        </div>
    )
}