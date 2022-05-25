import { lazy } from "react";
import Home from "../pages/Home";

const routesHome = [
    {
        exact:true,
        path:"/",
        component: lazy(() => import("../pages/Home/components/HomePage"))
    }
]

const renderRoutesHome = () => {
    return routesHome.map((route, index) => {
        return <Home key={index} exact={route.exact} path={route.path} component={route.component} />
    })
}

export { renderRoutesHome }