import { FC, useState } from "react";
import { ClosedIcon } from "../../../components/ui/icons/icons";
import { IProject } from "../../../shared/interfaces/project.interfase";
import styles from './projects-item-modal.module.scss'

interface ProjectItemModalProp {
    closedWindow: Function,
    createProject: (title: string, description: string) => void
}

export const ProjectItemModal : FC<ProjectItemModalProp> = ({closedWindow, createProject}) => {

    const [userInput, setUserInput] = useState({
        title: '',
        description: ''
    })

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
                    placeholder="Например: Заказ компании"
                    onChange={(e) => setUserInput({...userInput, title: e.currentTarget.value})}/>
                </div>
                <div className={styles.inputs_field}>
                    <label>Описание</label>
                    <input type="text" 
                    placeholder="Например: Работа над цифровым сервисом"
                    onChange={(e) => setUserInput({...userInput, description: e.currentTarget.value})}/>
                </div>
            </div>
            <button onClick={() => createProject(userInput.title, userInput.description)}>Создать</button>
        </div>
    )
}