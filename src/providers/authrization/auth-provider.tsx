import { FC } from "react";
import { Authorization } from "../../screens";

interface AuthProviderProp {
    children: any
}

export const AuthProvider : FC<AuthProviderProp> = ({children}) => {
    const isAuth = false
    return (
        <div>
            {
                (isAuth) ? children : <Authorization/>
            }
        </div>
    )
}