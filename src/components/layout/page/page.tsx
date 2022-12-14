import { FC } from "react";
import { useAppSelector, useAuth } from "../../../hooks";
import styles from './page.module.scss'

interface PageProp {
    children: any
}

export const Page : FC<PageProp> = ({children}) => {

    const auth = useAuth()
    const {isDark} = useAppSelector((state) => state.theme)

    return (
        <div className={
            (isDark) ? `${styles.page} ${styles.active}` : styles.page
        }>
            <div className={styles.page_content}>
                {children}
            </div>
        </div>
    )
}