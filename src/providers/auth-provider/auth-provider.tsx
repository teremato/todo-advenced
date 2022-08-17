import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { Authorization } from "../../screens";

interface AuthProviderProp {
    children: any
}

export const AuthProvider : FC<AuthProviderProp> = ({children}) => {
    
    const {token} = useAppSelector(state => state.user)

    return (
        <div>
            {
                (token) ? children : <Authorization/>
            }
        </div>
    )
}