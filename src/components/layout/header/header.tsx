import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { getShortName } from "../../../utils/helpers/shortName.helpers";
import { SearchIcon } from "../../ui/icons/icons";
import styles from './header.module.scss'

export const Header : FC = () => {

    const {name, email} = useAppSelector((state) => state.account.user)
    const {isDark} = useAppSelector((state) => state.theme)

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
                <div className={styles.img}>{getShortName(name  as string)}</div>
            </div>
        </header>
    )
}