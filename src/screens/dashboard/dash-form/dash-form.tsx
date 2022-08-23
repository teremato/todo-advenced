import { FC, useState } from "react";
import { AddProjectIcon, ClosedFormIcon } from "../../../components/ui/icons/icons";
import styles from './dash-form.module.scss'
import { DashItem } from "./dash-item/dash-item";


interface DashboardFormProp {
    title: string,
    haveInput: boolean
}

export const DashboardForm : FC<DashboardFormProp> = ({title, haveInput}) => {

    const [isAddForm, setIsAddForm] = useState(false)

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
                    <textarea rows={3}></textarea>
                    <AddProjectIcon className={styles.list_add_todo}/>
                </div> : ''
                }
                {

                }
            </div>
        </div>
    )
}