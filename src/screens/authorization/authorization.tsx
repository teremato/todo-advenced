import { FC, useState } from "react";
import { AuthForm as LoginForm } from "./auth-form/auth-form";
import { AuthForm as RegisterForm } from "./auth-form/auth-form";
import { createAndGetUser, getUser, UserLogin, UserRegister } from "../../services/user/user-services";
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../store/user/userSlice";
import styles from './authorization.module.scss'
import { Loader } from "../../components/ui/loader/loader";
import { isEmailValid, isPasswordValid } from "../../utils/helpers/validation.helpers";

export const Authorization : FC = () => {

    const dispatch = useAppDispatch()

    const [isLogin, setIsLogin] = useState(true)
    const [isLoader, setIsLoader] = useState<boolean>(false)
    const [isValid, setIsValid] = useState<boolean>(false)

    // Функция меняет форму аунтефикации (Регистрация/Вход)
    const changeForm = () => { setIsLogin(!isLogin) }
    
    // Функция для входа в систему по нажатию
    const handleLogin = (email: string, password: string, name: string = '') => {
        if(isEmailValid(email) && isPasswordValid(password)) {
            setIsLoader(true)
            UserLogin(email, password).then((user) => {
                getUser(user.uid).then((data) => dispatch(setUser(data.data())))
            }).then(() => setIsLoader(false))
        }else {
            setIsValid(true)
            setTimeout(() => {
                setIsValid(false)
            }, 2000)
        }
    }

    // Функция для регистрации и входа в систему по нажатию
    const handleRegister = (email: string, password: string, name: string = '') => {
        if(isEmailValid(email) && isPasswordValid(password)) {
            setIsLoader(true)
            UserRegister(email, password).then((user) => {
                createAndGetUser(user.uid, name, user.email ).then(data => {
                    dispatch(setUser(data.data()))
                }).then(() => setIsLoader(false))
            })
        }else {
            setIsValid(true)
            setTimeout(() => {
                setIsValid(false)
            }, 2000)
        }
    }

    return (
        (isLoader) ? <Loader/> :
        <div className={styles.page_wrapper}>
            <div className={styles.content}>
                {
                    (isLogin) ? 
                    <LoginForm
                    title="Войти"
                    subTitle="зарегистрируйтесь"
                    changeForm={changeForm}
                    handleAuth={handleLogin}
                    isLogin={isLogin}
                    isValid={isValid}/>
                    : 
                    <RegisterForm 
                    title="Регистрация" 
                    subTitle="войдите"
                    changeForm={changeForm}
                    handleAuth={handleRegister}
                    isLogin={isLogin}
                    isValid={isValid}/>
                }
            </div>
        </div>
    )
}