import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeTheme } from "../../../store/theme/themeSlice";
import { removeUser } from "../../../store/user/userSlice";
import * as Icon from '../../ui/icons/icons'
import styles from './aside.module.scss'

export const Aside : FC = () => {

    const dispatch = useAppDispatch()
    const { isDark } = useAppSelector((state) => state.theme)


    return (
        <aside className={
            (isDark) ? `${styles.aside} ${styles.active}` : styles.aside
        }>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Icon.HomeIcon className={styles.nav_icon}/>
                        <div>Домашняя страница</div>
                    </li>
                    <li>
                        <Icon.ProjectsIcon className={styles.nav_icon}/>
                        <div>Проекты</div>
                    </li>
                </ul>
                <ul>
                    <li onClick={() => dispatch(changeTheme())}>
                        {
                            (isDark) ? <Icon.DarkThemeIcon className={styles.nav_icon}/> : 
                            <Icon.LightThemeIcon className={styles.nav_icon}/>
                        }
                        <div>
                            {(isDark) ? 'Темная тема' : 'Светлая тема'}
                        </div>
                    </li>
                    <li>
                        <Icon.SettingsIcon className={styles.nav_icon}/>
                        <div>Настройки</div>
                    </li>
                    <li onClick={() => removeUser()}>
                        <Icon.LogOutIcon className={styles.nav_icon}/>
                        <div>Выйти</div>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}