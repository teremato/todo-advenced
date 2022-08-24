import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesMap } from "../../../utils/constans/routes.constans";
import { Dashboard, DefaultPage, Home, NotFound, Projects, Settings } from "../../../screens";


export const Routing : FC = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultPage/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path={RoutesMap.HOME} element={<Home/>}/>
            <Route path={RoutesMap.PROJECTS} element={<Projects/>}/>
            <Route path='/projects/:id' element={<Dashboard/>}/>
            <Route path={RoutesMap.SETTINGS} element={<Settings/>}/>
        </Routes>
    )
}