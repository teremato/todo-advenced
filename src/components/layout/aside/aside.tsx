import { FC } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector, useAuth } from "../../../hooks";
import { changeTheme } from "../../../store/theme/themeSlice";
import { removeUser } from "../../../store/user/userSlice";
import { RoutesMap } from "../../../utils/constans/routes.constans";
import * as Icon from '../../ui/icons/icons'
import styles from './aside.module.scss'

export const Aside : FC = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const auth = useAuth()
    const { isDark } = useAppSelector((state) => state.theme)

    return (
        <aside className={
            (isDark) ? `${styles.aside} ${styles.active}` : styles.aside
        }style={{
            pointerEvents: (!auth.isAuth) ? `all` : `none`
        }}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Icon.HomeIcon className={styles.nav_icon}/>
                        <NavLink to={RoutesMap.HOME}>Домашняя страница</NavLink>
                    </li>
                    <li>
                        <Icon.ProjectsIcon className={styles.nav_icon}/>
                        <NavLink to={RoutesMap.PROJECTS}>Проекты</NavLink>
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
                        <NavLink to={RoutesMap.SETTINGS}>Настройки</NavLink>
                    </li>
                    <li onClick={() =>  {
                        dispatch(removeUser());
                        navigate(RoutesMap.AUTHORIZATION)
                    }}>
                        <Icon.LogOutIcon
                        className={styles.nav_icon}
                        />
                        <div>Выйти</div>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}