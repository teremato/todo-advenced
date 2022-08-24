import { FC, useState } from "react";
import styles from './input-field.module.scss'


interface InputFieldProp {
    fieldTitle : string,
    btnTitle: string,
    currentValue: string | null,
    action: (input: string) => void 
}

export const InputField : FC<InputFieldProp> = ({fieldTitle, btnTitle, currentValue, action}) => {

    const [userInput, setUserInput] = useState<string>(currentValue as string)

    return (
        <div className={styles.input_field}>
            <label className={styles.input_field_title}>{fieldTitle}</label>
            <div className={styles.input_container}>
                <input onChange={(e) => setUserInput(e.currentTarget.value)}
                value={userInput}
                />
                <button onClick={() => action(userInput)}>{btnTitle}</button>
            </div>
        </div>
    )
}