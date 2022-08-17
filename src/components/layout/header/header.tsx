import { FC } from "react";
import { SearchIcon } from "../../ui/icons/icons";
import styles from './header.module.scss'

export const Header : FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.header_logo}>Todo Advanced</div>
                <div className={styles.header_search}>
                    <SearchIcon className={styles.header_search_icon}/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
        </header>
    )
}