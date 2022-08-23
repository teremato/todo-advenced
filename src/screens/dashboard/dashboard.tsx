import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardForm as ReadyDashboard } from "./dash-form/dash-form";
import { DashboardForm as FinelyDashboard } from "./dash-form/dash-form";
import { useAppSelector } from "../../hooks";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import { IProject } from "../../shared/interfaces/project.interfase";
import styles from './dashboard.module.scss'


export const Dashboard : FC = () => {

    const { id } = useParams()

    const { projects } = useAppSelector(state => state.projects)
    const [ currentProject, setCurrentProject ] = useState<IProject>({} as IProject)

    useEffect(() => {
        projects.forEach((project) => {
            if(project.id === id) {
                setCurrentProject({...project})
            }
        })
    }, [id, projects])

    return (
        <div className={styles.dashboard_page}>
            <div className={styles.dashboard_page_header}>
                <UIPageTitle title={currentProject.name}/>
                <div className={styles.header_description}>{currentProject.description}</div>
            </div>
            <div className={styles.dashboard_page_workspace}>
                <ReadyDashboard
                title="В работе"
                haveInput={true}
                />
                <FinelyDashboard
                title="Готово"
                haveInput={false}
                />
            </div>
        </div>
    )
}