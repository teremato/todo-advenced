import { FC } from "react";
import { RemoveIcon, ToggleIcon } from "../../../../components/ui/icons/icons";
import styles from './dash-item.module.scss'

interface DashItemProp {
    todo: any
}

export const DashItem : FC<DashItemProp> = ({todo}) => {
    return (
        <div className={styles.dash_item}>
            <div className={styles.dash_item_header}>
                <ToggleIcon className={styles.dash_item_header_icon}/>
                <RemoveIcon className={styles.dash_item_header_icon}/>
            </div>
            <div>{todo.body}</div>
        </div>
    )
}