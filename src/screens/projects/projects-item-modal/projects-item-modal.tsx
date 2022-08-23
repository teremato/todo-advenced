import { FC } from "react";
import { ClosedIcon } from "../../../components/ui/icons/icons";
import styles from './projects-item-modal.module.scss'

interface ProjectItemModalProp {
    closedWindow: Function
}

export const ProjectItemModal : FC<ProjectItemModalProp> = ({closedWindow}) => {
    return (
        <div className={styles.project_item_modal}>
            <div className={styles.project_item_modal_header}>
                <div className={styles.header_title}>Новый проект: </div>
                <ClosedIcon className={styles.header_closed_icon}
                onClick={() => closedWindow(false)}/>
            </div>
            <div className={styles.project_item_modal_inputs}>
                <div className={styles.inputs_field}>
                    <label>Название</label>
                    <input type="text" 
                    placeholder="Например: Заказ компании"/>
                </div>
                <div className={styles.inputs_field}>
                    <label>Описание</label>
                    <input type="text" 
                    placeholder="Например: Работа над цифровым сервисом"/>
                </div>
            </div>
            <button>Создать</button>
        </div>
    )
}