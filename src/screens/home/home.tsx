import { FC } from "react";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import styles from './home.module.scss'
import { ProjectForm } from "./project-form/project-form";
import { TodoForm } from "./todo-form/todo-form";

export const Home : FC = () => {
    return (
        <div className={styles.home_page}>
            <UIPageTitle title="Домашняя страница"/>
            <div className={styles.home_page_content}>
                <TodoForm/>
                <ProjectForm/>
            </div>
        </div>
    )
}