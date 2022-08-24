import { FC } from "react";
import { useAuth } from "../../hooks";
import { Authorization } from "../../screens";

interface AuthProviderProp {
    children: any
}

export const AuthProvider : FC<AuthProviderProp> = ({children}) => {
    
    const { isAuth } = useAuth()

    return (
        <div>
            {
                (!isAuth) ? children : ''
            }
        </div>
    )
}