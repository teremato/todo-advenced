import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesMap } from "../../../utils/constans/routes.constans";
import { Authorization, Dashboard, DefaultPage, Home, NotFound, Projects, Settings } from "../../../screens";
import { useAuth } from "../../../hooks";


export const Routing : FC = () => {

    const auth = useAuth()

    return (
        (!auth.isAuth) ?
        <Routes>
            <Route path='/' element={<DefaultPage/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path={RoutesMap.HOME} element={<Home/>}/>
            <Route path={RoutesMap.PROJECTS} element={<Projects/>}/>
            <Route path='/projects/:id' element={<Dashboard/>}/>
            <Route path={RoutesMap.SETTINGS} element={<Settings/>}/>
            <Route path={RoutesMap.AUTHORIZATION} element={<Authorization/>}/>
        </Routes>
        :
        <Routes>
            <Route path='/' element={<DefaultPage/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path={RoutesMap.AUTHORIZATION} element={<Authorization/>}/>
        </Routes>
    )
}