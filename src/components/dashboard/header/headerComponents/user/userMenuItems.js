import {ref} from "vue";
import {useStore} from 'vuex'
import {useRouter} from "vue-router";

export function itemMenu() {

    const store = useStore()
    const router = useRouter()
    const items = ref([
        {
            label: 'Настройки',
            icon: 'pi pi-fw pi-cog'
        },
        {
            label: 'Профиль',
            icon: 'pi pi-fw pi-user',
            to: '/profile'
        },
        {
            label: 'Выйти',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
                store.commit('auth/logout')
                router.push('/login')
            }
        }
    ]);
    return {
        items
    }
}