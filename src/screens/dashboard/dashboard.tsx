import { FC } from "react";
import { UIPageTitle } from "../../components/ui/page-title/page-tile";
import { DashboardForm as ReadyDashboard } from "./dash-form/dash-form";
import { DashboardForm as FinelyDashboard } from "./dash-form/dash-form";
import styles from './dashboard.module.scss'


export const Dashboard : FC = () => {
    return (
        <div className={styles.dashboard_page}>
            <div className={styles.dashboard_page_header}>
                <UIPageTitle title="Новый проект"/>
                <div className={styles.header_description}>Что то нужно сделать</div>
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