import LoginLayout from "../layout/LoginLayout";
import Login from "../view/Login";
import {forgotRoutes} from "./forgotRoutes";

export const loginRoutes = [
    {
        path: '/login',
        component: LoginLayout,
        meta: {
            layout: 'login',
            isAuth: false
        },
        children: [
            {
                path: '',
                name: 'login',
                component: Login,
            },
            ...forgotRoutes
        ]
    },
]