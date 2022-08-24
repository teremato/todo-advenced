import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import styles from './not-found.module.scss'


export const NotFound : FC = () => {

    const auth = useAuth()

    return (
        <div className={styles.not_found_page}>
            <div className={styles.not_found_page_title}>Страница не найдена :{'('}</div>
            {
                (auth) ?
                <div className={styles.link_bar}>
                    <div>Перейти на домашнюю  страницу</div>
                    <Link to=''>Перейти {'>'}</Link>
                </div>
                :
                <div>
                    <div>Зайдите в свой аккаунт</div>
                    <Link to=''>Перейти {'>'}</Link>
                </div>
            }
        </div>
    )
}