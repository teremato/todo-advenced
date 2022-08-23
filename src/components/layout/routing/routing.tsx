import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesMap } from "../../../utils/constans/routes.constans";
import { Dashboard, Home, Projects } from "../../../screens";


export const Routing : FC = () => {
    return (
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path={RoutesMap.HOME} element={<Home/>}/>
            <Route path={RoutesMap.PROJECTS} element={<Projects/>}>
            </Route>
            <Route path='/*' element={<Dashboard/>}/>
        </Routes>
    )
}