import { FC, useState } from "react";
import { AuthForm as LoginForm } from "./auth-form/auth-form";
import { AuthForm as RegisterForm } from "./auth-form/auth-form";
import { UserLogin, UserRegister } from "../../services/user/user-services";
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../store/user/userSlice";
import styles from './authorization.module.scss'

export const Authorization : FC = () => {

    const dispatch = useAppDispatch()
    const [isLogin, setIsLogin] = useState(true)

    const changeForm = () => { setIsLogin(!isLogin) }

    const handleLogin = (email: string, password: string) => {
        UserLogin(email, password).then((user) => dispatch(setUser(user.toJSON())))
    }

    const handleRegister = (email: string, password: string) => {
        UserRegister(email, password).then((user) => dispatch(setUser(user.toJSON())))
    }

    return (
        <div className={styles.page_wrapper}>
            <div className={styles.content}>
                {
                    (isLogin) ? 
                    <LoginForm
                    title="Войти"
                    subTitle="зарегистрируйтесь"
                    changeForm={changeForm}
                    handleAuth={handleLogin}/>
                    : 
                    <RegisterForm 
                    title="Регистрация" 
                    subTitle="войдите"
                    changeForm={changeForm}
                    handleAuth={handleRegister}/>
                }
            </div>
        </div>
    )
}