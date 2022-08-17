import { FC, useState } from "react";
import styles from './auth-form.module.scss'

interface AuthFormProp {
    title: string,
    subTitle: string,
    changeForm: Function,
    handleAuth: Function
}

export const AuthForm : FC<AuthFormProp> = ({title, subTitle, changeForm, handleAuth}) => {

    const [userInput, setUserInput] = useState({
        password: '',
        email: ''
    })

    return (
        <div className={styles.form}>
            <div className={styles.title}>{title}</div>
            <div className={styles.input_form}>
                <label>Введите логин</label>
                <input type="email" />
            </div>
            <div className={styles.input_form}>
                <label>Введите пароль</label>
                <input type="password" />
            </div>
            <button onClick={() => {
                handleAuth()
            }} className={styles.btn_auth}>Войти</button>
            <div className={styles.change_form}>
                <button onClick={() => changeForm()}>Или {subTitle}</button>
            </div>
        </div>
    )
}