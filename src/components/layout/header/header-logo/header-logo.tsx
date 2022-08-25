import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutesMap } from "../../../../utils/constans/routes.constans";
import { BurgerMenuIcon } from "../../../ui/icons/icons";
import * as Icon from '../../../ui/icons/icons'
import styles from './header-logo.module.scss'
import { useAppDispatch, useAppSelector, useAuth } from "../../../../hooks";
import { changeTheme } from "../../../../store/theme/themeSlice";
import { removeUser } from "../../../../store/user/userSlice";


export const HeaderLogo : FC = () => {

    const auth = useAuth()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isDark} = useAppSelector((state) => state.theme)
    const [navVision, setNavVision] = useState(false)

    return (
        <div
        className={styles.header_logo_container}
        style={{ pointerEvents: (!auth.isAuth) ? `all` : `none` } }
        >
            <BurgerMenuIcon
            onClick={() => setNavVision(!navVision)}
            className={ styles.burger_menu_icon}
            />
            <div className={styles.header_logo}>Todo <span>Advanced</span></div>
            <div className={(!navVision) ? styles.header_burger_nav_container
                : `${styles.header_burger_nav_container} ${styles.nav_active}`}>
                <div className={styles.header_burger_nav}>
                    <div className={styles.burger_menu_link}>
                        <Icon.HomeIcon className={styles.link_icon}/>
                        <Link to={RoutesMap.HOME}>Домашняя страница</Link>
                    </div>
                    <div className={styles.burger_menu_link}>
                        <Icon.ProjectsIcon className={styles.link_icon}/>
                        <Link to={RoutesMap.PROJECTS}>Проекты</Link>
                    </div>
                    <div 
                    onClick={() => dispatch(changeTheme())}
                    className={styles.burger_menu_link}
                    >
                        {
                            (!isDark) ?
                            <Icon.LightThemeIcon className={styles.link_icon}/>
                            :
                            <Icon.DarkThemeIcon className={styles.link_icon}/>
                        }
                        <div>
                            {
                                (isDark) ?
                                'Темная тема' : 'Светлая тема'
                            }
                        </div>
                    </div>
                    <div className={styles.burger_menu_link}>
                        <Icon.SettingsIcon className={styles.link_icon}/>
                        <Link to={RoutesMap.PROJECTS}>Настройки</Link>
                    </div>
                    <div className={styles.burger_menu_link}>
                        <Icon.LogOutIcon
                        onClick={() => {
                            dispatch(removeUser());
                            navigate(RoutesMap.AUTHORIZATION)
                        }}
                        className={styles.link_icon}
                        />
                        <Link to={''}>Выйти</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}