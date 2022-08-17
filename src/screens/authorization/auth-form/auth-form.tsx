import { FC, useState } from "react";
import styles from './auth-form.module.scss'

interface AuthFormProp {
    title: string,
    subTitle: string,
    changeForm: () => void,
    handleAuth: (email: string, password: string) => void
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
                <label>Введите почту</label>
                <input onChange={(e) => setUserInput({...userInput, email: e.currentTarget.value})} 
                type="email" />
            </div>
            <div className={styles.input_form}>
                <label>Введите пароль</label>
                <input onChange={(e) => setUserInput({...userInput, password: e.currentTarget.value})}
                type="password" />
            </div>
            <button onClick={() => {
                handleAuth(userInput.email, userInput.password)
            }} className={styles.btn_auth}>{title}</button>
            <div className={styles.change_form}>
                <button onClick={() => changeForm()}>Или {subTitle}</button>
            </div>
        </div>
    )
}