import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesMap } from "../../utils/constans/routes.constans";
import styles from './default-page.module.scss'


export const DefaultPage : FC = () => {
    
    const navigate = useNavigate()

    return (
        <div className={styles.default_page}>
            <div className={styles.default_page_content}>
                <div className={styles.title}>Добро пожаловать в Todo Advenced!</div>
                <div className={styles.description}>
                    Данный сервис поможет вам лучше всего
                    управляться с вашими задачами,
                    организовывать собственные проекты,
                    и управлять ими
                </div>
                <button className={styles.default_page_btn}
                onClick={() => navigate(RoutesMap.AUTHORIZATION)}
                >Войти или зарегистрироваться</button>
            </div>
        </div>
    )
}