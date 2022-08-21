import { FC } from "react";
import { ProjectFormItem } from "./project-form-item/project-form-item";
import styles from './project-form.module.scss'

export const ProjectForm : FC = () => {

    const testArr = [
        {name: 'Учеба', color: 'green'},
        {name: 'Проект', color: 'blue'},
        {name: 'Дела по магазину', color: 'black'},
        {name: 'Дела по дому', color: 'purple'},
        {name: 'Работа', color: 'red'}
    ]

    return (
        <div className={styles.project_form}>
            <div className={styles.project_form_header}>
                <div>Мои проекты</div>
            </div>
            <div className={styles.project_form_list}>
            {
                testArr.map((pj) => {
                    return <ProjectFormItem project={pj}/>
                })
            }
            </div>
        </div>
    )
}