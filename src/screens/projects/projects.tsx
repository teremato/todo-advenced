import { FC } from "react";
import { AddFolderIcon } from "../../components/ui/icons/icons";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import styles from './projects.module.scss'


export const Projects : FC = () => {
    return (
        <div className={styles.projects_page}>
            <div className={styles.projects_page_header}>
                <UIPageTitle title="Проекты"/>
                <AddFolderIcon className={styles.header_btn}/>
            </div>
            <div className={styles.projects_page_content}>
            {

            }
            </div>
        </div>
    )
}