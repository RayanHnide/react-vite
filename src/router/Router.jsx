import App from "../App";
import { AboutUsRoutes } from "../Routes/AboutUs";
import { HomeRoutes } from "../Routes/Home";
import {   RegisterRoutes } from "../Routes/Register";
import { SettingRoutes } from "../Routes/Setting";
import { SignInRoutes } from "../Routes/Signin";



export const RouterProject = [
    {
        path :'/',
        element :<App/>,
        children:[
            ...RegisterRoutes ,
            ...SignInRoutes,
            ...HomeRoutes,
            ...AboutUsRoutes,
            ...SettingRoutes
        ]
    }
]