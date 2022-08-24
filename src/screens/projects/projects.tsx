import { FC, useState } from "react";
import { AddFolderIcon } from "../../components/ui/icons/icons";
import { ModalWindow } from "../../components/ui/modal/modal";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setProject } from "../../services/project/project-services";
import { Project } from "../../shared/creaters/project-creater";
import { IProject } from "../../shared/interfaces/project.interfase";
import { addProject } from "../../store/projects/projectsSlice";
import { ProjectItemModal } from "./projects-item-modal/projects-item-modal";
import { ProjectItem } from "./projects-item/projects-item";
import styles from './projects.module.scss'


export const Projects : FC = () => {
    
    const dispatch = useAppDispatch()

    const { id : userID } = useAppSelector(state => state.account.user)
    const { projects } = useAppSelector(state => state.projects)

    const [isOpen, setIsOpen] = useState(false)

    const createProject = (title: string, description: string) => {
        if(title && description !== '') {
            setProject(userID, projects, Project(title, description)).then(() => {
                dispatch(addProject(Project(title, description)))
            })
            setIsOpen(false)
        }
    }

    return (
        <div className={styles.projects_page}>
            <div className={styles.projects_page_header}>
                <UIPageTitle title="Проекты"/>
                <AddFolderIcon className={styles.header_btn}
                onClick={() => setIsOpen(true)}/>
            </div>
            <div className={styles.projects_page_content}>
                {
                    (projects.length > 0) ?
                    projects.map((project) => {
                        return <ProjectItem key={project.id} project={project}/>
                    }) : ''
                }
            </div>
            <ModalWindow isOpen={isOpen}>
                <ProjectItemModal
                closedWindow={setIsOpen}
                createProject={createProject}
                />
            </ModalWindow>
        </div>
    )
}