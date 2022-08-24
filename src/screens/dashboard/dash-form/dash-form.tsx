import { FC, useState } from "react";
import { AddProjectIcon, ClosedFormIcon } from "../../../components/ui/icons/icons";
import { IProjectTodo } from "../../../shared/interfaces/project-todo.interface";
import {ProjectTodo} from '../../../shared/creaters/project-todo-creater'
import { DashItem } from "./dash-item/dash-item";
import styles from './dash-form.module.scss'


interface DashboardFormProp {
    title: string,
    haveInput: boolean,
    addTodo: (projectTodo: IProjectTodo) => void,
    isComplete : boolean,
    todos: Array<IProjectTodo>
}

export const DashboardForm : FC<DashboardFormProp> = ({title, haveInput, addTodo, isComplete, todos}) => {

    const [isAddForm, setIsAddForm] = useState(false)
    const [userInput, setUserInput] = useState<string>('')

    return (
        <div className={styles.dash_form}>
            <div className={styles.dash_form_title}>{title}</div>
            {
                (haveInput) ? <button
                className={styles.dash_form_btn}
                onClick={() => setIsAddForm(true)}>+</button> : ''
            }
            <div className={styles.dash_form_list}>
                { (isAddForm) ?
                <div className={styles.dash_list_add_todo}>
                    <div className={styles.list_header_closed}>
                        <ClosedFormIcon onClick={() => setIsAddForm(false)}/>
                    </div>
                    <textarea onChange={(e) => setUserInput(e.currentTarget.value)} rows={3}></textarea>
                    <AddProjectIcon
                    className={styles.list_add_todo}
                    onClick={() => addTodo(ProjectTodo(userInput))}
                    />
                </div> : ''
                }
                {
                    (todos) ? 
                    todos.map((todo) => {
                        if (todo.complete === isComplete) {
                            return <DashItem todo={todo}/>
                        }
                        return ''
                    }) : ''
                }
            </div>
        </div>
    )
}