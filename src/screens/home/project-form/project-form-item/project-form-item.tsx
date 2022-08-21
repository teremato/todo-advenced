import { FC } from "react"
import { ListIcon, ProjectHomeIcon } from "../../../../components/ui/icons/icons"
import styles from './project-form-item.module.scss'

export const ProjectFormItem : FC<any> = ({project}) => {
    return (
        <div className={styles.project_item}>
            <div className={styles.project_item_info}>
                <ProjectHomeIcon className={styles.project_item_color}
                style={{color: project.color}}/>
                <div className={styles.project_item_name}>{project.name}</div>
            </div>
            <div>
                <ListIcon className={styles.project_item_list_icon}/>
            </div>
        </div>
    )
}