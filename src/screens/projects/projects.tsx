import { FC, useState } from "react";
import { AddFolderIcon } from "../../components/ui/icons/icons";
import { ModalWindow } from "../../components/ui/modal/modal";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import { ProjectItemModal } from "./projects-item-modal/projects-item-modal";
import { ProjectItem } from "./projects-item/projects-item";
import styles from './projects.module.scss'


export const Projects : FC = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.projects_page}>
            <div className={styles.projects_page_header}>
                <UIPageTitle title="Проекты"/>
                <AddFolderIcon className={styles.header_btn}
                onClick={() => setIsOpen(true)}/>
            </div>
            <div className={styles.projects_page_content}>
                <ProjectItem/>
            </div>
            <ModalWindow isOpen={isOpen}>
                <ProjectItemModal closedWindow={setIsOpen}/>
            </ModalWindow>
        </div>
    )
}