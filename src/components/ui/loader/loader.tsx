import { FC } from "react"
import { ModalWindow } from "../modal/modal"
import styles from './loader.module.scss'

export const Loader : FC = () => {
    const loader = true;
    return (
        <ModalWindow isOpen={loader}>
            <div className={styles.spinner}></div>
        </ModalWindow>
    )
}