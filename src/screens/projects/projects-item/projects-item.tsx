import { FC } from "react";
import { AllListIcon, DateListIcon, NavLinkIcon, ToggleListIcon } from "../../../components/ui/icons/icons";
import styles from './projects-item.module.scss'


export const ProjectItem : FC = () => {
    return (
        <div className={styles.projects_item}>
            <div className={styles.projects_item_header}>
                <div className={styles.title}>
                    <NavLinkIcon className={styles.title_icon}/>
                    <div>Заголовок</div>
                </div>
                <div className={styles.description}>Проект от CIO</div>
            </div>
            <div className={styles.projects_item_info}>
                <div className={styles.item_field}>
                    <div>1</div>
                    <AllListIcon className={styles.item_icon}/>
                </div>
                <div className={styles.item_field}>
                    <div>10</div>
                    <ToggleListIcon className={styles.item_icon}/>
                </div>
                <div className={styles.item_field}>
                    <div>14.02</div>
                    <DateListIcon className={styles.item_icon}/>
                </div>
            </div>
        </div>
    )
}