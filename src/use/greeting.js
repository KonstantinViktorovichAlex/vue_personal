import {ref} from "vue";
import getUser from "../api/user/getUserInfo";

export function useGreeting() {
    const hours = (new Date().getHours())
    const greeting = ref('')
    const user = ref(null)
    const isLoading = ref(true)

    getUser().then((res) => {
        if (res.request.readyState === 4) {
            user.value = res.data[0].firstname
            isLoading.value = false
        }
    })

    if (hours >= 0 && hours <= 5) {
        greeting.value = 'Доброй ночи'
    }

    if (hours >= 6 && hours <= 11) {
        greeting.value = 'Доброе утро'
    }

    if (hours >= 12 && hours <= 17) {
        greeting.value = 'Добрый день'
    }

    if (hours >= 18 && hours <= 23) {
        greeting.value = 'Добрый вечер'
    }

    return {
        greeting,
        user,
        isLoading,
    }
}