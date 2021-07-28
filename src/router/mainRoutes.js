import MainLayout from "../layout/MainLayout";
import Profile from "../view/Profile";
import Home from "../view/Home";

export const mainRoutes = [
    {
        path: '/dashboard',
        alias: '',
        name: 'dashboard',
        component: MainLayout,
        meta: {
            layout: 'main',
            isAuth: true
        },
        children: [
            {
                path: 'home',
                alias: '',
                name: 'home',
                component: Home,
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile
            },
        ]
    },
]