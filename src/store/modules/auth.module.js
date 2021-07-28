import cookie from "js-cookie";
import auth from "../../api/auth/auth";

export default {
    namespaced: true,

    state() {
        return {
            token: cookie.get('token'),
            user: JSON.parse(localStorage.getItem('user'))
        }
    },

    mutations: {
        setToken(state, newToken) {
            return state.token = newToken
        },

        setUser(state, newUser) {
            return state.user = newUser
        },

        logout(state) {
            state.token = null
            state.user = null
            cookie.remove('token')
            localStorage.removeItem('user')
        }
    },

    actions: {
        async login({commit}, payload) {
            await auth(payload.values.login).then((data) => {
                commit('setUser', data[0])
                commit('setToken', data[0].token)
                if (payload.loginRemember.value) {
                    cookie.set('token', data[0].token, {expires: 7});
                    localStorage.setItem('user', JSON.stringify(data[0]))
                } else {
                    cookie.set('token', data[0].token)
                    localStorage.setItem('user', JSON.stringify(data[0]))
                }
            })
        },
    },

    getters: {
        getToken(state) {
            return state.token
        },

        isAuthenticated(_, getters) {
            return !!getters.getToken
        }
    }
}