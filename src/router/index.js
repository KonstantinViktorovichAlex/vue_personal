import {createRouter, createWebHistory} from "vue-router";
import {loginRoutes} from "./loginRoutes";
import {mainRoutes} from "./mainRoutes";
import {notFoundRouter} from "./notFoundRouter";
import store from '../store'

const routes = [...notFoundRouter, ...loginRoutes, ...mainRoutes]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.isAuth

    if (requireAuth && store.getters['auth/isAuthenticated']) {
        next()
    } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
        next('/login')
    } else {
        next()
    }
})

export default router