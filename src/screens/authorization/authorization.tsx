import { FC, useState } from "react";
import styles from './authorization.module.scss'
import { AuthForm as LoginForm } from "./auth-form/auth-form";
import { AuthForm as RegisterForm } from "./auth-form/auth-form";

export const Authorization : FC = () => {

    const [isLogin, setIsLogin] = useState(true)

    const changeForm = () => { setIsLogin(!isLogin) }

    return (
        <div className={styles.page_wrapper}>
            <div className={styles.content}>
                {
                    (isLogin) ? 
                    <LoginForm
                    title="Войти"
                    subTitle="зарегистрируйтесь"
                    changeForm={changeForm}
                    handleAuth={changeForm}/>
                    : 
                    <RegisterForm 
                    title="Регистрация" 
                    subTitle="войдите"
                    changeForm={changeForm}
                    handleAuth={changeForm}/>
                }
            </div>
        </div>
    )
}