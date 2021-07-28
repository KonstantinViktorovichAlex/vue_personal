import NotFoundLayout from "../layout/NotFoundLayout";

export const notFoundRouter = [
    {
        path: '/:notFound(.*)',
        component: NotFoundLayout,
        meta: {
            layout: 'NotFoundLayout',
            isAuth: true
        },
    }
]