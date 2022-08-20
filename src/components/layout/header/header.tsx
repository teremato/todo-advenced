import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { SearchIcon } from "../../ui/icons/icons";
import styles from './header.module.scss'

export const Header : FC = () => {

    const {name, photo, email} = useAppSelector((state) => state.account.user)
    const {isDark} = useAppSelector((state) => state.theme)

    const defaultImg = 'https://img-fotki.yandex.ru/get/4106/319762282.18/0_10b4c2_859dfe5e_XL'

    return (
        <header className={
            ((isDark) ? `${styles.header} ${styles.active}` : `${styles.header}`)
        }>
            <div className={styles.header_content}>
                <div className={styles.header_logo}>Todo <span>Advanced</span></div>
                <div className={styles.header_search}>
                    <SearchIcon className={styles.header_search_icon}/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className={styles.header_user}>
                <div className={styles.header_user_name}>{(name) ? name : email}</div>
                <img
                 src={ (photo) ? photo : defaultImg } 
                 alt={email}
                />
            </div>
        </header>
    )
}