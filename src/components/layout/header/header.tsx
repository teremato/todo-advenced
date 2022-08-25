import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAuth } from "../../../hooks";
import { RoutesMap } from "../../../utils/constans/routes.constans";
import { getShortName } from "../../../utils/helpers/shortName.helpers";
import { LoginIcon, SearchIcon } from "../../ui/icons/icons";
import { HeaderLogo } from "./header-logo/header-logo";
import styles from './header.module.scss'

export const Header : FC = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const {name, email} = useAppSelector((state) => state.account.user)
    const {isDark} = useAppSelector((state) => state.theme)

    return (
        <header className={
            ((isDark) ? `${styles.header} ${styles.active}` : `${styles.header}`)
        }>
            <div className={styles.header_content}>
                <HeaderLogo/>
                <div className={styles.header_search}>
                    <SearchIcon className={styles.header_search_icon}/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            {
            (!auth.isAuth) ?
            <div className={styles.header_user}>
                <div className={styles.header_user_name}>{(name) ? name : email}</div>
                <div className={styles.img}>{getShortName(name  as string)}</div>
            </div>
            :
            <div className={styles.header_user}>
                <div className={styles.header_user_name}>Войти</div>
                <LoginIcon
                onClick={() => navigate(RoutesMap.AUTHORIZATION)}
                className={styles.log_in}
                />
            </div>
            }
        </header>
    )
}