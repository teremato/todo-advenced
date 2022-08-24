import { FC } from "react"
import { UIPageTitle } from "../../components/ui/page-title/page-tile"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { changeUserName } from "../../services/user/user-services"
import { changeNameForUser } from "../../store/user/userSlice"
import { InputField } from "./input-field/input-field"
import styles from './settings.module.scss'


export const Settings : FC = () => {

    const dispatch = useAppDispatch()

    const user = useAppSelector((state) => state.account.user)

    const changeName = (newName: string) => {
        changeUserName(user.id, newName, user)
        .then(() => dispatch(changeNameForUser({newName: newName})))
    }

    return (
        <div className={styles.settings_page}>
            <div>
                <UIPageTitle title="Настройки"/>
            </div>
            <div className={styles.settings_page_main}>
                <InputField
                fieldTitle="Обновить имя профиля"
                btnTitle="Сменить имя"
                currentValue={user.name}
                action={changeName}/>
            </div>
        </div>
    )
}