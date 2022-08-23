import { FC } from "react"
import { ListIcon, ProjectHomeIcon } from "../../../../components/ui/icons/icons"
import { IProject } from "../../../../shared/interfaces/project.interfase"
import styles from './project-form-item.module.scss'


interface ProjectFormItemProp {
    project: IProject
}

export const ProjectFormItem : FC<ProjectFormItemProp> = ({project}) => {
    return (
        <div className={styles.project_item}>
            <div className={styles.project_item_info}>
                <ProjectHomeIcon className={styles.project_item_color}/>
                <div className={styles.project_item_name}>{project.name}</div>
            </div>
            <div>
                <ListIcon className={styles.project_item_list_icon}/>
            </div>
        </div>
    )
}