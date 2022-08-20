import { FC } from "react";

interface UIPageTitleProp {
    title: string
}

export const UIPageTitle : FC<UIPageTitleProp> = ({title}) => {
    return (
        <div style={{
            fontSize: `20px`,
            margin: `10px`
        }}>
            {title}
        </div>
    )
}